import {Component} from '@angular/core';

@Component({
  template: `
    <div class="module row">
      <div class="col-xs-12">
        <p>Welcome to the app, it stopped updating??</p>
        <p>Use the navigation menu above or choose from selection below:</p>
        <button class="btn btn-default">Web Map</button>
        <button class="btn btn-default">Warehouse</button>
        <button class="btn btn-default">Dashboard</button>
      </div>
    </div>
  `
})

export class HomeComponent { }
