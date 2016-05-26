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
var Regional9Component = (function () {
    function Regional9Component() {
        this.options = {
            chart: { type: 'bar' },
            title: { text: 'Median Rent' },
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
                    colors: ['#A3D65C', '#A3D65C', '#A3D65C', '#A3D65C', '#A3D65C', '#A3D65C', '#44A13F'],
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
                    name: 'Rent',
                    colorByPoint: true,
                    data: [{
                            name: 'Austin',
                            y: 1014
                        }, {
                            name: 'Colorado Springs',
                            y: 941
                        }, {
                            name: 'US',
                            y: 920
                        }, {
                            name: 'Raleigh-Durham',
                            y: 897
                        }, {
                            name: 'Chattanooga',
                            y: 749
                        }, {
                            name: 'Greenville, SC',
                            y: 731
                        }, {
                            name: 'Launch2035',
                            y: 704
                        }]
                }]
        };
    }
    Regional9Component.prototype.saveChart = function (chart) {
        this.chart = chart;
    };
    Regional9Component.prototype.onPointSelect = function (point) {
        alert(point.y + " is selected");
    };
    Regional9Component.prototype.onSeriesHide = function (series) {
        alert(series.name + " is selected");
    };
    Regional9Component = __decorate([
        core_1.Component({
            selector: 'regional-9',
            styles: ["\n      chart {\n        display: block;\n      }\n  "],
            template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
            directives: [angular2_highcharts_1.CHART_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Regional9Component);
    return Regional9Component;
}());
exports.Regional9Component = Regional9Component;
//# sourceMappingURL=regional-9.component.js.map