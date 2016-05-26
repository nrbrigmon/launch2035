import {Component} from '@angular/core';
import {CHART_DIRECTIVES} from 'angular2-highcharts';

@Component({
  selector:'entre-2',
    styles: [`
      chart {
        display: block;
      }
  `],
  template: `
        <chart [options]="options" (load)="saveChart($event.context)">
          <series (hide)="onSeriesHide($event.context)">
            <point (select)="onPointSelect($event.context)"></point>
          </series>
        </chart>
  `,
  directives: [CHART_DIRECTIVES]
})

export class Entre2Component {
    options: Object;
    chart: Object;
    constructor() {
        this.options = {
            chart:  { type: 'bar' },
            title : { text : 'Patents' },
            subtitle : { text : "Per 10,000 Employees (2013)" },
            xAxis: {
                type: 'category',
                title: { text: null },
                gridLineWidth: 0
            },
            yAxis: {
                title: { text: null },
                labels: { enabled: false },
                gridLineWidth: 0
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                bar: {
                    colors: ['#5F9CB6', '#5F9CB6', '#5F9CB6', '#5F9CB6', '#005C83', '#5F9CB6', '#5F9CB6'],
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.1f}%'
                    }
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.1f}%</b><br/>'
            },
            series: [{
                  name: 'Patents per 1K',
                  colorByPoint: true,
                  data: [{
                      name: 'Austin',
                      y: 28.7
                  }, {
                      name: 'Raleigh-Durham',
                      y: 21.8
                  }, {
                      name: 'Greenville, SC',
                      y: 9.9
                  }, {
                      name: 'US',
                      y: 8.9
                  }, {
                      name: 'Launch2035',
                      y: 8.3
                  }, {
                      name: 'Colorado Springs',
                      y: 7.0
                  }, {
                      name: 'Chattanooga',
                      y: 1.9
                  }]
              }]
        };
    }
    saveChart(chart) {
      this.chart = chart;
    }
    onPointSelect(point) {
      alert(`${point.y} is selected`);
    }
    onSeriesHide(series) {
      alert(`${series.name} is selected`);
    }
}
