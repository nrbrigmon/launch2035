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
            title : { text : 'New/Young Firms (<5 Yrs)' },
            subtitle : { text : "Per 1,000 Population (2013)" },
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
                    colors: ['#E84A36', '#E84A36', '#E84A36', '#E84A36', '#981B41', '#E84A36', '#E84A36'],
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.1f}%'
                    }
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.1f}%</b><br/>'
            },
            series: [{
                name: 'Firms Per 1K',
                colorByPoint: true,
                data: [{
                    name: 'Austin',
                    y: 6.1
                }, {
                    name: 'Raleigh-Durham',
                    y: 5.1
                }, {
                    name: 'Colorado Springs',
                    y: 5.0
                }, {
                    name: 'US',
                    y: 4.5
                }, {
                    name: 'Launch2035',
                    y: 3.8
                }, {
                    name: 'Chattanooga',
                    y: 3.5
                }, {
                    name: 'Greenville, SC',
                    y: 3.3
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
