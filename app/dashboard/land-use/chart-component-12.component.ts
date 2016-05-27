import {Component} from '@angular/core';
import {CHART_DIRECTIVES} from 'angular2-highcharts';

@Component({
  selector:'chart-component-12',
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

export class ChartComponent12 {
  options: Object;
  chart: Object;
  constructor() {
        this.options = {
            chart: { type: 'column' },
            title : { text : 'Open Space Consumed' },
            subtitle : { text : 'Acreage' },
            colors: ['#005C83', '#E84A36', '#A3D65C', '#4C4C4C', '#222222'],
            xAxis: {
                type: 'category',
                title: { text: null },
                gridLineWidth: 0
            },
            yAxis: {
                gridLineWidth: 0,
                title: { text: 'Acres' },
                labels: {
                    formatter: function () {
                        let num = (this.value).toString();
                        if (num >= 1000){
                          return ''+num.slice(0,num.length-3) + 'K';
                        } else {
                          return ''+ this.value;
                        }
                    }
                }
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:,.0f}'
                    }
                }
            },
            legend: { enabled: false },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:,.0f}</b><br/>'
            },
            series: [{
                name: 'Acres',
                colorByPoint: true,
                data: [{
                    name: 'Scenario 1',
                    y: 9728
                }, {
                    name: 'Scenario 2',
                    y: 9743
                }, {
                    name: 'Scenario 3',
                    y: 6961
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
