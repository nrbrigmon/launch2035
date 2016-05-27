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
var ChartComponent12 = (function () {
    function ChartComponent12() {
        this.options = {
            chart: { type: 'column' },
            title: { text: 'Open Space Consumed' },
            subtitle: { text: 'Acreage' },
            colors: ['#005C83', '#E84A36', '#A3D65C', '#4C4C4C', '#222222'],
            xAxis: {
                type: 'category',
                title: { text: null },
                gridLineWidth: 0
            },
            yAxis: {
                gridLineWidth: 0,
                title: { text: 'Acres' },
                labels: {
                    formatter: function () {
                        var num = (this.value).toString();
                        if (num >= 1000) {
                            return '' + num.slice(0, num.length - 3) + 'K';
                        }
                        else {
                            return '' + this.value;
                        }
                    }
                }
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:,.0f}'
                    }
                }
            },
            legend: { enabled: false },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:,.0f}</b><br/>'
            },
            series: [{
                    name: 'Acres',
                    colorByPoint: true,
                    data: [{
                            name: 'Scenario 1',
                            y: 9728
                        }, {
                            name: 'Scenario 2',
                            y: 9743
                        }, {
                            name: 'Scenario 3',
                            y: 6961
                        }]
                }]
        };
    }
    ChartComponent12.prototype.saveChart = function (chart) {
        this.chart = chart;
    };
    ChartComponent12.prototype.onPointSelect = function (point) {
        alert(point.y + " is selected");
    };
    ChartComponent12.prototype.onSeriesHide = function (series) {
        alert(series.name + " is selected");
    };
    ChartComponent12 = __decorate([
        core_1.Component({
            selector: 'chart-component-12',
            styles: ["\n      chart {\n        display: block;\n      }\n  "],
            template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
            directives: [angular2_highcharts_1.CHART_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], ChartComponent12);
    return ChartComponent12;
}());
exports.ChartComponent12 = ChartComponent12;
//# sourceMappingURL=chart-component-12.component.js.map