import {Component, ElementRef, Renderer} from '@angular/core';
import {ChartComponent1} from './chart-component-1.component';
import {ChartComponent2} from './chart-component-2.component';
import {ChartComponent3} from './chart-component-3.component';
import {ChartComponent4} from './chart-component-4.component';
import {ChartComponent5} from './chart-component-5.component';
import {ChartComponent6} from './chart-component-6.component';
import {ChartComponent7} from './chart-component-7.component';
import {ChartComponent8} from './chart-component-8.component';

@Component({
  templateUrl:'./dev/dashboard/dash-test.html',
  styleUrls: ['./dev/dashboard/dash-test.css'],
  directives: [ChartComponent1, ChartComponent2, ChartComponent3, ChartComponent4, ChartComponent5, ChartComponent6, ChartComponent7, ChartComponent8]
})

export class DashboardComponent {
  category:string = 'Region';
  cObj:string = 'Region';
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
