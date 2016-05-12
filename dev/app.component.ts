import {Component, ElementRef, OnInit} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {WebMapComponent} from './webmap/webmap.component';
import {WarehouseComponent} from './warehouse/warehouse.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: './dev/app-main.html',
    directives: [ROUTER_DIRECTIVES]
})

@Routes([
  {path:'', component: HomeComponent },
  {path:'/webmap', component: WebMapComponent },
  {path:'/warehouse', component: WarehouseComponent},
  {path:'/dashboard', component: DashboardComponent}
])

export class AppComponent {
  navtoggle: string = 'no';

  navToggle(){
    if (this.navtoggle === 'no'){
      this.navtoggle = 'yes';
    } else {
      this.navtoggle = 'no';
    }
  }
}
