import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  template: `
    <div class="row top-row module">
      <div class="col-xs-12 ">

        <h2>Welcome to the Launch 2035 Interactive Clearinghouse!</h2>
        <p>Use the navigation menu or select an application component below.</p>

      </div>
    </div>
    <div class="row app-entry-row">
        <div class="col-sm-4 col-md-4 app-entry-col">
          <img class="img-circle" src="./img/webmap-screenshot.png" alt="Generic placeholder image" width="140" height="140">
          <h2>Web Map</h2>
          <p>The Web Map is an interactive tool that allows for examining terrain, roadway infrastructure, and selected Metropolitan Planning Organizational data.</p>
          <p><a class="btn btn-default"  (click)="webmap()"  role="button">Go »</a></p>
        </div><!-- /.col-md-4 -->
        <div class="col-sm-4 col-md-4 app-entry-col">
          <img class="img-circle" src="./img/warehouse-screenshot.png" alt="Generic placeholder image" width="140" height="140">
          <h2>Warehouse</h2>
          <p>The Warehouse is an easy to use interface for exploring the backend of every file found in both the Dashboard and the Web Map. It also serves as storage for files not found in either location.</p>
          <p><a class="btn btn-default" (click)="warehouse()" role="button">Go »</a></p>
        </div><!-- /.col-md-4 -->
        <div class="col-sm-4 col-md-4 app-entry-col">
          <img class="img-circle" src="./img/dashboard-screenshot.png" alt="Generic placeholder image" width="140" height="140">
          <h2>Dashboard</h2>
          <p>The Dashboard is a snapshot of economic, environmental, and social data at the regional and county level. It reveals insights into a path for a more sustainable future.</p>
          <p><a class="btn btn-default" (click)="dashboard()" role="button">Go »</a></p>
        </div><!-- /.col-md-4 -->
      </div>
  `,
  styles:[`
    .top-row{
        margin-top: 25px;
    }
    .app-entry-row{
        padding: 30px;
    }
    .app-entry-col{
        padding: 20px;
        text-align:center;
    }
    .img-circle {
        box-shadow: 1px 1px 5px 1px #ccc;
    }
  `]
})

export class HomeComponent {

    constructor(private _router:Router) {}

    webmap() {this._router.navigate(['/webmap']);}
    dashboard() {this._router.navigate(['/dashboard']);}
    warehouse() {this._router.navigate(['/warehouse']);}

}
