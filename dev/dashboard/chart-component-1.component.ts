import {Component} from '@angular/core';
import {CHART_DIRECTIVES} from 'angular2-highcharts';

@Component({
  selector:'chart-component-1',
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

export class ChartComponent1 {
  options: Object;
  chart: Object;
  constructor() {
        this.options = {
            title : { text : 'Indicator A' },
            series: [{
                name: 's1',
                data: [2,3,5,8,13],
                allowPointSelect: true
            },{
                name: 's2',
                data: [-2,-3,-5,-8,-13],
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
