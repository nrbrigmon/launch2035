import {Component} from '@angular/core';
import {CHART_DIRECTIVES} from 'angular2-highcharts';

@Component({
  selector:'chart-component-4',
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

export class ChartComponent4 {
  options: Object;
  chart: Object;
  constructor() {
        this.options = {
            title : { text : 'Goal 4' },
            colors: ['#005C83', '#E84A36', '#A3D65C', '#4C4C4C', '#222222'],
            chart: {
                type: 'column'
            },

            xAxis: {
                type: 'datetime'
            },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                pointStart: Date.UTC(2010, 0, 1),
                pointInterval: 3600 * 1000 // one hour
            },{
                data: [39.9, 81.5, 116.4, 139.2, 154.0, 186.0, 145.6, 158.5, 226.4, 294.1, 195.6, 64.4],
                pointStart: Date.UTC(2010, 0, 1),
                pointInterval: 3600 * 1000 // one hour
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
