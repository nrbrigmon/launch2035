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
    var ChartComponent4;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_highcharts_1_1) {
                angular2_highcharts_1 = angular2_highcharts_1_1;
            }],
        execute: function() {
            ChartComponent4 = (function () {
                function ChartComponent4() {
                    this.options = {
                        title: { text: 'Goal 4' },
                        chart: {
                            type: 'column'
                        },
                        xAxis: {
                            type: 'datetime'
                        },
                        series: [{
                                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                                pointStart: Date.UTC(2010, 0, 1),
                                pointInterval: 3600 * 1000 // one hour
                            }, {
                                data: [39.9, 81.5, 116.4, 139.2, 154.0, 186.0, 145.6, 158.5, 226.4, 294.1, 195.6, 64.4],
                                pointStart: Date.UTC(2010, 0, 1),
                                pointInterval: 3600 * 1000 // one hour
                            }]
                    };
                }
                ChartComponent4.prototype.saveChart = function (chart) {
                    this.chart = chart;
                };
                ChartComponent4.prototype.onPointSelect = function (point) {
                    alert(point.y + " is selected");
                };
                ChartComponent4.prototype.onSeriesHide = function (series) {
                    alert(series.name + " is selected");
                };
                ChartComponent4 = __decorate([
                    core_1.Component({
                        selector: 'chart-component-4',
                        styles: ["\n      chart {\n        display: block;\n      }\n  "],
                        template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
                        directives: [angular2_highcharts_1.CHART_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChartComponent4);
                return ChartComponent4;
            }());
            exports_1("ChartComponent4", ChartComponent4);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9jaGFydC1jb21wb25lbnQtNC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBR0U7b0JBQ00sSUFBSSxDQUFDLE9BQU8sR0FBRzt3QkFDWCxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsUUFBUSxFQUFFO3dCQUMzQixLQUFLLEVBQUU7NEJBQ0gsSUFBSSxFQUFFLFFBQVE7eUJBQ2pCO3dCQUVELEtBQUssRUFBRTs0QkFDSCxJQUFJLEVBQUUsVUFBVTt5QkFDbkI7d0JBQ0QsTUFBTSxFQUFFLENBQUM7Z0NBQ0wsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7Z0NBQ3RGLFVBQVUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dDQUNoQyxhQUFhLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXOzZCQUN6QyxFQUFDO2dDQUNFLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDO2dDQUN2RixVQUFVLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQ0FDaEMsYUFBYSxFQUFFLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVzs2QkFDekMsQ0FBQztxQkFDTCxDQUFDO2dCQUNOLENBQUM7Z0JBQ0QsbUNBQVMsR0FBVCxVQUFVLEtBQUs7b0JBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLENBQUM7Z0JBQ0QsdUNBQWEsR0FBYixVQUFjLEtBQUs7b0JBQ2pCLEtBQUssQ0FBSSxLQUFLLENBQUMsQ0FBQyxpQkFBYyxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7Z0JBQ0Qsc0NBQVksR0FBWixVQUFhLE1BQU07b0JBQ2pCLEtBQUssQ0FBSSxNQUFNLENBQUMsSUFBSSxpQkFBYyxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBakRMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFDLG1CQUFtQjt3QkFDMUIsTUFBTSxFQUFFLENBQUMsdURBSVYsQ0FBQzt3QkFDRixRQUFRLEVBQUUsNlBBTVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsc0NBQWdCLENBQUM7cUJBQy9CLENBQUM7O21DQUFBO2dCQW1DRixzQkFBQztZQUFELENBakNBLEFBaUNDLElBQUE7WUFqQ0QsNkNBaUNDLENBQUEiLCJmaWxlIjoiZGFzaGJvYXJkL2NoYXJ0LWNvbXBvbmVudC00LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q0hBUlRfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjItaGlnaGNoYXJ0cyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjonY2hhcnQtY29tcG9uZW50LTQnLFxuICAgIHN0eWxlczogW2BcbiAgICAgIGNoYXJ0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gIGBdLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8Y2hhcnQgW29wdGlvbnNdPVwib3B0aW9uc1wiIChsb2FkKT1cInNhdmVDaGFydCgkZXZlbnQuY29udGV4dClcIj5cbiAgICAgICAgICA8c2VyaWVzIChoaWRlKT1cIm9uU2VyaWVzSGlkZSgkZXZlbnQuY29udGV4dClcIj5cbiAgICAgICAgICAgIDxwb2ludCAoc2VsZWN0KT1cIm9uUG9pbnRTZWxlY3QoJGV2ZW50LmNvbnRleHQpXCI+PC9wb2ludD5cbiAgICAgICAgICA8L3Nlcmllcz5cbiAgICAgICAgPC9jaGFydD5cbiAgYCxcbiAgZGlyZWN0aXZlczogW0NIQVJUX0RJUkVDVElWRVNdXG59KVxuXG5leHBvcnQgY2xhc3MgQ2hhcnRDb21wb25lbnQ0IHtcbiAgb3B0aW9uczogT2JqZWN0O1xuICBjaGFydDogT2JqZWN0O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgdGl0bGUgOiB7IHRleHQgOiAnR29hbCA0JyB9LFxuICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnY29sdW1uJ1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgeEF4aXM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZGF0ZXRpbWUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICAgIGRhdGE6IFsyOS45LCA3MS41LCAxMDYuNCwgMTI5LjIsIDE0NC4wLCAxNzYuMCwgMTM1LjYsIDE0OC41LCAyMTYuNCwgMTk0LjEsIDk1LjYsIDU0LjRdLFxuICAgICAgICAgICAgICAgIHBvaW50U3RhcnQ6IERhdGUuVVRDKDIwMTAsIDAsIDEpLFxuICAgICAgICAgICAgICAgIHBvaW50SW50ZXJ2YWw6IDM2MDAgKiAxMDAwIC8vIG9uZSBob3VyXG4gICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICBkYXRhOiBbMzkuOSwgODEuNSwgMTE2LjQsIDEzOS4yLCAxNTQuMCwgMTg2LjAsIDE0NS42LCAxNTguNSwgMjI2LjQsIDI5NC4xLCAxOTUuNiwgNjQuNF0sXG4gICAgICAgICAgICAgICAgcG9pbnRTdGFydDogRGF0ZS5VVEMoMjAxMCwgMCwgMSksXG4gICAgICAgICAgICAgICAgcG9pbnRJbnRlcnZhbDogMzYwMCAqIDEwMDAgLy8gb25lIGhvdXJcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH07XG4gICAgfVxuICAgIHNhdmVDaGFydChjaGFydCkge1xuICAgICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xuICAgIH1cbiAgICBvblBvaW50U2VsZWN0KHBvaW50KSB7XG4gICAgICBhbGVydChgJHtwb2ludC55fSBpcyBzZWxlY3RlZGApO1xuICAgIH1cbiAgICBvblNlcmllc0hpZGUoc2VyaWVzKSB7XG4gICAgICBhbGVydChgJHtzZXJpZXMubmFtZX0gaXMgc2VsZWN0ZWRgKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
