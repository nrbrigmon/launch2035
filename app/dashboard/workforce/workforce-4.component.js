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
var Workforce4Component = (function () {
    function Workforce4Component() {
        this.options = {
            chart: { type: 'bar', marginRight: 50 },
            title: { text: 'Skilled Technology Jobs' },
            subtitle: { text: "As Share of Total Employment (2016)" },
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
                    colors: ['#222222', '#4C4C4C', '#4C4C4C', '#4C4C4C', '#4C4C4C', '#4C4C4C', '#4C4C4C'],
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.1f}%',
                        crop: false,
                        overflow: "none"
                    }
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.1f}%</b><br/>'
            },
            series: [{
                    name: 'Share',
                    colorByPoint: true,
                    data: [{
                            name: 'Launch2035',
                            y: 7.6
                        }, {
                            name: 'Austin',
                            y: 6.9
                        }, {
                            name: 'Raleigh-Durham',
                            y: 6.1
                        }, {
                            name: 'Colorado Springs',
                            y: 4.8
                        }, {
                            name: 'US',
                            y: 3.4
                        }, {
                            name: 'Greenville, SC',
                            y: 2.5
                        }, {
                            name: 'Chattanooga',
                            y: 2.1
                        }]
                }]
        };
    }
    Workforce4Component.prototype.saveChart = function (chart) {
        this.chart = chart;
    };
    Workforce4Component.prototype.onPointSelect = function (point) {
        alert(point.y + " is selected");
    };
    Workforce4Component.prototype.onSeriesHide = function (series) {
        alert(series.name + " is selected");
    };
    Workforce4Component = __decorate([
        core_1.Component({
            selector: 'workforce-4',
            styles: ["\n      chart {\n        display: block;\n      }\n  "],
            template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
            directives: [angular2_highcharts_1.CHART_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Workforce4Component);
    return Workforce4Component;
}());
exports.Workforce4Component = Workforce4Component;
//# sourceMappingURL=workforce-4.component.js.map