import {Component} from '@angular/core';
import {CHART_DIRECTIVES} from 'angular2-highcharts';

@Component({
  selector:'workforce-1',
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

export class Workforce1Component {
    options: Object;
    chart: Object;
    constructor() {
        this.options = {
            chart:  { type: 'bar' },
            title : { text : 'Share of Primary Working Age (25-64) Population' },
            subtitle : { text : "With Associate's Degree or Higher (2014)" },
            colors: ['#005C83', '#E84A36', '#A3D65C', '#4C4C4C', '#222222'],
            xAxis: {
                categories: ['Raleigh-Durham', 'Austin', 'Colorado Springs', 'Launch2035', 'US', 'Greenville, SC', 'Chattanooga'],
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
                data: [54, 49, 47, 42, 40, 37, 36]
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
