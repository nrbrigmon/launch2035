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
var ChartComponent17 = (function () {
    function ChartComponent17() {
        this.options = {
            title: { text: 'Miles of New Bicycle Lanes' },
            subtitle: { text: '' },
            colors: ['#005C83', '#E84A36', '#A3D65C', '#4C4C4C', '#222222'],
            xAxis: {
                categories: ['Year 1']
            },
            yAxis: {
                min: 0,
                title: { text: 'Miles' }
            },
            chart: {
                type: 'column'
            },
            series: [{
                    name: 'Scenario 1',
                    data: [38.47]
                }, {
                    name: 'Scenario 2',
                    data: [38.09]
                }, {
                    name: 'Scenario 3',
                    data: [21.4]
                }]
        };
    }
    ChartComponent17.prototype.saveChart = function (chart) {
        this.chart = chart;
    };
    ChartComponent17.prototype.onPointSelect = function (point) {
        alert(point.y + " is selected");
    };
    ChartComponent17.prototype.onSeriesHide = function (series) {
        alert(series.name + " is selected");
    };
    ChartComponent17 = __decorate([
        core_1.Component({
            selector: 'chart-component-17',
            styles: ["\n      chart {\n        display: block;\n      }\n  "],
            template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
            directives: [angular2_highcharts_1.CHART_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], ChartComponent17);
    return ChartComponent17;
}());
exports.ChartComponent17 = ChartComponent17;
//# sourceMappingURL=chart-component-17.component.js.map