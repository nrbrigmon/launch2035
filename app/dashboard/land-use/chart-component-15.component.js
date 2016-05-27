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
var ChartComponent15 = (function () {
    function ChartComponent15() {
        this.options = {
            title: { text: 'New Road Lane Miles' },
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
                    data: [383.47]
                }, {
                    name: 'Scenario 2',
                    data: [338.09]
                }, {
                    name: 'Scenario 3',
                    data: [181.4]
                }]
        };
    }
    ChartComponent15.prototype.saveChart = function (chart) {
        this.chart = chart;
    };
    ChartComponent15.prototype.onPointSelect = function (point) {
        alert(point.y + " is selected");
    };
    ChartComponent15.prototype.onSeriesHide = function (series) {
        alert(series.name + " is selected");
    };
    ChartComponent15 = __decorate([
        core_1.Component({
            selector: 'chart-component-15',
            styles: ["\n      chart {\n        display: block;\n      }\n  "],
            template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
            directives: [angular2_highcharts_1.CHART_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], ChartComponent15);
    return ChartComponent15;
}());
exports.ChartComponent15 = ChartComponent15;
//# sourceMappingURL=chart-component-15.component.js.map