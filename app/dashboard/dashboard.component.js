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
var regional_1_component_1 = require('./region/regional-1.component');
var regional_2_component_1 = require('./region/regional-2.component');
var regional_3_component_1 = require('./region/regional-3.component');
var regional_4_component_1 = require('./region/regional-4.component');
var regional_5_component_1 = require('./region/regional-5.component');
var regional_6_component_1 = require('./region/regional-6.component');
var regional_7_component_1 = require('./region/regional-7.component');
var regional_8_component_1 = require('./region/regional-8.component');
var regional_9_component_1 = require('./region/regional-9.component');
var county_1_component_1 = require('./county/county-1.component');
var county_2_component_1 = require('./county/county-2.component');
var county_3_component_1 = require('./county/county-3.component');
var county_4_component_1 = require('./county/county-4.component');
var county_5_component_1 = require('./county/county-5.component');
var county_6_component_1 = require('./county/county-6.component');
var chart_component_3_component_1 = require('./chart-component-3.component');
var chart_component_4_component_1 = require('./chart-component-4.component');
var chart_component_5_component_1 = require('./chart-component-5.component');
var workforce_1_component_1 = require('./workforce/workforce-1.component');
var workforce_2_component_1 = require('./workforce/workforce-2.component');
var workforce_3_component_1 = require('./workforce/workforce-3.component');
var workforce_4_component_1 = require('./workforce/workforce-4.component');
var entreprenr_1_component_1 = require('./entreprenr/entreprenr-1.component');
var entreprenr_2_component_1 = require('./entreprenr/entreprenr-2.component');
var entreprenr_3_component_1 = require('./entreprenr/entreprenr-3.component');
var entreprenr_4_component_1 = require('./entreprenr/entreprenr-4.component');
var chart_component_7_component_1 = require('./land-use/chart-component-7.component');
var chart_component_8_component_1 = require('./land-use/chart-component-8.component');
var chart_component_9_component_1 = require('./land-use/chart-component-9.component');
var chart_component_10_component_1 = require('./land-use/chart-component-10.component');
var chart_component_11_component_1 = require('./land-use/chart-component-11.component');
var chart_component_12_component_1 = require('./land-use/chart-component-12.component');
var chart_component_13_component_1 = require('./land-use/chart-component-13.component');
var chart_component_14_component_1 = require('./land-use/chart-component-14.component');
var chart_component_15_component_1 = require('./land-use/chart-component-15.component');
var chart_component_16_component_1 = require('./land-use/chart-component-16.component');
var chart_component_17_component_1 = require('./land-use/chart-component-17.component');
var chart_component_18_component_1 = require('./land-use/chart-component-18.component');
require('rxjs/add/operator/map');
var DashboardComponent = (function () {
    function DashboardComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.category = ''; //category will help set the HTML template directive
        this.cObj = ''; //cObj will help set an active class for the navbar
        this.clickedOutside = this.clickedOutside.bind(this);
    }
    DashboardComponent.prototype.setCategory = function (_val) {
        this.cObj = _val;
        this.category = _val;
        // console.log(this.el.nativeElement);
    };
    DashboardComponent.prototype.clickedOutside = function () {
        console.log('here');
    };
    DashboardComponent = __decorate([
        core_1.Component({
            templateUrl: 'dashboard/dash-test.html',
            styleUrls: ['dashboard/dash-test.css'],
            directives: [regional_1_component_1.Regional1Component, regional_2_component_1.Regional2Component, regional_3_component_1.Regional3Component, regional_4_component_1.Regional4Component, regional_5_component_1.Regional5Component, regional_6_component_1.Regional6Component, regional_7_component_1.Regional7Component, regional_8_component_1.Regional8Component, regional_9_component_1.Regional9Component, county_1_component_1.County1Component, county_2_component_1.County2Component, county_3_component_1.County3Component, county_4_component_1.County4Component, county_5_component_1.County5Component, county_6_component_1.County6Component, chart_component_3_component_1.ChartComponent3, chart_component_4_component_1.ChartComponent4, chart_component_5_component_1.ChartComponent5, workforce_1_component_1.Workforce1Component, workforce_2_component_1.Workforce2Component, workforce_3_component_1.Workforce3Component, workforce_4_component_1.Workforce4Component, entreprenr_1_component_1.Entre1Component, entreprenr_2_component_1.Entre2Component, entreprenr_3_component_1.Entre3Component, entreprenr_4_component_1.Entre4Component, chart_component_7_component_1.ChartComponent7, chart_component_8_component_1.ChartComponent8, chart_component_9_component_1.ChartComponent9, chart_component_10_component_1.ChartComponent10, chart_component_11_component_1.ChartComponent11, chart_component_12_component_1.ChartComponent12, chart_component_13_component_1.ChartComponent13, chart_component_14_component_1.ChartComponent14, chart_component_15_component_1.ChartComponent15, chart_component_16_component_1.ChartComponent16, chart_component_17_component_1.ChartComponent17, chart_component_18_component_1.ChartComponent18]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map