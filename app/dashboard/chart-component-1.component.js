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
var Regional1Component = (function () {
    function Regional1Component() {
        this.options = {
            title: { text: 'Indicator A' },
            subtitle: { text: "With Associate's Degree or Higher (2014)" },
            colors: ['#005C83', '#E84A36', '#A3D65C', '#4C4C4C', '#222222'],
            series: [{
                    name: 's1',
                    data: [2, 3, 5, 8, 13],
                    allowPointSelect: true
                }, {
                    name: 's2',
                    data: [-2, -3, -5, -8, -13],
                    allowPointSelect: true
                }]
        };
    }
    Regional1Component.prototype.saveChart = function (chart) {
        this.chart = chart;
    };
    Regional1Component.prototype.onPointSelect = function (point) {
        alert(point.y + " is selected");
    };
    Regional1Component.prototype.onSeriesHide = function (series) {
        alert(series.name + " is selected");
    };
    Regional1Component = __decorate([
        core_1.Component({
            selector: 'regional-1',
            styles: ["\n      chart {\n        display: block;\n      }\n  "],
            template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
            directives: [angular2_highcharts_1.CHART_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Regional1Component);
    return Regional1Component;
}());
exports.Regional1Component = Regional1Component;
//# sourceMappingURL=chart-component-1.component.js.map