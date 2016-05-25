import {Component} from '@angular/core';
import {CHART_DIRECTIVES} from 'angular2-highcharts';

@Component({
  selector:'entre-4',
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

export class Entre4Component {
    options: Object;
    chart: Object;
    constructor() {
        this.options = {
            chart:  { type: 'bar' },
            title : { text : 'Employment at New/Young (<5 Yrs) Firms' },
            subtitle : { text : "As Share of Total Employment (2013)" },
            colors: ['#4C4C4C', '#222222'],
            xAxis: {
                categories: ['Austin', 'Raleigh-Durham', 'Launch2035', 'US', 'Colorado Springs', 'Greenville, SC', 'Chattanooga'],
                title: { text: null }
            },
            yAxis: {
                title: { text: null },
                labels: {
                    formatter: function () {
                          return this.value+'%';
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
                              return this.y+'%';
                        }
                    }
                }
            },
            series: [{
                name: null,
                data: [12.6, 10.0, 9.3, 9.1, 8.5, 7.7, 7.1]
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
