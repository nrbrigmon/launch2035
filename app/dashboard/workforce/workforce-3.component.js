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
    var Workforce3Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_highcharts_1_1) {
                angular2_highcharts_1 = angular2_highcharts_1_1;
            }],
        execute: function() {
            Workforce3Component = (function () {
                function Workforce3Component() {
                    this.options = {
                        chart: { type: 'bar' },
                        title: { text: 'Population Age (16-19) with No High School Diploma' },
                        subtitle: { text: "And Not Enrolled (2014)" },
                        colors: ['#E84A36', '#A3D65C', '#4C4C4C', '#222222'],
                        xAxis: {
                            categories: ['Greenville, SC', 'US', 'Chattanooga', 'Launch2035', 'Colorado Springs', 'Austin', 'Raleigh-Durham'],
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
                                data: [6, 4.6, 4.6, 4.6, 4.3, 4, 3.4]
                            }]
                    };
                }
                Workforce3Component.prototype.saveChart = function (chart) {
                    this.chart = chart;
                };
                Workforce3Component.prototype.onPointSelect = function (point) {
                    alert(point.y + " is selected");
                };
                Workforce3Component.prototype.onSeriesHide = function (series) {
                    alert(series.name + " is selected");
                };
                Workforce3Component = __decorate([
                    core_1.Component({
                        selector: 'workforce-3',
                        styles: ["\n      chart {\n        display: block;\n      }\n  "],
                        template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
                        directives: [angular2_highcharts_1.CHART_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Workforce3Component);
                return Workforce3Component;
            }());
            exports_1("Workforce3Component", Workforce3Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC93b3JrZm9yY2Uvd29ya2ZvcmNlLTMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQUdJO29CQUNJLElBQUksQ0FBQyxPQUFPLEdBQUc7d0JBQ1gsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTt3QkFDdkIsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLG9EQUFvRCxFQUFFO3dCQUN2RSxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcseUJBQXlCLEVBQUU7d0JBQy9DLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQzt3QkFDcEQsS0FBSyxFQUFFOzRCQUNILFVBQVUsRUFBRSxDQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBRTs0QkFDbEgsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTt5QkFDeEI7d0JBQ0QsS0FBSyxFQUFFOzRCQUNILEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7NEJBQ3JCLE1BQU0sRUFBRTtnQ0FDSixTQUFTLEVBQUU7b0NBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dDQUM5QixDQUFDOzZCQUNKO3lCQUNKO3dCQUNELE1BQU0sRUFBRTs0QkFDSixPQUFPLEVBQUUsS0FBSzt5QkFDakI7d0JBQ0QsV0FBVyxFQUFFOzRCQUNULEdBQUcsRUFBRTtnQ0FDRCxVQUFVLEVBQUU7b0NBQ1IsT0FBTyxFQUFFLElBQUk7b0NBQ2IsU0FBUyxFQUFFO3dDQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQ0FDMUIsQ0FBQztpQ0FDSjs2QkFDSjt5QkFDSjt3QkFDRCxNQUFNLEVBQUUsQ0FBQztnQ0FDTCxJQUFJLEVBQUUsSUFBSTtnQ0FDVixJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7NkJBQ3hDLENBQUM7cUJBQ0wsQ0FBQztnQkFDTixDQUFDO2dCQUNELHVDQUFTLEdBQVQsVUFBVSxLQUFLO29CQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixDQUFDO2dCQUNELDJDQUFhLEdBQWIsVUFBYyxLQUFLO29CQUNqQixLQUFLLENBQUksS0FBSyxDQUFDLENBQUMsaUJBQWMsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQUNELDBDQUFZLEdBQVosVUFBYSxNQUFNO29CQUNqQixLQUFLLENBQUksTUFBTSxDQUFDLElBQUksaUJBQWMsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO2dCQWpFTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBQyxhQUFhO3dCQUNwQixNQUFNLEVBQUUsQ0FBQyx1REFJVixDQUFDO3dCQUNGLFFBQVEsRUFBRSw2UEFNVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxzQ0FBZ0IsQ0FBQztxQkFDL0IsQ0FBQzs7dUNBQUE7Z0JBbURGLDBCQUFDO1lBQUQsQ0FqREEsQUFpREMsSUFBQTtZQWpERCxxREFpREMsQ0FBQSIsImZpbGUiOiJkYXNoYm9hcmQvd29ya2ZvcmNlL3dvcmtmb3JjZS0zLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q0hBUlRfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjItaGlnaGNoYXJ0cyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3Rvcjond29ya2ZvcmNlLTMnLFxuICAgIHN0eWxlczogW2BcbiAgICAgIGNoYXJ0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gIGBdLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8Y2hhcnQgW29wdGlvbnNdPVwib3B0aW9uc1wiIChsb2FkKT1cInNhdmVDaGFydCgkZXZlbnQuY29udGV4dClcIj5cbiAgICAgICAgICA8c2VyaWVzIChoaWRlKT1cIm9uU2VyaWVzSGlkZSgkZXZlbnQuY29udGV4dClcIj5cbiAgICAgICAgICAgIDxwb2ludCAoc2VsZWN0KT1cIm9uUG9pbnRTZWxlY3QoJGV2ZW50LmNvbnRleHQpXCI+PC9wb2ludD5cbiAgICAgICAgICA8L3Nlcmllcz5cbiAgICAgICAgPC9jaGFydD5cbiAgYCxcbiAgZGlyZWN0aXZlczogW0NIQVJUX0RJUkVDVElWRVNdXG59KVxuXG5leHBvcnQgY2xhc3MgV29ya2ZvcmNlM0NvbXBvbmVudCB7XG4gICAgb3B0aW9uczogT2JqZWN0O1xuICAgIGNoYXJ0OiBPYmplY3Q7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNoYXJ0OiAgeyB0eXBlOiAnYmFyJyB9LFxuICAgICAgICAgICAgdGl0bGUgOiB7IHRleHQgOiAnUG9wdWxhdGlvbiBBZ2UgKDE2LTE5KSB3aXRoIE5vIEhpZ2ggU2Nob29sIERpcGxvbWEnIH0sXG4gICAgICAgICAgICBzdWJ0aXRsZSA6IHsgdGV4dCA6IFwiQW5kIE5vdCBFbnJvbGxlZCAoMjAxNClcIiB9LFxuICAgICAgICAgICAgY29sb3JzOiBbJyNFODRBMzYnLCAnI0EzRDY1QycsICcjNEM0QzRDJywgJyMyMjIyMjInXSxcbiAgICAgICAgICAgIHhBeGlzOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydHcmVlbnZpbGxlLCBTQycsICdVUycsICdDaGF0dGFub29nYScsICdMYXVuY2gyMDM1JywgJ0NvbG9yYWRvIFNwcmluZ3MnLCAnQXVzdGluJywgJ1JhbGVpZ2gtRHVyaGFtJyBdLFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7IHRleHQ6IG51bGwgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHlBeGlzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHsgdGV4dDogbnVsbCB9LFxuICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgKyAnJSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbG90T3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGJhcjoge1xuICAgICAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy55ICsgJyUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlcmllczogW3tcbiAgICAgICAgICAgICAgICBuYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgIGRhdGE6IFs2LCA0LjYsIDQuNiwgNC42LCA0LjMsIDQsIDMuNF1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH07XG4gICAgfVxuICAgIHNhdmVDaGFydChjaGFydCkge1xuICAgICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xuICAgIH1cbiAgICBvblBvaW50U2VsZWN0KHBvaW50KSB7XG4gICAgICBhbGVydChgJHtwb2ludC55fSBpcyBzZWxlY3RlZGApO1xuICAgIH1cbiAgICBvblNlcmllc0hpZGUoc2VyaWVzKSB7XG4gICAgICBhbGVydChgJHtzZXJpZXMubmFtZX0gaXMgc2VsZWN0ZWRgKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
