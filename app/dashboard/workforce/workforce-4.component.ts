import {Component} from '@angular/core';
import {CHART_DIRECTIVES} from 'angular2-highcharts';

@Component({
  selector:'workforce-4',
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

export class Workforce4Component {
    options: Object;
    chart: Object;
    constructor() {
        this.options = {
            chart:  { type: 'bar', marginRight: 50 },
            title : { text : 'Skilled Technology Jobs' },
            subtitle : { text : "As Share of Total Employment (2016)" },
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
            legend: { enabled: false },
            plotOptions: {
                bar: {
                    colors: ['#222222', '#4C4C4C', '#4C4C4C', '#4C4C4C', '#4C4C4C', '#4C4C4C', '#4C4C4C'],
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
                  name: 'Share',
                  colorByPoint: true,
                  data: [{
                      name: 'Launch2035',
                      y: 7.6
                  }, {
                      name: 'Austin',
                      y: 6.9
                  }, {
                      name: 'Raleigh-Durham',
                      y: 6.1
                  }, {
                      name: 'Colorado Springs',
                      y: 4.8
                  }, {
                      name: 'US',
                      y: 3.4
                  }, {
                      name: 'Greenville, SC',
                      y: 2.5
                  }, {
                      name: 'Chattanooga',
                      y: 2.1
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
