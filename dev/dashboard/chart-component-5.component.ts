import {Component} from '@angular/core';
import {CHART_DIRECTIVES} from 'angular2-highcharts';

@Component({
  selector:'chart-component-5',
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

export class ChartComponent5 {
  options: Object;
  chart: Object;
  constructor() {
    this.options = {
        title : { text : 'Goal 4' },
        chart: {
            type: 'pie'
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'a',
                y: 56.33
            }, {
                name: 'b',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'd',
                y: 10.38
            }, {
                name: 'e',
                y: 4.77
            }, {
                name: 'f',
                y: 0.91
            }, {
                name: 'c',
                y: 0.2
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
