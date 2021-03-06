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
var County1Component = (function () {
    function County1Component() {
        this.options = {
            chart: { type: 'bar', marginRight: 50 },
            title: { text: 'Total Employment Growth' },
            subtitle: { text: "(2015)" },
            colors: ['#005C83', '#E84A36', '#A3D65C', '#4C4C4C', '#222222'],
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
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:,.1f}%',
                        crop: false,
                        overflow: "none"
                    }
                }
            },
            legend: { enabled: false },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.1f}%</b><br/>'
            },
            series: [{
                    name: 'Growth',
                    colorByPoint: true,
                    data: [{
                            name: 'Madison',
                            y: 1.4
                        }, {
                            name: 'Morgan',
                            y: 0.3
                        }, {
                            name: 'Limestone',
                            y: 1.8
                        }]
                }]
        };
    }
    County1Component.prototype.saveChart = function (chart) {
        this.chart = chart;
    };
    County1Component.prototype.onPointSelect = function (point) {
        alert(point.y + " is selected");
    };
    County1Component.prototype.onSeriesHide = function (series) {
        alert(series.name + " is selected");
    };
    County1Component = __decorate([
        core_1.Component({
            selector: 'county-1',
            styles: ["\n      chart {\n        display: block;\n      }\n  "],
            template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
            directives: [angular2_highcharts_1.CHART_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], County1Component);
    return County1Component;
}());
exports.County1Component = County1Component;
//# sourceMappingURL=county-1.component.js.map