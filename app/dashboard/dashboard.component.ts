import {Component, ElementRef, Renderer} from '@angular/core';
import {Regional1Component} from './region/regional-1.component';
import {Regional2Component} from './region/regional-2.component';
import {Regional3Component} from './region/regional-3.component';
import {Regional4Component} from './region/regional-4.component';
import {Regional5Component} from './region/regional-5.component';
import {Regional6Component} from './region/regional-6.component';
import {Regional7Component} from './region/regional-7.component';
import {Regional8Component} from './region/regional-8.component';
import {Regional9Component} from './region/regional-9.component';
import {County1Component} from './county/county-1.component';
import {County2Component} from './county/county-2.component';
import {County3Component} from './county/county-3.component';
import {County4Component} from './county/county-4.component';
import {County5Component} from './county/county-5.component';
import {County6Component} from './county/county-6.component';
import {ChartComponent2} from './chart-component-2.component';
import {ChartComponent3} from './chart-component-3.component';
import {ChartComponent4} from './chart-component-4.component';
import {ChartComponent5} from './chart-component-5.component';
import {Workforce1Component} from './workforce/workforce-1.component';
import {Workforce2Component} from './workforce/workforce-2.component';
import {Workforce3Component} from './workforce/workforce-3.component';
import {Workforce4Component} from './workforce/workforce-4.component';
import {Entre1Component} from './entreprenr/entreprenr-1.component';
import {Entre2Component} from './entreprenr/entreprenr-2.component';
import {Entre3Component} from './entreprenr/entreprenr-3.component';
import {Entre4Component} from './entreprenr/entreprenr-4.component';
import {ChartComponent7} from './land-use/chart-component-7.component';
import {ChartComponent8} from './land-use/chart-component-8.component';
import {ChartComponent9} from './land-use/chart-component-9.component';
import {ChartComponent10} from './land-use/chart-component-10.component';
import {ChartComponent11} from './land-use/chart-component-11.component';
import {ChartComponent12} from './land-use/chart-component-12.component';
import {ChartComponent13} from './land-use/chart-component-13.component';
import {ChartComponent14} from './land-use/chart-component-14.component';
import {ChartComponent15} from './land-use/chart-component-15.component';
import {ChartComponent16} from './land-use/chart-component-16.component';
import {ChartComponent17} from './land-use/chart-component-17.component';
import {ChartComponent18} from './land-use/chart-component-18.component';

import 'rxjs/add/operator/map';

@Component({
  templateUrl:'dashboard/dash-test.html',
  styleUrls: ['dashboard/dash-test.css'],
  directives: [Regional1Component, Regional2Component, Regional3Component, Regional4Component, Regional5Component, Regional6Component, Regional7Component, Regional8Component, Regional9Component, County1Component, County2Component, County3Component, County4Component, County5Component, County6Component, ChartComponent3, ChartComponent4, ChartComponent5, Workforce1Component, Workforce2Component, Workforce3Component, Workforce4Component, Entre1Component, Entre2Component, Entre3Component, Entre4Component, ChartComponent7, ChartComponent8, ChartComponent9, ChartComponent10, ChartComponent11, ChartComponent12, ChartComponent13, ChartComponent14, ChartComponent15, ChartComponent16, ChartComponent17, ChartComponent18]
})

export class DashboardComponent {
  category:string = 'Home'; //category will help set the HTML template directive
  cObj:string = 'Home';  //cObj will help set an active class for the navbar
  constructor(public el: ElementRef, public renderer: Renderer){
    this.clickedOutside = this.clickedOutside.bind(this);
  }

  setCategory(_val:string){
    this.cObj = _val;
    this.category = _val;
    // console.log(this.el.nativeElement);
  }
  clickedOutside(){
    console.log('here');
  }

}
