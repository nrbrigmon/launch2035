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
    var Entre3Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_highcharts_1_1) {
                angular2_highcharts_1 = angular2_highcharts_1_1;
            }],
        execute: function() {
            Entre3Component = (function () {
                function Entre3Component() {
                    this.options = {
                        chart: { type: 'bar' },
                        title: { text: 'New/Young (<5 Yrs) Firms' },
                        subtitle: { text: "Per 1,000 Population (2013)" },
                        colors: ['#E84A36', '#222222'],
                        xAxis: {
                            categories: ['Austin', 'Raleigh-Durham', 'Colorado Springs', 'US', 'Launch2035', 'Chattanooga', 'Greenville, SC'],
                            title: { text: null }
                        },
                        yAxis: {
                            title: { text: null },
                        },
                        legend: {
                            enabled: false
                        },
                        plotOptions: {
                            bar: {
                                dataLabels: {
                                    enabled: true
                                }
                            }
                        },
                        series: [{
                                name: null,
                                data: [6.1, 5.1, 5.0, 4.5, 3.8, 3.5, 3.3]
                            }]
                    };
                }
                Entre3Component.prototype.saveChart = function (chart) {
                    this.chart = chart;
                };
                Entre3Component.prototype.onPointSelect = function (point) {
                    alert(point.y + " is selected");
                };
                Entre3Component.prototype.onSeriesHide = function (series) {
                    alert(series.name + " is selected");
                };
                Entre3Component = __decorate([
                    core_1.Component({
                        selector: 'entre-3',
                        styles: ["\n      chart {\n        display: block;\n      }\n  "],
                        template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
                        directives: [angular2_highcharts_1.CHART_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Entre3Component);
                return Entre3Component;
            }());
            exports_1("Entre3Component", Entre3Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9lbnRyZXByZW5yL2VudHJlcHJlbnItMy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBR0k7b0JBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRzt3QkFDWCxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO3dCQUN2QixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsMEJBQTBCLEVBQUU7d0JBQzdDLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyw2QkFBNkIsRUFBRTt3QkFDbkQsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQzt3QkFDOUIsS0FBSyxFQUFFOzRCQUNILFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQzs0QkFDakgsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTt5QkFDeEI7d0JBQ0QsS0FBSyxFQUFFOzRCQUNILEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7eUJBQ3hCO3dCQUNELE1BQU0sRUFBRTs0QkFDSixPQUFPLEVBQUUsS0FBSzt5QkFDakI7d0JBQ0QsV0FBVyxFQUFFOzRCQUNULEdBQUcsRUFBRTtnQ0FDRCxVQUFVLEVBQUU7b0NBQ1IsT0FBTyxFQUFFLElBQUk7aUNBQ2hCOzZCQUNKO3lCQUNKO3dCQUNELE1BQU0sRUFBRSxDQUFDO2dDQUNMLElBQUksRUFBRSxJQUFJO2dDQUNWLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQzs2QkFDNUMsQ0FBQztxQkFDTCxDQUFDO2dCQUNOLENBQUM7Z0JBQ0QsbUNBQVMsR0FBVCxVQUFVLEtBQUs7b0JBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLENBQUM7Z0JBQ0QsdUNBQWEsR0FBYixVQUFjLEtBQUs7b0JBQ2pCLEtBQUssQ0FBSSxLQUFLLENBQUMsQ0FBQyxpQkFBYyxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7Z0JBQ0Qsc0NBQVksR0FBWixVQUFhLE1BQU07b0JBQ2pCLEtBQUssQ0FBSSxNQUFNLENBQUMsSUFBSSxpQkFBYyxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBekRMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFDLFNBQVM7d0JBQ2hCLE1BQU0sRUFBRSxDQUFDLHVEQUlWLENBQUM7d0JBQ0YsUUFBUSxFQUFFLDZQQU1UO3dCQUNELFVBQVUsRUFBRSxDQUFDLHNDQUFnQixDQUFDO3FCQUMvQixDQUFDOzttQ0FBQTtnQkEyQ0Ysc0JBQUM7WUFBRCxDQXpDQSxBQXlDQyxJQUFBO1lBekNELDZDQXlDQyxDQUFBIiwiZmlsZSI6ImRhc2hib2FyZC9lbnRyZXByZW5yL2VudHJlcHJlbnItMy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NIQVJUX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyLWhpZ2hjaGFydHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6J2VudHJlLTMnLFxuICAgIHN0eWxlczogW2BcbiAgICAgIGNoYXJ0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gIGBdLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8Y2hhcnQgW29wdGlvbnNdPVwib3B0aW9uc1wiIChsb2FkKT1cInNhdmVDaGFydCgkZXZlbnQuY29udGV4dClcIj5cbiAgICAgICAgICA8c2VyaWVzIChoaWRlKT1cIm9uU2VyaWVzSGlkZSgkZXZlbnQuY29udGV4dClcIj5cbiAgICAgICAgICAgIDxwb2ludCAoc2VsZWN0KT1cIm9uUG9pbnRTZWxlY3QoJGV2ZW50LmNvbnRleHQpXCI+PC9wb2ludD5cbiAgICAgICAgICA8L3Nlcmllcz5cbiAgICAgICAgPC9jaGFydD5cbiAgYCxcbiAgZGlyZWN0aXZlczogW0NIQVJUX0RJUkVDVElWRVNdXG59KVxuXG5leHBvcnQgY2xhc3MgRW50cmUzQ29tcG9uZW50IHtcbiAgICBvcHRpb25zOiBPYmplY3Q7XG4gICAgY2hhcnQ6IE9iamVjdDtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgY2hhcnQ6ICB7IHR5cGU6ICdiYXInIH0sXG4gICAgICAgICAgICB0aXRsZSA6IHsgdGV4dCA6ICdOZXcvWW91bmcgKDw1IFlycykgRmlybXMnIH0sXG4gICAgICAgICAgICBzdWJ0aXRsZSA6IHsgdGV4dCA6IFwiUGVyIDEsMDAwIFBvcHVsYXRpb24gKDIwMTMpXCIgfSxcbiAgICAgICAgICAgIGNvbG9yczogWycjRTg0QTM2JywgJyMyMjIyMjInXSxcbiAgICAgICAgICAgIHhBeGlzOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydBdXN0aW4nLCAnUmFsZWlnaC1EdXJoYW0nLCAnQ29sb3JhZG8gU3ByaW5ncycsICdVUycsICdMYXVuY2gyMDM1JywgJ0NoYXR0YW5vb2dhJywgJ0dyZWVudmlsbGUsIFNDJ10sXG4gICAgICAgICAgICAgICAgdGl0bGU6IHsgdGV4dDogbnVsbCB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeUF4aXM6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogeyB0ZXh0OiBudWxsIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbG90T3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGJhcjoge1xuICAgICAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICAgIG5hbWU6IG51bGwsXG4gICAgICAgICAgICAgICAgZGF0YTogWzYuMSwgNS4xLCA1LjAsIDQuNSwgMy44LCAzLjUsIDMuM11cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH07XG4gICAgfVxuICAgIHNhdmVDaGFydChjaGFydCkge1xuICAgICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xuICAgIH1cbiAgICBvblBvaW50U2VsZWN0KHBvaW50KSB7XG4gICAgICBhbGVydChgJHtwb2ludC55fSBpcyBzZWxlY3RlZGApO1xuICAgIH1cbiAgICBvblNlcmllc0hpZGUoc2VyaWVzKSB7XG4gICAgICBhbGVydChgJHtzZXJpZXMubmFtZX0gaXMgc2VsZWN0ZWRgKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
