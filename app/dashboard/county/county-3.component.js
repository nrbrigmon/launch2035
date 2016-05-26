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
var County3Component = (function () {
    function County3Component() {
        this.options = {
            chart: { type: 'bar' },
            title: { text: 'Median Hourly Wage' },
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
                column: {
                    dataLabels: {
                        enabled: true,
                        format: '${point.y:.2f}'
                    }
                }
            },
            legend: { enabled: false },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>${point.y:.2f}</b><br/>'
            },
            series: [{
                    name: 'Wage',
                    colorByPoint: true,
                    data: [{
                            name: 'Madison',
                            y: 23.68
                        }, {
                            name: 'Morgan',
                            y: 18.17
                        }, {
                            name: 'Limestone',
                            y: 19.12
                        }]
                }]
        };
    }
    County3Component.prototype.saveChart = function (chart) {
        this.chart = chart;
    };
    County3Component.prototype.onPointSelect = function (point) {
        alert(point.y + " is selected");
    };
    County3Component.prototype.onSeriesHide = function (series) {
        alert(series.name + " is selected");
    };
    County3Component = __decorate([
        core_1.Component({
            selector: 'county-3',
            styles: ["\n      chart {\n        display: block;\n      }\n  "],
            template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
            directives: [angular2_highcharts_1.CHART_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], County3Component);
    return County3Component;
}());
exports.County3Component = County3Component;
//# sourceMappingURL=county-3.component.js.map