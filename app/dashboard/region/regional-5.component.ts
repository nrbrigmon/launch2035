import {Component} from '@angular/core';
import {CHART_DIRECTIVES} from 'angular2-highcharts';

@Component({
  selector:'regional-5',
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

export class Regional5Component {
  options: Object;
  chart: Object;
  constructor() {
        this.options = {
            chart:  { type: 'bar' },
            title : { text : 'GDP Per Employee' },
            subtitle : { text : "(2014)" },
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
                    colors: ['#A3D65C', '#A3D65C', '#A3D65C', '#44A13F', '#A3D65C', '#A3D65C', '#A3D65C'],
                    dataLabels: {
                        enabled: true,
                        format: '${point.y:,.0f}'
                    }
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>${point.y}</b><br/>'
            },
            series: [{
                name: 'GDP',
                colorByPoint: true,
                data: [{
                    name: 'Raleigh-Durham',
                    y: 125086
                }, {
                    name: 'Austin',
                    y: 118326
                }, {
                    name: 'US',
                    y: 112530
                }, {
                    name: 'Launch2035',
                    y: 105713
                }, {
                    name: 'Greenville, SC',
                    y: 89929
                }, {
                    name: 'Chattanooga',
                    y: 89786
                }, {
                    name: 'Colorado Springs',
                    y: 88524
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
