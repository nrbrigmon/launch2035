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
var Entre3Component = (function () {
    function Entre3Component() {
        this.options = {
            chart: { type: 'bar' },
            title: { text: 'New/Young (<5 Yrs) Firms' },
            subtitle: { text: "Per 1,000 Population (2013)" },
            colors: ['#E84A36', '#222222'],
            xAxis: {
                categories: ['Austin', 'Raleigh-Durham', 'Colorado Springs', 'US', 'Launch2035', 'Chattanooga', 'Greenville, SC'],
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
                        enabled: true
                    }
                }
            },
            series: [{
                    name: null,
                    data: [6.1, 5.1, 5.0, 4.5, 3.8, 3.5, 3.3]
                }]
        };
    }
    Entre3Component.prototype.saveChart = function (chart) {
        this.chart = chart;
    };
    Entre3Component.prototype.onPointSelect = function (point) {
        alert(point.y + " is selected");
    };
    Entre3Component.prototype.onSeriesHide = function (series) {
        alert(series.name + " is selected");
    };
    Entre3Component = __decorate([
        core_1.Component({
            selector: 'entre-3',
            styles: ["\n      chart {\n        display: block;\n      }\n  "],
            template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
            directives: [angular2_highcharts_1.CHART_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Entre3Component);
    return Entre3Component;
}());
exports.Entre3Component = Entre3Component;
//# sourceMappingURL=entreprenr-3.component.js.map