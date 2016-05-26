import {Component} from '@angular/core';
import {CHART_DIRECTIVES} from 'angular2-highcharts';

@Component({
  selector:'entre-1',
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

export class Entre1Component {
    options: Object;
    chart: Object;
    constructor() {
        this.options = {
            chart:  { type: 'bar' },
            title : { text : 'Venture Capital Investment' },
            subtitle : { text : "Per $10,000 GDP (2015)" },
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
                    colors: ['#A3D65C', '#A3D65C', '#A3D65C', '#A3D65C', '#44A13F', '#A3D65C', '#A3D65C'],
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.2f}%'
                    }
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
            },
            series: [{
                name: 'Investment',
                colorByPoint: true,
                data: [{
                    name: 'Austin',
                    y: 64.20
                }, {
                    name: 'US',
                    y: 34.64
                }, {
                    name: 'Raleigh-Durham',
                    y: 32.86
                }, {
                    name: 'Chattanooga',
                    y: 9.24
                }, {
                    name: 'Launch2035',
                    y: 8.76
                }, {
                    name: 'Greenville, SC',
                    y: 8.22
                }, {
                    name: 'Colorado Springs',
                    y: 2.34
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
