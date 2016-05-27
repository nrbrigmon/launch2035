import {Component} from '@angular/core';
import {CHART_DIRECTIVES} from 'angular2-highcharts';

@Component({
  selector:'regional-6',
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

export class Regional6Component {
  options: Object;
  chart: Object;
  constructor() {
        this.options = {
            chart:  { type: 'bar', marginRight: 50 },
            title : { text : 'Unemployment Rate' },
            subtitle : { text : "Not seasonally adjusted (March 2016)" },
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
                    colors: ['#005C83', '#5F9CB6', '#5F9CB6', '#5F9CB6', '#5F9CB6', '#5F9CB6', '#5F9CB6'],
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
                name: 'Rate',
                colorByPoint: true,
                data: [{
                    name: 'Launch2035',
                    y: 5.5
                }, {
                    name: 'Chattanooga',
                    y: 5.2
                }, {
                    name: 'US',
                    y: 5.1
                }, {
                    name: 'Greenville, SC',
                    y: 5.0
                }, {
                    name: 'Raleigh-Durham',
                    y: 4.6
                }, {
                    name: 'Colorado Springs',
                    y: 4.0
                }, {
                    name: 'Austin',
                    y: 3.1
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
