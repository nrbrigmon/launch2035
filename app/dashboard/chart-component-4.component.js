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
var ChartComponent4 = (function () {
    function ChartComponent4() {
        this.options = {
            style: {
                fontFamily: 'Montserrat'
            },
            title: { text: 'Goal 4' },
            colors: ['#005C83', '#E84A36', '#A3D65C', '#4C4C4C', '#222222'],
            chart: {
                type: 'column'
            },
            xAxis: {
                type: 'datetime'
            },
            series: [{
                    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                    pointStart: Date.UTC(2010, 0, 1),
                    pointInterval: 3600 * 1000 // one hour
                }, {
                    data: [39.9, 81.5, 116.4, 139.2, 154.0, 186.0, 145.6, 158.5, 226.4, 294.1, 195.6, 64.4],
                    pointStart: Date.UTC(2010, 0, 1),
                    pointInterval: 3600 * 1000 // one hour
                }]
        };
    }
    ChartComponent4.prototype.saveChart = function (chart) {
        this.chart = chart;
    };
    ChartComponent4.prototype.onPointSelect = function (point) {
        alert(point.y + " is selected");
    };
    ChartComponent4.prototype.onSeriesHide = function (series) {
        alert(series.name + " is selected");
    };
    ChartComponent4 = __decorate([
        core_1.Component({
            selector: 'chart-component-4',
            styles: ["\n      chart {\n        display: block;\n      }\n  "],
            template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
            directives: [angular2_highcharts_1.CHART_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], ChartComponent4);
    return ChartComponent4;
}());
exports.ChartComponent4 = ChartComponent4;
//# sourceMappingURL=chart-component-4.component.js.map