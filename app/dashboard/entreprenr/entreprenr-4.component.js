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
var Entre4Component = (function () {
    function Entre4Component() {
        this.options = {
            chart: { type: 'bar' },
            title: { text: 'Employment at New/Young (<5 Yrs) Firms' },
            subtitle: { text: "As Share of Total Employment (2013)" },
            colors: ['#4C4C4C', '#222222'],
            xAxis: {
                categories: ['Austin', 'Raleigh-Durham', 'Launch2035', 'US', 'Colorado Springs', 'Greenville, SC', 'Chattanooga'],
                title: { text: null }
            },
            yAxis: {
                title: { text: null },
                labels: {
                    formatter: function () {
                        return this.value + '%';
                    }
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true,
                        formatter: function () {
                            return this.y + '%';
                        }
                    }
                }
            },
            series: [{
                    name: null,
                    data: [12.6, 10.0, 9.3, 9.1, 8.5, 7.7, 7.1]
                }]
        };
    }
    Entre4Component.prototype.saveChart = function (chart) {
        this.chart = chart;
    };
    Entre4Component.prototype.onPointSelect = function (point) {
        alert(point.y + " is selected");
    };
    Entre4Component.prototype.onSeriesHide = function (series) {
        alert(series.name + " is selected");
    };
    Entre4Component = __decorate([
        core_1.Component({
            selector: 'entre-4',
            styles: ["\n      chart {\n        display: block;\n      }\n  "],
            template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
            directives: [angular2_highcharts_1.CHART_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Entre4Component);
    return Entre4Component;
}());
exports.Entre4Component = Entre4Component;
//# sourceMappingURL=entreprenr-4.component.js.map