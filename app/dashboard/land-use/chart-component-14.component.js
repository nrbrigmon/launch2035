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
var ChartComponent14 = (function () {
    function ChartComponent14() {
        this.options = {
            title: { text: 'Energy Use' },
            subtitle: { text: 'per Household per Year' },
            colors: ['#005C83', '#E84A36', '#A3D65C', '#4C4C4C', '#222222'],
            xAxis: {
                categories: ['Year 1']
            },
            yAxis: {
                min: 0,
                title: { text: 'Million BTU/Yr' }
            },
            chart: {
                type: 'column'
            },
            series: [{
                    name: 'Scenario 1',
                    data: [33.4]
                }, {
                    name: 'Scenario 2',
                    data: [34.1]
                }, {
                    name: 'Scenario 3',
                    data: [34.9]
                }]
        };
    }
    ChartComponent14.prototype.saveChart = function (chart) {
        this.chart = chart;
    };
    ChartComponent14.prototype.onPointSelect = function (point) {
        alert(point.y + " is selected");
    };
    ChartComponent14.prototype.onSeriesHide = function (series) {
        alert(series.name + " is selected");
    };
    ChartComponent14 = __decorate([
        core_1.Component({
            selector: 'chart-component-14',
            styles: ["\n      chart {\n        display: block;\n      }\n  "],
            template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
            directives: [angular2_highcharts_1.CHART_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], ChartComponent14);
    return ChartComponent14;
}());
exports.ChartComponent14 = ChartComponent14;
//# sourceMappingURL=chart-component-14.component.js.map