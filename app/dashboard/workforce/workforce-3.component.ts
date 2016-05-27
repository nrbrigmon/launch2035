import {Component} from '@angular/core';
import {CHART_DIRECTIVES} from 'angular2-highcharts';

@Component({
  selector:'workforce-3',
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

export class Workforce3Component {
    options: Object;
    chart: Object;
    constructor() {
        this.options = {
            chart:  { type: 'bar', marginRight: 50 },
            title : { text : 'Population Age 16-19 with No High School Diploma' },
            subtitle : { text : "And Not Enrolled (2014)" },
            xAxis: {
                type: 'category',
                title: { text: null },
                gridLineWidth: 0
            },
            yAxis: {
                title: { text: null },
                labels: { enabled: false },
                gridLineWidth: 0
            },
            legend: { enabled: false },
            plotOptions: {
                bar: {
                    colors: ['#E84A36', '#E84A36', '#E84A36', '#981B41', '#E84A36', '#E84A36', '#E84A36'],
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.1f}%',
                        crop: false,
                        overflow: "none"
                    }
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.1f}%</b><br/>'
            },
            series: [{
                name: 'Population',
                colorByPoint: true,
                data: [{
                    name: 'Greenville, SC',
                    y: 6.0
                }, {
                    name: 'US',
                    y: 4.6
                }, {
                    name: 'Chattanooga',
                    y: 4.6
                }, {
                    name: 'Launch2035',
                    y: 4.6
                }, {
                    name: 'Colorado Springs',
                    y: 4.3
                }, {
                    name: 'Austin',
                    y: 4.0
                }, {
                    name: 'Raleigh-Durham',
                    y: 3.4
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
