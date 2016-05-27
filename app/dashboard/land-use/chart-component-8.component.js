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
var ChartComponent8 = (function () {
    function ChartComponent8() {
        this.options = {
            chart: { type: 'column' },
            title: { text: 'New Total Value' },
            subtitle: { text: 'from Construction Costs' },
            colors: ['#005C83', '#E84A36', '#A3D65C', '#4C4C4C', '#222222'],
            xAxis: {
                type: 'category',
                title: { text: null },
                gridLineWidth: 0
            },
            yAxis: {
                title: { text: '' },
                gridLineWidth: 0,
                labels: {
                    formatter: function () {
                        var num = (this.value).toString();
                        if (num >= 1000000) {
                            return '$' + num.slice(0, num.length - 6) + 'M';
                        }
                        else if (num >= 1000) {
                            return '$' + num.slice(0, num.length - 3) + 'K';
                        }
                        else {
                            return '$' + this.value;
                        }
                    }
                }
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: true,
                        formatter: function () {
                            var num = (this.y).toString();
                            console.log(num);
                            if (num >= 1000000) {
                                return '$' + num.slice(0, num.length - 6) + 'M';
                            }
                            else if (num >= 1000) {
                                return '$' + num.slice(0, num.length - 3) + 'K';
                            }
                            else {
                                return '$' + this.y;
                            }
                        }
                    }
                }
            },
            legend: { enabled: false },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>${point.y:,.0f}</b><br/>'
            },
            series: [{
                    name: 'Value',
                    colorByPoint: true,
                    data: [{
                            name: 'Scenario 1',
                            y: 3370260468
                        }, {
                            name: 'Scenario 2',
                            y: 6115747316
                        }, {
                            name: 'Scenario 3',
                            y: 7956296631
                        }]
                }]
        };
    }
    ChartComponent8.prototype.saveChart = function (chart) {
        this.chart = chart;
    };
    ChartComponent8.prototype.onPointSelect = function (point) {
        alert(point.y + " is selected");
    };
    ChartComponent8.prototype.onSeriesHide = function (series) {
        alert(series.name + " is selected");
    };
    ChartComponent8 = __decorate([
        core_1.Component({
            selector: 'chart-component-8',
            styles: ["\n      chart {\n        display: block;\n      }\n  "],
            template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
            directives: [angular2_highcharts_1.CHART_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], ChartComponent8);
    return ChartComponent8;
}());
exports.ChartComponent8 = ChartComponent8;
//# sourceMappingURL=chart-component-8.component.js.map