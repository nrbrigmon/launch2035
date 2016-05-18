import {Component} from '@angular/core';
import {CHART_DIRECTIVES} from 'angular2-highcharts';

@Component({
  selector:'chart-component-16',
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

export class ChartComponent16 {
  options: Object;
  chart: Object;
  constructor() {
        this.options = {
            title : { text : 'New Roadway Costs' },
            subtitle : { text : '' },
            colors: ['#005C83', '#E84A36', '#A3D65C', '#4C4C4C', '#222222'],
            xAxis: {
                categories: ['Year 1']
            },
            yAxis: {
                min: 0,
                title: { text: '' },
                labels: {
                    formatter: function () {
                        let num = (this.value).toString();
                        if (num >= 1000000){
                          return '$'+num.slice(0,num.length-6) + 'M';
                        } else if (num >= 1000){
                          return '$'+num.slice(0,num.length-3) + 'K';
                        } else {
                          return '$'+ this.value;
                        }
                    }
                }
            },
            chart: {
                type: 'column'
            },
            series: [{
                name: 'Scenario 1',
                data: [862811037]
            },{
                name: 'Scenario 2',
                data: [760707037]
            },{
                name: 'Scenario 3',
                data: [408145388]
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
