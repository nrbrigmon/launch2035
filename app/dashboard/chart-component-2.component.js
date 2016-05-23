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
    var ChartComponent2;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_highcharts_1_1) {
                angular2_highcharts_1 = angular2_highcharts_1_1;
            }],
        execute: function() {
            ChartComponent2 = (function () {
                function ChartComponent2() {
                    this.options = {
                        style: {
                            fontFamily: 'Montserrat'
                        },
                        title: { text: 'indicator B' },
                        chart: { type: 'spline' },
                        colors: ['#005C83', '#E84A36', '#A3D65C', '#4C4C4C', '#222222'],
                        series: [{
                                name: 's1',
                                data: [
                                    [1, 12],
                                    [2, 5],
                                    [3, 18],
                                    [4, 13],
                                    [5, 7],
                                    [6, 4],
                                    [7, 9],
                                    [8, 10],
                                    [9, 15],
                                    [10, 22]
                                ],
                                allowPointSelect: true
                            }]
                    };
                }
                ChartComponent2.prototype.saveChart = function (chart) {
                    this.chart = chart;
                };
                ChartComponent2.prototype.onPointSelect = function (point) {
                    alert(point.y + " is selected");
                };
                ChartComponent2.prototype.onSeriesHide = function (series) {
                    alert(series.name + " is selected");
                };
                ChartComponent2 = __decorate([
                    core_1.Component({
                        selector: 'chart-component-2',
                        styles: ["\n      chart {\n        display: block;\n      }\n  "],
                        template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
                        directives: [angular2_highcharts_1.CHART_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChartComponent2);
                return ChartComponent2;
            }());
            exports_1("ChartComponent2", ChartComponent2);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9jaGFydC1jb21wb25lbnQtMi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBR0U7b0JBQ00sSUFBSSxDQUFDLE9BQU8sR0FBRzt3QkFDWCxLQUFLLEVBQUU7NEJBQ0gsVUFBVSxFQUFFLFlBQVk7eUJBQzNCO3dCQUNELEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxhQUFhLEVBQUU7d0JBQ2hDLEtBQUssRUFBRSxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUM7d0JBQ3ZCLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7d0JBQy9ELE1BQU0sRUFBRSxDQUFDO2dDQUNMLElBQUksRUFBRSxJQUFJO2dDQUNWLElBQUksRUFBRTtvQ0FDSSxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7b0NBQ04sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO29DQUNMLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztvQ0FDTixDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7b0NBQ04sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO29DQUNMLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztvQ0FDTCxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7b0NBQ0wsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO29DQUNOLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztvQ0FDTixDQUFDLEVBQUUsRUFBQyxFQUFFLENBQUM7aUNBQ1I7Z0NBQ1QsZ0JBQWdCLEVBQUUsSUFBSTs2QkFDekIsQ0FBQztxQkFDTCxDQUFDO2dCQUNOLENBQUM7Z0JBQ0QsbUNBQVMsR0FBVCxVQUFVLEtBQUs7b0JBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLENBQUM7Z0JBQ0QsdUNBQWEsR0FBYixVQUFjLEtBQUs7b0JBQ2pCLEtBQUssQ0FBSSxLQUFLLENBQUMsQ0FBQyxpQkFBYyxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7Z0JBQ0Qsc0NBQVksR0FBWixVQUFhLE1BQU07b0JBQ2pCLEtBQUssQ0FBSSxNQUFNLENBQUMsSUFBSSxpQkFBYyxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBdERMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFDLG1CQUFtQjt3QkFDMUIsTUFBTSxFQUFFLENBQUMsdURBSVYsQ0FBQzt3QkFDRixRQUFRLEVBQUUsNlBBTVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsc0NBQWdCLENBQUM7cUJBQy9CLENBQUM7O21DQUFBO2dCQXdDRixzQkFBQztZQUFELENBdENBLEFBc0NDLElBQUE7WUF0Q0QsNkNBc0NDLENBQUEiLCJmaWxlIjoiZGFzaGJvYXJkL2NoYXJ0LWNvbXBvbmVudC0yLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q0hBUlRfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjItaGlnaGNoYXJ0cyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjonY2hhcnQtY29tcG9uZW50LTInLFxuICAgIHN0eWxlczogW2BcbiAgICAgIGNoYXJ0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gIGBdLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8Y2hhcnQgW29wdGlvbnNdPVwib3B0aW9uc1wiIChsb2FkKT1cInNhdmVDaGFydCgkZXZlbnQuY29udGV4dClcIj5cbiAgICAgICAgICA8c2VyaWVzIChoaWRlKT1cIm9uU2VyaWVzSGlkZSgkZXZlbnQuY29udGV4dClcIj5cbiAgICAgICAgICAgIDxwb2ludCAoc2VsZWN0KT1cIm9uUG9pbnRTZWxlY3QoJGV2ZW50LmNvbnRleHQpXCI+PC9wb2ludD5cbiAgICAgICAgICA8L3Nlcmllcz5cbiAgICAgICAgPC9jaGFydD5cbiAgYCxcbiAgZGlyZWN0aXZlczogW0NIQVJUX0RJUkVDVElWRVNdXG59KVxuXG5leHBvcnQgY2xhc3MgQ2hhcnRDb21wb25lbnQyIHtcbiAgb3B0aW9uczogT2JqZWN0O1xuICBjaGFydDogT2JqZWN0O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnTW9udHNlcnJhdCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aXRsZSA6IHsgdGV4dCA6ICdpbmRpY2F0b3IgQicgfSxcbiAgICAgICAgICAgIGNoYXJ0OiB7dHlwZTogJ3NwbGluZSd9LFxuICAgICAgICAgICAgY29sb3JzOiBbJyMwMDVDODMnLCAnI0U4NEEzNicsICcjQTNENjVDJywgJyM0QzRDNEMnLCAnIzIyMjIyMiddLFxuICAgICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdzMScsXG4gICAgICAgICAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBbMSwxMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFsyLDVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbMywxOF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFs0LDEzXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgWzUsN10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFs2LDRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbNyw5XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgWzgsMTBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbOSwxNV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFsxMCwyMl1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgYWxsb3dQb2ludFNlbGVjdDogdHJ1ZVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgc2F2ZUNoYXJ0KGNoYXJ0KSB7XG4gICAgICB0aGlzLmNoYXJ0ID0gY2hhcnQ7XG4gICAgfVxuICAgIG9uUG9pbnRTZWxlY3QocG9pbnQpIHtcbiAgICAgIGFsZXJ0KGAke3BvaW50Lnl9IGlzIHNlbGVjdGVkYCk7XG4gICAgfVxuICAgIG9uU2VyaWVzSGlkZShzZXJpZXMpIHtcbiAgICAgIGFsZXJ0KGAke3Nlcmllcy5uYW1lfSBpcyBzZWxlY3RlZGApO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
