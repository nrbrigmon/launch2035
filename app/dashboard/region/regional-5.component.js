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
var Regional5Component = (function () {
    function Regional5Component() {
        this.options = {
            chart: { type: 'bar' },
            title: { text: 'GDP Per Employee' },
            subtitle: { text: "(2014)" },
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
                        format: '${point.y:,.0f}'
                    }
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>${point.y}</b><br/>'
            },
            series: [{
                    name: 'Growth',
                    colorByPoint: true,
                    data: [{
                            name: 'Raleigh-Durham',
                            y: 125086
                        }, {
                            name: 'Austin',
                            y: 118326
                        }, {
                            name: 'US',
                            y: 112530
                        }, {
                            name: 'Launch2035',
                            y: 105713
                        }, {
                            name: 'Greenville, SC',
                            y: 89929
                        }, {
                            name: 'Chattanooga',
                            y: 89786
                        }, {
                            name: 'Colorado Springs',
                            y: 88524
                        }]
                }]
        };
    }
    Regional5Component.prototype.saveChart = function (chart) {
        this.chart = chart;
    };
    Regional5Component.prototype.onPointSelect = function (point) {
        alert(point.y + " is selected");
    };
    Regional5Component.prototype.onSeriesHide = function (series) {
        alert(series.name + " is selected");
    };
    Regional5Component = __decorate([
        core_1.Component({
            selector: 'regional-5',
            styles: ["\n      chart {\n        display: block;\n      }\n  "],
            template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
            directives: [angular2_highcharts_1.CHART_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Regional5Component);
    return Regional5Component;
}());
exports.Regional5Component = Regional5Component;
//# sourceMappingURL=regional-5.component.js.map