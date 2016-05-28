import {Component} from '@angular/core';
import {CHART_DIRECTIVES} from 'angular2-highcharts';

@Component({
  selector:'workforce-1',
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

export class Workforce1Component {
    options: Object;
    chart: Object;
    constructor() {
        this.options = {
            chart:  { type: 'bar', marginRight: 50 },
            title : { text : 'Share of Primary Working Age Population 25-64 ' },
            subtitle : { text : "With Associate's Degree or Higher (2014)" },
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
                        format: '{point.y:.0f}%',
                        crop: false,
                        overflow: "none"
                    }
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f}%</b><br/>'
            },
            series: [{
                name: 'Share',
                colorByPoint: true,
                data: [{
                    name: 'Raleigh-Durham',
                    y: 54
                }, {
                    name: 'Austin',
                    y: 49
                }, {
                    name: 'Colorado Springs',
                    y: 47
                }, {
                    name: 'Launch2035',
                    y: 42
                }, {
                    name: 'US',
                    y: 40
                }, {
                    name: 'Greenville, SC',
                    y: 37
                }, {
                    name: 'Chattanooga',
                    y: 36
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
