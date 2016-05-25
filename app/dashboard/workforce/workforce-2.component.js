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
var Workforce2Component = (function () {
    function Workforce2Component() {
        this.options = {
            chart: { type: 'bar' },
            title: { text: 'Growth in Primary Working Age (25-64) Population' },
            subtitle: { text: "With Associate's Degree or Higher (2014)" },
            colors: ['#A3D65C', '#4C4C4C', '#222222'],
            xAxis: {
                categories: ['Austin', 'Raleigh-Durham', 'Chattanooga', 'Launch2035', 'US', 'Colorado Springs', 'Greenville, SC'],
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
                    data: [4.1, 2.8, 2.3, 1.9, 1.9, 1.5, 1.1]
                }]
        };
    }
    Workforce2Component.prototype.saveChart = function (chart) {
        this.chart = chart;
    };
    Workforce2Component.prototype.onPointSelect = function (point) {
        alert(point.y + " is selected");
    };
    Workforce2Component.prototype.onSeriesHide = function (series) {
        alert(series.name + " is selected");
    };
    Workforce2Component = __decorate([
        core_1.Component({
            selector: 'workforce-2',
            styles: ["\n      chart {\n        display: block;\n      }\n  "],
            template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
            directives: [angular2_highcharts_1.CHART_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Workforce2Component);
    return Workforce2Component;
}());
exports.Workforce2Component = Workforce2Component;
//# sourceMappingURL=workforce-2.component.js.map