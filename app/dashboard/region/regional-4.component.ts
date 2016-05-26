import {Component} from '@angular/core';
import {CHART_DIRECTIVES} from 'angular2-highcharts';

@Component({
  selector:'regional-4',
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

export class Regional4Component {
  options: Object;
  chart: Object;
  constructor() {
        this.options = {
            lang: {
              thousandsSep: ","
            },
            chart:  { type: 'bar' },
            title : { text : 'GDP Per Capita' },
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
                    colors: ['#4C4C4C', '#4C4C4C', '#4C4C4C', '#222222', '#4C4C4C', '#4C4C4C', '#4C4C4C'],
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
                    y: 64434
                }, {
                    name: 'Austin',
                    y: 59313
                }, {
                    name: 'US',
                    y: 54045
                }, {
                    name: 'Launch2035',
                    y: 52143
                }, {
                    name: 'Colorado Springs',
                    y: 42556
                }, {
                    name: 'Greenville, SC',
                    y: 42318
                }, {
                    name: 'Chattanooga',
                    y: 41625
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
