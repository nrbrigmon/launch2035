import {Component} from '@angular/core';
import {CHART_DIRECTIVES} from 'angular2-highcharts';

@Component({
  selector:'chart-component-2',
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

export class ChartComponent2 {
  options: Object;
  chart: Object;
  constructor() {
        this.options = {
            style: {
                fontFamily: 'Montserrat'
            },
            title : { text : 'indicator B' },
            chart: {type: 'spline'},
            colors: ['#005C83', '#E84A36', '#A3D65C', '#4C4C4C', '#222222'],
            series: [{
                name: 's1',
                data: [
                          [1,12],
                          [2,5],
                          [3,18],
                          [4,13],
                          [5,7],
                          [6,4],
                          [7,9],
                          [8,10],
                          [9,15],
                          [10,22]
                        ],
                allowPointSelect: true
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
