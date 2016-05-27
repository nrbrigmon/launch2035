import {Component} from '@angular/core';
import {CHART_DIRECTIVES} from 'angular2-highcharts';

@Component({
  selector:'entre-4',
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

export class Entre4Component {
    options: Object;
    chart: Object;
    constructor() {
        this.options = {
            chart:  { type: 'bar', marginRight: 50 },
            title : { text : 'Employment at New/Young Firms (<5 Yrs)' },
            subtitle : { text : "As Share of Total Employment (2013)" },
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
                    colors: ['#4C4C4C', '#4C4C4C', '#222222', '#4C4C4C', '#4C4C4C', '#4C4C4C', '#4C4C4C'],
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.1f}%',
                        crop: false,
                        overflow: "none"
                    }
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.1f}%</b><br/>'
            },
            series: [{
                  name: 'Share',
                  colorByPoint: true,
                  data: [{
                      name: 'Austin',
                      y: 12.6
                  }, {
                      name: 'Raleigh-Durham',
                      y: 10.0
                  }, {
                      name: 'Launch2035',
                      y: 9.3
                  }, {
                      name: 'US',
                      y: 9.1
                  }, {
                      name: 'Colorado Springs',
                      y: 8.5
                  }, {
                      name: 'Greenville, SC',
                      y: 7.7
                  }, {
                      name: 'Chattanooga',
                      y: 7.1
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
