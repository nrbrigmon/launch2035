import {Component} from '@angular/core';
import {CHART_DIRECTIVES} from 'angular2-highcharts';

@Component({
  selector:'chart-component-11',
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

export class ChartComponent11 {
  options: Object;
  chart: Object;
  constructor() {
        this.options = {
            chart: { type: 'column' },
            title : { text : 'Landscaping Water Use' },
            subtitle : { text : 'per HH per Year' },
            colors: ['#005C83', '#E84A36', '#A3D65C', '#4C4C4C', '#222222'],
            xAxis: {
                type: 'category',
                title: { text: null },
                gridLineWidth: 0
            },
            yAxis: {
                gridLineWidth: 0,
                title: { text: 'Gallons per Day' }
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:,.1f}'
                    }
                }
            },
            legend: { enabled: false },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:,.1f}</b><br/>'
            },
            series: [{
                name: 'G/Day',
                colorByPoint: true,
                data: [{
                    name: 'Scenario 1',
                    y: 40.5
                }, {
                    name: 'Scenario 2',
                    y: 27.4
                }, {
                    name: 'Scenario 3',
                    y: 10.7
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
