"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var HomeComponent = (function () {
    function HomeComponent(_router) {
        this._router = _router;
    }
    HomeComponent.prototype.webmap = function () { this._router.navigate(['/webmap']); };
    HomeComponent.prototype.dashboard = function () { this._router.navigate(['/dashboard']); };
    HomeComponent.prototype.warehouse = function () { this._router.navigate(['/warehouse']); };
    HomeComponent = __decorate([
        core_1.Component({
            template: "\n    <div class=\"row top-row module\">\n      <div class=\"col-xs-12 \">\n\n        <h2>Welcome to the Launch2035 Interactive Clearinghouse!</h2>\n        <p>Use the navigation menu or select an application component below.</p>\n\n      </div>\n    </div>\n    <div class=\"row app-entry-row\">\n        <div class=\"col-sm-4 col-md-4 app-entry-col\">\n          <img class=\"img-circle\" src=\"./img/webmap-screenshot.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\" (click)=\"webmap()\">\n          <h2>Web Map</h2>\n          <p>The Web Map is an interactive tool for visualizing geographic information about the region.</p>\n          <p><a class=\"btn btn-default\"  (click)=\"webmap()\"  role=\"button\">Go \u00BB</a></p>\n        </div><!-- /.col-md-4 -->\n        <div class=\"col-sm-4 col-md-4 app-entry-col\">\n          <img class=\"img-circle\" src=\"./img/warehouse-screenshot.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\" (click)=\"warehouse()\">\n          <h2>Warehouse</h2>\n          <p>The Warehouse is a place for storing and accessing data that can be used for regional and local planning.</p>\n          <p><a class=\"btn btn-default\" (click)=\"warehouse()\" role=\"button\">Go \u00BB</a></p>\n        </div><!-- /.col-md-4 -->\n        <div class=\"col-sm-4 col-md-4 app-entry-col\">\n          <img class=\"img-circle\" src=\"./img/dashboard-screenshot.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\" (click)=\"dashboard()\">\n          <h2>Dashboard</h2>\n          <p>The Launch2035 Dashboard is a set of indicators used to monitor the health of the regional economy and track performance on goals and strategies.</p>\n          <p><a class=\"btn btn-default\" (click)=\"dashboard()\" role=\"button\">Go \u00BB</a></p>\n        </div><!-- /.col-md-4 -->\n      </div>\n  ",
            styles: ["\n    .top-row{\n      padding-top: 50px;\n    }\n    .app-entry-row{\n        padding: 20px;\n    }\n    .app-entry-col{\n        padding: 20px;\n        text-align:center;\n    }\n    .img-circle {\n        box-shadow: 1px 1px 5px 1px #ccc;\n        cursor: pointer;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map