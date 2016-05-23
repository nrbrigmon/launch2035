import {Component, ElementRef, Renderer} from '@angular/core';
import {ChartComponent1} from './chart-component-1.component';
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

@Component({
  templateUrl:'./dev/dashboard/dash-test.html',
  styleUrls: ['./dev/dashboard/dash-test.css'],
  directives: [ChartComponent1, ChartComponent2, ChartComponent3, ChartComponent4, ChartComponent5, Workforce1Component, Workforce2Component, Workforce3Component, Workforce4Component, Entre1Component, Entre2Component, Entre3Component, Entre4Component, ChartComponent7, ChartComponent8, ChartComponent9, ChartComponent10, ChartComponent11, ChartComponent12, ChartComponent13, ChartComponent14, ChartComponent15, ChartComponent16, ChartComponent17, ChartComponent18]
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
