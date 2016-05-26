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
var Regional2Component = (function () {
    function Regional2Component() {
        this.options = {
            chart: { type: 'bar' },
            title: { text: 'Total Employment Growth' },
            subtitle: { text: "(2015)" },
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
                    colors: ['#5F9CB6', '#5F9CB6', '#5F9CB6', '#5F9CB6', '#5F9CB6', '#5F9CB6', '#005C83'],
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.1f}%'
                    }
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
            },
            series: [{
                    name: 'Growth',
                    colorByPoint: true,
                    data: [{
                            name: 'Austin',
                            y: 3.2
                        }, {
                            name: 'Chattanooga',
                            y: 2.4
                        }, {
                            name: 'Greenville, SC',
                            y: 2.2
                        }, {
                            name: 'Raleigh-Durham',
                            y: 2.2
                        }, {
                            name: 'Colorado Springs',
                            y: 2.0
                        }, {
                            name: 'US',
                            y: 1.4
                        }, {
                            name: 'Launch2035',
                            y: 1.2
                        }]
                }]
        };
    }
    Regional2Component.prototype.saveChart = function (chart) {
        this.chart = chart;
    };
    Regional2Component.prototype.onPointSelect = function (point) {
        alert(point.y + " is selected");
    };
    Regional2Component.prototype.onSeriesHide = function (series) {
        alert(series.name + " is selected");
    };
    Regional2Component = __decorate([
        core_1.Component({
            selector: 'regional-2',
            styles: ["\n      chart {\n        display: block;\n      }\n  "],
            template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
            directives: [angular2_highcharts_1.CHART_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Regional2Component);
    return Regional2Component;
}());
exports.Regional2Component = Regional2Component;
//# sourceMappingURL=regional-2.component.js.map