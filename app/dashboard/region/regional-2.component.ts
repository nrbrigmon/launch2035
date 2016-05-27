import {Component} from '@angular/core';
import {CHART_DIRECTIVES} from 'angular2-highcharts';

@Component({
  selector:'regional-2',
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

export class Regional2Component {
  options: Object;
  chart: Object;
  constructor() {
        this.options = {
            chart:  { type: 'bar', marginRight: 50 },
            title : { text : 'Total Employment Growth' },
            subtitle : { text : "(2015)" },
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
                    colors: ['#5F9CB6', '#5F9CB6', '#5F9CB6', '#5F9CB6', '#5F9CB6', '#5F9CB6', '#005C83'],
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
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
            },
            series: [{
                name: 'Growth',
                colorByPoint: true,
                data: [{
                    name: 'Austin',
                    y: 3.2
                }, {
                    name: 'Chattanooga',
                    y: 2.4
                }, {
                    name: 'Greenville, SC',
                    y: 2.2
                }, {
                    name: 'Raleigh-Durham',
                    y: 2.2
                }, {
                    name: 'Colorado Springs',
                    y: 2.0
                }, {
                    name: 'US',
                    y: 1.4
                }, {
                    name: 'Launch2035',
                    y: 1.2
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
