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
var Entre1Component = (function () {
    function Entre1Component() {
        this.options = {
            chart: { type: 'bar', marginRight: 50 },
            title: { text: 'Venture Capital Investment' },
            subtitle: { text: "Per $10,000 GDP (2015)" },
            xAxis: {
                type: 'category',
                title: { text: null },
                gridLineWidth: 0
            },
            yAxis: {
                title: { text: null },
                labels: { enabled: false },
                gridLineWidth: 0
            },
            legend: { enabled: false },
            plotOptions: {
                bar: {
                    colors: ['#A3D65C', '#A3D65C', '#A3D65C', '#A3D65C', '#44A13F', '#A3D65C', '#A3D65C'],
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.2f}%',
                        crop: false,
                        overflow: "none"
                    }
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
            },
            series: [{
                    name: 'Investment',
                    colorByPoint: true,
                    data: [{
                            name: 'Austin',
                            y: 64.20
                        }, {
                            name: 'US',
                            y: 34.64
                        }, {
                            name: 'Raleigh-Durham',
                            y: 32.86
                        }, {
                            name: 'Chattanooga',
                            y: 9.24
                        }, {
                            name: 'Launch2035',
                            y: 8.76
                        }, {
                            name: 'Greenville, SC',
                            y: 8.22
                        }, {
                            name: 'Colorado Springs',
                            y: 2.34
                        }]
                }]
        };
    }
    Entre1Component.prototype.saveChart = function (chart) {
        this.chart = chart;
    };
    Entre1Component.prototype.onPointSelect = function (point) {
        alert(point.y + " is selected");
    };
    Entre1Component.prototype.onSeriesHide = function (series) {
        alert(series.name + " is selected");
    };
    Entre1Component = __decorate([
        core_1.Component({
            selector: 'entre-1',
            styles: ["\n      chart {\n        display: block;\n      }\n  "],
            template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
            directives: [angular2_highcharts_1.CHART_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Entre1Component);
    return Entre1Component;
}());
exports.Entre1Component = Entre1Component;
//# sourceMappingURL=entreprenr-1.component.js.map