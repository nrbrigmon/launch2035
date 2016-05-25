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
            chart:  { type: 'bar' },
            title : { text : 'Growth in Primary Working Age (25-64) Population' },
            subtitle : { text : "With Associate's Degree or Higher (2014)" },
            colors: ['#A3D65C', '#4C4C4C', '#222222'],
            xAxis: {
                categories: ['Austin', 'Raleigh-Durham', 'Chattanooga', 'Launch2035', 'US', 'Colorado Springs', 'Greenville, SC' ],
                title: { text: null }
            },
            yAxis: {
                title: { text: null },
                labels: {
                    formatter: function () {
                          return this.value + '%';
                    }
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true,
                        formatter: function () {
                              return this.y + '%';
                        }
                    }
                }
            },
            series: [{
                name: null,
                data: [4.1, 2.8, 2.3, 1.9, 1.9, 1.5, 1.1]
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
