System.register(['@angular/core', 'angular2-highcharts'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, angular2_highcharts_1;
    var ChartComponent1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_highcharts_1_1) {
                angular2_highcharts_1 = angular2_highcharts_1_1;
            }],
        execute: function() {
            ChartComponent1 = (function () {
                function ChartComponent1() {
                    this.options = {
                        title: { text: 'Indicator A' },
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
                ChartComponent1.prototype.saveChart = function (chart) {
                    this.chart = chart;
                };
                ChartComponent1.prototype.onPointSelect = function (point) {
                    alert(point.y + " is selected");
                };
                ChartComponent1.prototype.onSeriesHide = function (series) {
                    alert(series.name + " is selected");
                };
                ChartComponent1 = __decorate([
                    core_1.Component({
                        selector: 'chart-component-1',
                        styles: ["\n      chart {\n        display: block;\n      }\n  "],
                        template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
                        directives: [angular2_highcharts_1.CHART_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChartComponent1);
                return ChartComponent1;
            }());
            exports_1("ChartComponent1", ChartComponent1);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9jaGFydC1jb21wb25lbnQtMS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBR0U7b0JBQ00sSUFBSSxDQUFDLE9BQU8sR0FBRzt3QkFDWCxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsYUFBYSxFQUFFO3dCQUNoQyxNQUFNLEVBQUUsQ0FBQztnQ0FDTCxJQUFJLEVBQUUsSUFBSTtnQ0FDVixJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO2dDQUNsQixnQkFBZ0IsRUFBRSxJQUFJOzZCQUN6QixFQUFDO2dDQUNFLElBQUksRUFBRSxJQUFJO2dDQUNWLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDO2dDQUN2QixnQkFBZ0IsRUFBRSxJQUFJOzZCQUN6QixDQUFDO3FCQUNMLENBQUM7Z0JBQ04sQ0FBQztnQkFDRCxtQ0FBUyxHQUFULFVBQVUsS0FBSztvQkFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDckIsQ0FBQztnQkFDRCx1Q0FBYSxHQUFiLFVBQWMsS0FBSztvQkFDakIsS0FBSyxDQUFJLEtBQUssQ0FBQyxDQUFDLGlCQUFjLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztnQkFDRCxzQ0FBWSxHQUFaLFVBQWEsTUFBTTtvQkFDakIsS0FBSyxDQUFJLE1BQU0sQ0FBQyxJQUFJLGlCQUFjLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkExQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUMsbUJBQW1CO3dCQUMxQixNQUFNLEVBQUUsQ0FBQyx1REFJVixDQUFDO3dCQUNGLFFBQVEsRUFBRSw2UEFNVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxzQ0FBZ0IsQ0FBQztxQkFDL0IsQ0FBQzs7bUNBQUE7Z0JBNEJGLHNCQUFDO1lBQUQsQ0ExQkEsQUEwQkMsSUFBQTtZQTFCRCw2Q0EwQkMsQ0FBQSIsImZpbGUiOiJkYXNoYm9hcmQvY2hhcnQtY29tcG9uZW50LTEuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDSEFSVF9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi1oaWdoY2hhcnRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOidjaGFydC1jb21wb25lbnQtMScsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgY2hhcnQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgYF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxjaGFydCBbb3B0aW9uc109XCJvcHRpb25zXCIgKGxvYWQpPVwic2F2ZUNoYXJ0KCRldmVudC5jb250ZXh0KVwiPlxuICAgICAgICAgIDxzZXJpZXMgKGhpZGUpPVwib25TZXJpZXNIaWRlKCRldmVudC5jb250ZXh0KVwiPlxuICAgICAgICAgICAgPHBvaW50IChzZWxlY3QpPVwib25Qb2ludFNlbGVjdCgkZXZlbnQuY29udGV4dClcIj48L3BvaW50PlxuICAgICAgICAgIDwvc2VyaWVzPlxuICAgICAgICA8L2NoYXJ0PlxuICBgLFxuICBkaXJlY3RpdmVzOiBbQ0hBUlRfRElSRUNUSVZFU11cbn0pXG5cbmV4cG9ydCBjbGFzcyBDaGFydENvbXBvbmVudDEge1xuICBvcHRpb25zOiBPYmplY3Q7XG4gIGNoYXJ0OiBPYmplY3Q7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZSA6IHsgdGV4dCA6ICdJbmRpY2F0b3IgQScgfSxcbiAgICAgICAgICAgIHNlcmllczogW3tcbiAgICAgICAgICAgICAgICBuYW1lOiAnczEnLFxuICAgICAgICAgICAgICAgIGRhdGE6IFsyLDMsNSw4LDEzXSxcbiAgICAgICAgICAgICAgICBhbGxvd1BvaW50U2VsZWN0OiB0cnVlXG4gICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnczInLFxuICAgICAgICAgICAgICAgIGRhdGE6IFstMiwtMywtNSwtOCwtMTNdLFxuICAgICAgICAgICAgICAgIGFsbG93UG9pbnRTZWxlY3Q6IHRydWVcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH07XG4gICAgfVxuICAgIHNhdmVDaGFydChjaGFydCkge1xuICAgICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xuICAgIH1cbiAgICBvblBvaW50U2VsZWN0KHBvaW50KSB7XG4gICAgICBhbGVydChgJHtwb2ludC55fSBpcyBzZWxlY3RlZGApO1xuICAgIH1cbiAgICBvblNlcmllc0hpZGUoc2VyaWVzKSB7XG4gICAgICBhbGVydChgJHtzZXJpZXMubmFtZX0gaXMgc2VsZWN0ZWRgKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
