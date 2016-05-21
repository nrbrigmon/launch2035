import {Component, ElementRef, Renderer} from '@angular/core';
import {ChartComponent1} from './chart-component-1.component';
import {ChartComponent2} from './chart-component-2.component';
import {ChartComponent3} from './chart-component-3.component';
import {ChartComponent4} from './chart-component-4.component';
import {ChartComponent5} from './chart-component-5.component';
import {ChartComponent6} from './chart-component-6.component';
import {ChartComponent7} from './chart-component-7.component';
import {ChartComponent8} from './chart-component-8.component';
import {ChartComponent9} from './chart-component-9.component';
import {ChartComponent10} from './chart-component-10.component';
import {ChartComponent11} from './chart-component-11.component';
import {ChartComponent12} from './chart-component-12.component';
import {ChartComponent13} from './chart-component-13.component';
import {ChartComponent14} from './chart-component-14.component';
import {ChartComponent15} from './chart-component-15.component';
import {ChartComponent16} from './chart-component-16.component';
import {ChartComponent17} from './chart-component-17.component';
import {ChartComponent18} from './chart-component-18.component';

@Component({
  templateUrl:'./dev/dashboard/dash-test.html',
  styleUrls: ['./dev/dashboard/dash-test.css'],
  directives: [ChartComponent1, ChartComponent2, ChartComponent3, ChartComponent4, ChartComponent5, ChartComponent6, ChartComponent7, ChartComponent8, ChartComponent9, ChartComponent10, ChartComponent11, ChartComponent12, ChartComponent13, ChartComponent14, ChartComponent15, ChartComponent16, ChartComponent17, ChartComponent18]
})

export class DashboardComponent {
  category:string = 'Land Use'; //category will help set the HTML template directive
  cObj:string = 'Land Use';  //cObj will help set an active class for the navbar
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
