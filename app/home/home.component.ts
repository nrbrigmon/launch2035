import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  template: `
    <div class="row top-row module">
      <div class="col-xs-12 ">

        <h2>Welcome to the Launch2035 Interactive Clearinghouse!</h2>
        <p>Use the navigation menu or select an application component below.</p>

      </div>
    </div>
    <div class="row app-entry-row">
        <div class="col-sm-4 col-md-4 app-entry-col">
          <img class="img-circle" src="./img/webmap-screenshot.png" alt="Generic placeholder image" width="140" height="140" (click)="webmap()">
          <h2>Web Map</h2>
          <p>The Web Map is an interactive tool for visualizing geographic information about the region.</p>
          <p><a class="btn btn-default"  (click)="webmap()"  role="button">Go »</a></p>
        </div><!-- /.col-md-4 -->
        <div class="col-sm-4 col-md-4 app-entry-col">
          <img class="img-circle" src="./img/warehouse-screenshot.png" alt="Generic placeholder image" width="140" height="140" (click)="warehouse()">
          <h2>Warehouse</h2>
          <p>The Warehouse is a place for storing and accessing data that can be used for regional and local planning.</p>
          <p><a class="btn btn-default" (click)="warehouse()" role="button">Go »</a></p>
        </div><!-- /.col-md-4 -->
        <div class="col-sm-4 col-md-4 app-entry-col">
          <img class="img-circle" src="./img/dashboard-screenshot.png" alt="Generic placeholder image" width="140" height="140" (click)="dashboard()">
          <h2>Dashboard</h2>
          <p>The Launch2035 Dashboard is a set of indicators used to monitor the health of the regional economy and track performance on goals and strategies.</p>
          <p><a class="btn btn-default" (click)="dashboard()" role="button">Go »</a></p>
        </div><!-- /.col-md-4 -->
      </div>
  `,
  styles:[`
    .top-row{
      padding-top: 50px;
    }
    .app-entry-row{
        padding: 20px;
    }
    .app-entry-col{
        padding: 20px;
        text-align:center;
    }
    .img-circle {
        box-shadow: 1px 1px 5px 1px #ccc;
        cursor: pointer;
    }
  `]
})

export class HomeComponent {

    constructor(private _router:Router) {}

    webmap() {this._router.navigate(['/webmap']);}
    dashboard() {this._router.navigate(['/dashboard']);}
    warehouse() {this._router.navigate(['/warehouse']);}

}
