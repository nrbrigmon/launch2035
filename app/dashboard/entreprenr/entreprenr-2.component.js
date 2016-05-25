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
var angular2_highcharts_1 = require('angular2-highcharts');
var Entre2Component = (function () {
    function Entre2Component() {
        this.options = {
            chart: { type: 'bar' },
            title: { text: 'Patents' },
            subtitle: { text: "Per 10,000 Employees (2013)" },
            colors: ['#A3D65C', '#4C4C4C', '#222222'],
            xAxis: {
                categories: ['Austin', 'Raleigh-Durham', 'Greenville, SC', 'US', 'Launch2035', 'Colorado Springs', 'Chattanooga'],
                title: { text: null }
            },
            yAxis: {
                title: { text: null },
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true,
                    }
                }
            },
            series: [{
                    name: null,
                    data: [28.7, 21.8, 9.9, 8.9, 8.3, 7.0, 1.9]
                }]
        };
    }
    Entre2Component.prototype.saveChart = function (chart) {
        this.chart = chart;
    };
    Entre2Component.prototype.onPointSelect = function (point) {
        alert(point.y + " is selected");
    };
    Entre2Component.prototype.onSeriesHide = function (series) {
        alert(series.name + " is selected");
    };
    Entre2Component = __decorate([
        core_1.Component({
            selector: 'entre-2',
            styles: ["\n      chart {\n        display: block;\n      }\n  "],
            template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
            directives: [angular2_highcharts_1.CHART_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Entre2Component);
    return Entre2Component;
}());
exports.Entre2Component = Entre2Component;
//# sourceMappingURL=entreprenr-2.component.js.map