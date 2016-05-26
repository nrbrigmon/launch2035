import {Component} from '@angular/core';
import {CHART_DIRECTIVES} from 'angular2-highcharts';

@Component({
  selector:'regional-1',
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

export class Regional1Component {
  options: Object;
  chart: Object;
  constructor() {
        this.options = {
            chart:  { type: 'bar' },
            title : { text : 'GDP Growth' },
            subtitle : { text : "Current Dollars (2014)" },
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
                    colors: ['#A3D65C', '#A3D65C', '#A3D65C', '#A3D65C', '#A3D65C', '#44A13F', '#A3D65C'],
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.1f}%'
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
                    y: 7.7
                }, {
                    name: 'Greenville, SC',
                    y: 5.1
                }, {
                    name: 'Colorado Springs',
                    y: 4.4
                }, {
                    name: 'Raleigh-Durham',
                    y: 4.3
                }, {
                    name: 'US',
                    y: 4.1
                }, {
                    name: 'Launch2035',
                    y: 2.8
                }, {
                    name: 'Chattanooga',
                    y: 1.0
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
