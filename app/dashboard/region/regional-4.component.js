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
var Regional4Component = (function () {
    function Regional4Component() {
        this.options = {
            lang: {
                thousandsSep: ","
            },
            chart: { type: 'bar' },
            title: { text: 'GDP Per Capita' },
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
                    colors: ['#4C4C4C', '#4C4C4C', '#4C4C4C', '#222222', '#4C4C4C', '#4C4C4C', '#4C4C4C'],
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
                    name: 'GDP',
                    colorByPoint: true,
                    data: [{
                            name: 'Raleigh-Durham',
                            y: 64434
                        }, {
                            name: 'Austin',
                            y: 59313
                        }, {
                            name: 'US',
                            y: 54045
                        }, {
                            name: 'Launch2035',
                            y: 52143
                        }, {
                            name: 'Colorado Springs',
                            y: 42556
                        }, {
                            name: 'Greenville, SC',
                            y: 42318
                        }, {
                            name: 'Chattanooga',
                            y: 41625
                        }]
                }]
        };
    }
    Regional4Component.prototype.saveChart = function (chart) {
        this.chart = chart;
    };
    Regional4Component.prototype.onPointSelect = function (point) {
        alert(point.y + " is selected");
    };
    Regional4Component.prototype.onSeriesHide = function (series) {
        alert(series.name + " is selected");
    };
    Regional4Component = __decorate([
        core_1.Component({
            selector: 'regional-4',
            styles: ["\n      chart {\n        display: block;\n      }\n  "],
            template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
            directives: [angular2_highcharts_1.CHART_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Regional4Component);
    return Regional4Component;
}());
exports.Regional4Component = Regional4Component;
//# sourceMappingURL=regional-4.component.js.map