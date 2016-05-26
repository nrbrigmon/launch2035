import {Component} from '@angular/core';
import {CHART_DIRECTIVES} from 'angular2-highcharts';

@Component({
  selector:'regional-8',
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

export class Regional8Component {
  options: Object;
  chart: Object;
  constructor() {
        this.options = {
            chart:  { type: 'bar' },
            title : { text : 'Median House Value' },
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
                    colors: ['#4C4C4C', '#4C4C4C', '#4C4C4C', '#4C4C4C', '#4C4C4C', '#222222', '#4C4C4C'],
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
                name: 'Growth',
                colorByPoint: true,
                data: [{
                    name: 'Colorado Springs',
                    y: 215300
                }, {
                    name: 'Raleigh-Durham',
                    y: 202248
                }, {
                    name: 'Austin',
                    y: 196500
                }, {
                    name: 'US',
                    y: 175700
                }, {
                    name: 'Chattanooga',
                    y: 154000
                }, {
                    name: 'Launch2035',
                    y: 152644
                }, {
                    name: 'Greenville, SC',
                    y: 137600
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
