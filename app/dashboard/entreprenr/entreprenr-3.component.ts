import {Component} from '@angular/core';
import {CHART_DIRECTIVES} from 'angular2-highcharts';

@Component({
  selector:'entre-3',
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

export class Entre3Component {
    options: Object;
    chart: Object;
    constructor() {
        this.options = {
            chart:  { type: 'bar' },
            title : { text : 'New/Young (<5 Yrs) Firms' },
            subtitle : { text : "Per 1,000 Population (2013)" },
            colors: ['#E84A36', '#222222'],
            xAxis: {
                categories: ['Austin', 'Raleigh-Durham', 'Colorado Springs', 'US', 'Launch2035', 'Chattanooga', 'Greenville, SC'],
                title: { text: null }
            },
            yAxis: {
                title: { text: null },
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            series: [{
                name: null,
                data: [6.1, 5.1, 5.0, 4.5, 3.8, 3.5, 3.3]
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
