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
var Workforce3Component = (function () {
    function Workforce3Component() {
        this.options = {
            chart: { type: 'bar', marginRight: 50 },
            title: { text: 'Population Age 16-19 with No High School Diploma' },
            subtitle: { text: "And Not Enrolled (2014)" },
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
                    colors: ['#E84A36', '#E84A36', '#E84A36', '#981B41', '#E84A36', '#E84A36', '#E84A36'],
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
                    name: 'Population',
                    colorByPoint: true,
                    data: [{
                            name: 'Greenville, SC',
                            y: 6.0
                        }, {
                            name: 'US',
                            y: 4.6
                        }, {
                            name: 'Chattanooga',
                            y: 4.6
                        }, {
                            name: 'Launch2035',
                            y: 4.6
                        }, {
                            name: 'Colorado Springs',
                            y: 4.3
                        }, {
                            name: 'Austin',
                            y: 4.0
                        }, {
                            name: 'Raleigh-Durham',
                            y: 3.4
                        }]
                }]
        };
    }
    Workforce3Component.prototype.saveChart = function (chart) {
        this.chart = chart;
    };
    Workforce3Component.prototype.onPointSelect = function (point) {
        alert(point.y + " is selected");
    };
    Workforce3Component.prototype.onSeriesHide = function (series) {
        alert(series.name + " is selected");
    };
    Workforce3Component = __decorate([
        core_1.Component({
            selector: 'workforce-3',
            styles: ["\n      chart {\n        display: block;\n      }\n  "],
            template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
            directives: [angular2_highcharts_1.CHART_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Workforce3Component);
    return Workforce3Component;
}());
exports.Workforce3Component = Workforce3Component;
//# sourceMappingURL=workforce-3.component.js.map