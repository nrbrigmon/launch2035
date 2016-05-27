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
var Workforce1Component = (function () {
    function Workforce1Component() {
        this.options = {
            chart: { type: 'bar', marginRight: 50 },
            title: { text: 'Share of Primary Working Age Population (25-64) ' },
            subtitle: { text: "With Associate's Degree or Higher (2014)" },
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
                    colors: ['#A3D65C', '#A3D65C', '#A3D65C', '#44A13F', '#A3D65C', '#A3D65C', '#A3D65C'],
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.0f}%',
                        crop: false,
                        overflow: "none"
                    }
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f}%</b><br/>'
            },
            series: [{
                    name: 'Share',
                    colorByPoint: true,
                    data: [{
                            name: 'Raleigh-Durham',
                            y: 54
                        }, {
                            name: 'Austin',
                            y: 49
                        }, {
                            name: 'Colorado Springs',
                            y: 47
                        }, {
                            name: 'Launch2035',
                            y: 42
                        }, {
                            name: 'US',
                            y: 40
                        }, {
                            name: 'Greenville, SC',
                            y: 37
                        }, {
                            name: 'Chattanooga',
                            y: 36
                        }]
                }]
        };
    }
    Workforce1Component.prototype.saveChart = function (chart) {
        this.chart = chart;
    };
    Workforce1Component.prototype.onPointSelect = function (point) {
        alert(point.y + " is selected");
    };
    Workforce1Component.prototype.onSeriesHide = function (series) {
        alert(series.name + " is selected");
    };
    Workforce1Component = __decorate([
        core_1.Component({
            selector: 'workforce-1',
            styles: ["\n      chart {\n        display: block;\n      }\n  "],
            template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
            directives: [angular2_highcharts_1.CHART_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Workforce1Component);
    return Workforce1Component;
}());
exports.Workforce1Component = Workforce1Component;
//# sourceMappingURL=workforce-1.component.js.map