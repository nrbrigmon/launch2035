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
    var Entre2Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_highcharts_1_1) {
                angular2_highcharts_1 = angular2_highcharts_1_1;
            }],
        execute: function() {
            Entre2Component = (function () {
                function Entre2Component() {
                    this.options = {
                        chart: { type: 'bar' },
                        title: { text: 'Patents' },
                        subtitle: { text: "Per 10,000 Employees (2013)" },
                        colors: ['#A3D65C', '#4C4C4C', '#222222'],
                        xAxis: {
                            categories: ['Austin', 'Raleigh-Durham', 'Greenville, SC', 'US', 'Launch2035', 'Colorado Springs', 'Chattanooga'],
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
                                data: [28.7, 21.8, 9.9, 8.9, 8.9, 8.3, 7.0, 1.9]
                            }]
                    };
                }
                Entre2Component.prototype.saveChart = function (chart) {
                    this.chart = chart;
                };
                Entre2Component.prototype.onPointSelect = function (point) {
                    alert(point.y + " is selected");
                };
                Entre2Component.prototype.onSeriesHide = function (series) {
                    alert(series.name + " is selected");
                };
                Entre2Component = __decorate([
                    core_1.Component({
                        selector: 'entre-2',
                        styles: ["\n      chart {\n        display: block;\n      }\n  "],
                        template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
                        directives: [angular2_highcharts_1.CHART_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Entre2Component);
                return Entre2Component;
            }());
            exports_1("Entre2Component", Entre2Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9lbnRyZXByZW5yL2VudHJlcHJlbnItMi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBR0k7b0JBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRzt3QkFDWCxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO3dCQUN2QixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsU0FBUyxFQUFFO3dCQUM1QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsNkJBQTZCLEVBQUU7d0JBQ25ELE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO3dCQUN6QyxLQUFLLEVBQUU7NEJBQ0gsVUFBVSxFQUFFLENBQUMsUUFBUSxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxDQUFDOzRCQUNqSCxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO3lCQUN4Qjt3QkFDRCxLQUFLLEVBQUU7NEJBQ0gsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTt5QkFDeEI7d0JBQ0QsTUFBTSxFQUFFOzRCQUNKLE9BQU8sRUFBRSxLQUFLO3lCQUNqQjt3QkFDRCxXQUFXLEVBQUU7NEJBQ1QsR0FBRyxFQUFFO2dDQUNELFVBQVUsRUFBRTtvQ0FDUixPQUFPLEVBQUUsSUFBSTtpQ0FDaEI7NkJBQ0o7eUJBQ0o7d0JBQ0QsTUFBTSxFQUFFLENBQUM7Z0NBQ0wsSUFBSSxFQUFFLElBQUk7Z0NBQ1YsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQzs2QkFDbkQsQ0FBQztxQkFDTCxDQUFDO2dCQUNOLENBQUM7Z0JBQ0QsbUNBQVMsR0FBVCxVQUFVLEtBQUs7b0JBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLENBQUM7Z0JBQ0QsdUNBQWEsR0FBYixVQUFjLEtBQUs7b0JBQ2pCLEtBQUssQ0FBSSxLQUFLLENBQUMsQ0FBQyxpQkFBYyxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7Z0JBQ0Qsc0NBQVksR0FBWixVQUFhLE1BQU07b0JBQ2pCLEtBQUssQ0FBSSxNQUFNLENBQUMsSUFBSSxpQkFBYyxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBekRMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFDLFNBQVM7d0JBQ2hCLE1BQU0sRUFBRSxDQUFDLHVEQUlWLENBQUM7d0JBQ0YsUUFBUSxFQUFFLDZQQU1UO3dCQUNELFVBQVUsRUFBRSxDQUFDLHNDQUFnQixDQUFDO3FCQUMvQixDQUFDOzttQ0FBQTtnQkEyQ0Ysc0JBQUM7WUFBRCxDQXpDQSxBQXlDQyxJQUFBO1lBekNELDZDQXlDQyxDQUFBIiwiZmlsZSI6ImRhc2hib2FyZC9lbnRyZXByZW5yL2VudHJlcHJlbnItMi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NIQVJUX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyLWhpZ2hjaGFydHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6J2VudHJlLTInLFxuICAgIHN0eWxlczogW2BcbiAgICAgIGNoYXJ0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gIGBdLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8Y2hhcnQgW29wdGlvbnNdPVwib3B0aW9uc1wiIChsb2FkKT1cInNhdmVDaGFydCgkZXZlbnQuY29udGV4dClcIj5cbiAgICAgICAgICA8c2VyaWVzIChoaWRlKT1cIm9uU2VyaWVzSGlkZSgkZXZlbnQuY29udGV4dClcIj5cbiAgICAgICAgICAgIDxwb2ludCAoc2VsZWN0KT1cIm9uUG9pbnRTZWxlY3QoJGV2ZW50LmNvbnRleHQpXCI+PC9wb2ludD5cbiAgICAgICAgICA8L3Nlcmllcz5cbiAgICAgICAgPC9jaGFydD5cbiAgYCxcbiAgZGlyZWN0aXZlczogW0NIQVJUX0RJUkVDVElWRVNdXG59KVxuXG5leHBvcnQgY2xhc3MgRW50cmUyQ29tcG9uZW50IHtcbiAgICBvcHRpb25zOiBPYmplY3Q7XG4gICAgY2hhcnQ6IE9iamVjdDtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgY2hhcnQ6ICB7IHR5cGU6ICdiYXInIH0sXG4gICAgICAgICAgICB0aXRsZSA6IHsgdGV4dCA6ICdQYXRlbnRzJyB9LFxuICAgICAgICAgICAgc3VidGl0bGUgOiB7IHRleHQgOiBcIlBlciAxMCwwMDAgRW1wbG95ZWVzICgyMDEzKVwiIH0sXG4gICAgICAgICAgICBjb2xvcnM6IFsnI0EzRDY1QycsICcjNEM0QzRDJywgJyMyMjIyMjInXSxcbiAgICAgICAgICAgIHhBeGlzOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydBdXN0aW4nLCAnUmFsZWlnaC1EdXJoYW0nLCAnR3JlZW52aWxsZSwgU0MnLCAnVVMnLCAnTGF1bmNoMjAzNScsICdDb2xvcmFkbyBTcHJpbmdzJywgJ0NoYXR0YW5vb2dhJ10sXG4gICAgICAgICAgICAgICAgdGl0bGU6IHsgdGV4dDogbnVsbCB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeUF4aXM6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogeyB0ZXh0OiBudWxsIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbG90T3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGJhcjoge1xuICAgICAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICAgIG5hbWU6IG51bGwsXG4gICAgICAgICAgICAgICAgZGF0YTogWzI4LjcsIDIxLjgsIDkuOSwgOC45LCA4LjksIDguMywgNy4wLCAxLjldXG4gICAgICAgICAgICB9XVxuICAgICAgICB9O1xuICAgIH1cbiAgICBzYXZlQ2hhcnQoY2hhcnQpIHtcbiAgICAgIHRoaXMuY2hhcnQgPSBjaGFydDtcbiAgICB9XG4gICAgb25Qb2ludFNlbGVjdChwb2ludCkge1xuICAgICAgYWxlcnQoYCR7cG9pbnQueX0gaXMgc2VsZWN0ZWRgKTtcbiAgICB9XG4gICAgb25TZXJpZXNIaWRlKHNlcmllcykge1xuICAgICAgYWxlcnQoYCR7c2VyaWVzLm5hbWV9IGlzIHNlbGVjdGVkYCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
