import {Component} from '@angular/core';
import {CHART_DIRECTIVES} from 'angular2-highcharts';

@Component({
  selector:'workforce-2',
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

export class Workforce2Component {
    options: Object;
    chart: Object;
    constructor() {
        this.options = {
            chart:  { type: 'bar', marginRight: 50 },
            title : { text : 'Growth in Primary Working Age Population (25-64)' },
            subtitle : { text : "With Associate's Degree or Higher (2014)" },
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
                    colors: ['#5F9CB6', '#5F9CB6', '#5F9CB6', '#005C83', '#5F9CB6', '#5F9CB6', '#5F9CB6'],
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.1f}%',
                        crop: false,
                        overflow: "none"
                    }
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.1f}%</b><br/>'
            },
            series: [{
                  name: 'Growth',
                  colorByPoint: true,
                  data: [{
                      name: 'Austin',
                      y: 4.1
                  }, {
                      name: 'Raleigh-Durham',
                      y: 2.8
                  }, {
                      name: 'Chattanooga',
                      y: 2.3
                  }, {
                      name: 'Launch2035',
                      y: 1.9
                  }, {
                      name: 'US',
                      y: 1.9
                  }, {
                      name: 'Colorado Springs',
                      y: 1.5
                  }, {
                      name: 'Greenville, SC',
                      y: 1.1
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
