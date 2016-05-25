import {Component} from '@angular/core';
import {CHART_DIRECTIVES} from 'angular2-highcharts';

@Component({
  selector:'chart-component-15',
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

export class ChartComponent15 {
  options: Object;
  chart: Object;
  constructor() {
        this.options = {
            title : { text : 'New Road Lane Miles' },
            subtitle : { text : '' },
            colors: ['#005C83', '#E84A36', '#A3D65C', '#4C4C4C', '#222222'],
            xAxis: {
                categories: ['Year 1']
            },
            yAxis: {
                min: 0,
                title: { text: 'Miles' }
            },
            chart: {
                type: 'column'
            },
            series: [{
                name: 'Scenario 1',
                data: [383.47]
            },{
                name: 'Scenario 2',
                data: [338.09]
            },{
                name: 'Scenario 3',
                data: [181.4]
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
