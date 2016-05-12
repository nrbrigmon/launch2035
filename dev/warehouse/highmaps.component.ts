import {Component} from '@angular/core';
import {Jsonp, JSONP_PROVIDERS} from '@angular/http';
import {CHART_DIRECTIVES} from 'angular2-highcharts';

@Component({
  selector: 'my-highmaps',
  styles: [`
      chart {
        display: block;
      }
  `],
  directives:[CHART_DIRECTIVES],
  template: `
        <chart type="Map" [options]="options"></chart>`,
  providers:[JSONP_PROVIDERS]
})

export class MyHighMapsComponent {
  options: Object;
  chart: Object;
  constructor(jsonp : Jsonp) {
        jsonp.request('./dev/warehouse/tricounty.json').subscribe(res => {
          console.log(res);
            console.log(res.json);
            this.options = {
              title : { text : 'Alabama Counties' },
                    series : [{
                        name : 'Launch 2035',
                        data : res.json(),
                        states: {
                            hover: {
                                color: '#BADA55'
                            }
                        },
                        dataLabels: {
                            enabled: true
                        }
                }]
            };
        });
    }



    // saveChart(chart) {
    //   this.chart = chart;
    // }
    // onPointSelect(point) {
    //   alert(`${point.y} is selected`);
    // }
    // onSeriesHide(series) {
    //   alert(`${series.name} is selected`);
    // }


}
