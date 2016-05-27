import {Component} from '@angular/core';
import {CHART_DIRECTIVES} from 'angular2-highcharts';

@Component({
  selector:'regional-9',
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

export class Regional9Component {
  options: Object;
  chart: Object;
  constructor() {
        this.options = {
            chart:  { type: 'bar', marginRight: 50 },
            title : { text : 'Median Rent' },
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
                    colors: ['#A3D65C', '#A3D65C', '#A3D65C', '#A3D65C', '#A3D65C', '#A3D65C', '#44A13F'],
                    dataLabels: {
                        enabled: true,
                        format: '${point.y:,.0f}',
                        crop: false,
                        overflow: "none"
                    }
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>${point.y}</b><br/>'
            },
            series: [{
                name: 'Rent',
                colorByPoint: true,
                data: [{
                    name: 'Austin',
                    y: 1014
                }, {
                    name: 'Colorado Springs',
                    y: 941
                }, {
                    name: 'US',
                    y: 920
                }, {
                    name: 'Raleigh-Durham',
                    y: 897
                }, {
                    name: 'Chattanooga',
                    y: 749
                }, {
                    name: 'Greenville, SC',
                    y: 731
                }, {
                    name: 'Launch2035',
                    y: 704
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
