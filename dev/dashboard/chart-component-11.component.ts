import {Component} from '@angular/core';
import {CHART_DIRECTIVES} from 'angular2-highcharts';

@Component({
  selector:'chart-component-11',
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

export class ChartComponent11 {
  options: Object;
  chart: Object;
  constructor() {
        this.options = {
            title : { text : 'Landscaping Water Use' },
            subtitle : { text : 'per HH per Year' },
            colors: ['#005C83', '#E84A36', '#A3D65C', '#4C4C4C', '#222222'],
            xAxis: {
                categories: ['2016']
            },
            yAxis: {
                min: 0,
                title: { text: 'Ratio of Jobs:Housing' }
            },
            chart: {
                type: 'column'
            },
            series: [{
                name: 'Scenario 1',
                data: [0.7]
            },{
                name: 'Scenario 2',
                data: [2.1]
            },{
                name: 'Scenario 3',
                data: [3.1]
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
