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
var Regional7Component = (function () {
    function Regional7Component() {
        this.options = {
            chart: { type: 'bar', marginRight: 50 },
            title: { text: 'Median Hourly Wage' },
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
                    colors: ['#981B41', '#E84A36', '#E84A36', '#E84A36', '#E84A36', '#E84A36', '#E84A36'],
                    dataLabels: {
                        enabled: true,
                        format: '${point.y:.2f}',
                        crop: false,
                        overflow: "none"
                    }
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>${point.y:.2f}</b><br/>'
            },
            series: [{
                    name: 'Wage',
                    colorByPoint: true,
                    data: [{
                            name: 'Launch2035',
                            y: 22.23
                        }, {
                            name: 'Raleigh-Durham',
                            y: 22.10
                        }, {
                            name: 'Austin',
                            y: 21.19
                        }, {
                            name: 'US',
                            y: 20.82
                        }, {
                            name: 'Colorado Springs',
                            y: 19.76
                        }, {
                            name: 'Chattanooga',
                            y: 17.95
                        }, {
                            name: 'Greenville, SC',
                            y: 17.73
                        }]
                }]
        };
    }
    Regional7Component.prototype.saveChart = function (chart) {
        this.chart = chart;
    };
    Regional7Component.prototype.onPointSelect = function (point) {
        alert(point.y + " is selected");
    };
    Regional7Component.prototype.onSeriesHide = function (series) {
        alert(series.name + " is selected");
    };
    Regional7Component = __decorate([
        core_1.Component({
            selector: 'regional-7',
            styles: ["\n      chart {\n        display: block;\n      }\n  "],
            template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
            directives: [angular2_highcharts_1.CHART_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Regional7Component);
    return Regional7Component;
}());
exports.Regional7Component = Regional7Component;
//# sourceMappingURL=regional-7.component.js.map