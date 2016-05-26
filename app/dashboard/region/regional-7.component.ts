import {Component} from '@angular/core';
import {CHART_DIRECTIVES} from 'angular2-highcharts';

@Component({
  selector:'regional-7',
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

export class Regional7Component {
  options: Object;
  chart: Object;
  constructor() {
        this.options = {
            chart:  { type: 'bar' },
            title : { text : 'Median Hourly Wage' },
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
                    colors: ['#981B41', '#E84A36', '#E84A36', '#E84A36', '#E84A36', '#E84A36', '#E84A36'],
                    dataLabels: {
                        enabled: true,
                        format: '${point.y:.2f}'
                    }
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>${point.y:.2f}</b><br/>'
            },
            series: [{
                name: 'Wage',
                colorByPoint: true,
                data: [{
                    name: 'Launch2035',
                    y: 22.23
                }, {
                    name: 'Raleigh-Durham',
                    y: 22.10
                }, {
                    name: 'Austin',
                    y: 21.19
                }, {
                    name: 'US',
                    y: 20.82
                }, {
                    name: 'Colorado Springs',
                    y: 19.76
                }, {
                    name: 'Chattanooga',
                    y: 17.95
                }, {
                    name: 'Greenville, SC',
                    y: 17.73
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
