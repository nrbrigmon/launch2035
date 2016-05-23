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
    var Workforce2Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_highcharts_1_1) {
                angular2_highcharts_1 = angular2_highcharts_1_1;
            }],
        execute: function() {
            Workforce2Component = (function () {
                function Workforce2Component() {
                    this.options = {
                        chart: { type: 'bar' },
                        title: { text: 'Growth in Primary Working Age (25-64) Population' },
                        subtitle: { text: "With Associate's Degree or Higher (2014)" },
                        colors: ['#A3D65C', '#4C4C4C', '#222222'],
                        xAxis: {
                            categories: ['Austin', 'Raleigh-Durham', 'Chattanooga', 'Launch2035', 'US', 'Colorado Springs', 'Greenville, SC'],
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
                                data: [4.1, 2.8, 2.3, 1.9, 1.9, 1.5, 1.1]
                            }]
                    };
                }
                Workforce2Component.prototype.saveChart = function (chart) {
                    this.chart = chart;
                };
                Workforce2Component.prototype.onPointSelect = function (point) {
                    alert(point.y + " is selected");
                };
                Workforce2Component.prototype.onSeriesHide = function (series) {
                    alert(series.name + " is selected");
                };
                Workforce2Component = __decorate([
                    core_1.Component({
                        selector: 'workforce-2',
                        styles: ["\n      chart {\n        display: block;\n      }\n  "],
                        template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
                        directives: [angular2_highcharts_1.CHART_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Workforce2Component);
                return Workforce2Component;
            }());
            exports_1("Workforce2Component", Workforce2Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC93b3JrZm9yY2Uvd29ya2ZvcmNlLTIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQUdJO29CQUNJLElBQUksQ0FBQyxPQUFPLEdBQUc7d0JBQ1gsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTt3QkFDdkIsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLGtEQUFrRCxFQUFFO3dCQUNyRSxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsMENBQTBDLEVBQUU7d0JBQ2hFLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO3dCQUN6QyxLQUFLLEVBQUU7NEJBQ0gsVUFBVSxFQUFFLENBQUMsUUFBUSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixDQUFFOzRCQUNsSCxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO3lCQUN4Qjt3QkFDRCxLQUFLLEVBQUU7NEJBQ0gsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTs0QkFDckIsTUFBTSxFQUFFO2dDQUNKLFNBQVMsRUFBRTtvQ0FDTCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7Z0NBQzlCLENBQUM7NkJBQ0o7eUJBQ0o7d0JBQ0QsTUFBTSxFQUFFOzRCQUNKLE9BQU8sRUFBRSxLQUFLO3lCQUNqQjt3QkFDRCxXQUFXLEVBQUU7NEJBQ1QsR0FBRyxFQUFFO2dDQUNELFVBQVUsRUFBRTtvQ0FDUixPQUFPLEVBQUUsSUFBSTtvQ0FDYixTQUFTLEVBQUU7d0NBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO29DQUMxQixDQUFDO2lDQUNKOzZCQUNKO3lCQUNKO3dCQUNELE1BQU0sRUFBRSxDQUFDO2dDQUNMLElBQUksRUFBRSxJQUFJO2dDQUNWLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQzs2QkFDNUMsQ0FBQztxQkFDTCxDQUFDO2dCQUNOLENBQUM7Z0JBQ0QsdUNBQVMsR0FBVCxVQUFVLEtBQUs7b0JBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLENBQUM7Z0JBQ0QsMkNBQWEsR0FBYixVQUFjLEtBQUs7b0JBQ2pCLEtBQUssQ0FBSSxLQUFLLENBQUMsQ0FBQyxpQkFBYyxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7Z0JBQ0QsMENBQVksR0FBWixVQUFhLE1BQU07b0JBQ2pCLEtBQUssQ0FBSSxNQUFNLENBQUMsSUFBSSxpQkFBYyxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBakVMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFDLGFBQWE7d0JBQ3BCLE1BQU0sRUFBRSxDQUFDLHVEQUlWLENBQUM7d0JBQ0YsUUFBUSxFQUFFLDZQQU1UO3dCQUNELFVBQVUsRUFBRSxDQUFDLHNDQUFnQixDQUFDO3FCQUMvQixDQUFDOzt1Q0FBQTtnQkFtREYsMEJBQUM7WUFBRCxDQWpEQSxBQWlEQyxJQUFBO1lBakRELHFEQWlEQyxDQUFBIiwiZmlsZSI6ImRhc2hib2FyZC93b3JrZm9yY2Uvd29ya2ZvcmNlLTIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDSEFSVF9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi1oaWdoY2hhcnRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOid3b3JrZm9yY2UtMicsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgY2hhcnQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgYF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxjaGFydCBbb3B0aW9uc109XCJvcHRpb25zXCIgKGxvYWQpPVwic2F2ZUNoYXJ0KCRldmVudC5jb250ZXh0KVwiPlxuICAgICAgICAgIDxzZXJpZXMgKGhpZGUpPVwib25TZXJpZXNIaWRlKCRldmVudC5jb250ZXh0KVwiPlxuICAgICAgICAgICAgPHBvaW50IChzZWxlY3QpPVwib25Qb2ludFNlbGVjdCgkZXZlbnQuY29udGV4dClcIj48L3BvaW50PlxuICAgICAgICAgIDwvc2VyaWVzPlxuICAgICAgICA8L2NoYXJ0PlxuICBgLFxuICBkaXJlY3RpdmVzOiBbQ0hBUlRfRElSRUNUSVZFU11cbn0pXG5cbmV4cG9ydCBjbGFzcyBXb3JrZm9yY2UyQ29tcG9uZW50IHtcbiAgICBvcHRpb25zOiBPYmplY3Q7XG4gICAgY2hhcnQ6IE9iamVjdDtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgY2hhcnQ6ICB7IHR5cGU6ICdiYXInIH0sXG4gICAgICAgICAgICB0aXRsZSA6IHsgdGV4dCA6ICdHcm93dGggaW4gUHJpbWFyeSBXb3JraW5nIEFnZSAoMjUtNjQpIFBvcHVsYXRpb24nIH0sXG4gICAgICAgICAgICBzdWJ0aXRsZSA6IHsgdGV4dCA6IFwiV2l0aCBBc3NvY2lhdGUncyBEZWdyZWUgb3IgSGlnaGVyICgyMDE0KVwiIH0sXG4gICAgICAgICAgICBjb2xvcnM6IFsnI0EzRDY1QycsICcjNEM0QzRDJywgJyMyMjIyMjInXSxcbiAgICAgICAgICAgIHhBeGlzOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydBdXN0aW4nLCAnUmFsZWlnaC1EdXJoYW0nLCAnQ2hhdHRhbm9vZ2EnLCAnTGF1bmNoMjAzNScsICdVUycsICdDb2xvcmFkbyBTcHJpbmdzJywgJ0dyZWVudmlsbGUsIFNDJyBdLFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7IHRleHQ6IG51bGwgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHlBeGlzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHsgdGV4dDogbnVsbCB9LFxuICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgKyAnJSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbG90T3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGJhcjoge1xuICAgICAgICAgICAgICAgICAgICBkYXRhTGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy55ICsgJyUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlcmllczogW3tcbiAgICAgICAgICAgICAgICBuYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgIGRhdGE6IFs0LjEsIDIuOCwgMi4zLCAxLjksIDEuOSwgMS41LCAxLjFdXG4gICAgICAgICAgICB9XVxuICAgICAgICB9O1xuICAgIH1cbiAgICBzYXZlQ2hhcnQoY2hhcnQpIHtcbiAgICAgIHRoaXMuY2hhcnQgPSBjaGFydDtcbiAgICB9XG4gICAgb25Qb2ludFNlbGVjdChwb2ludCkge1xuICAgICAgYWxlcnQoYCR7cG9pbnQueX0gaXMgc2VsZWN0ZWRgKTtcbiAgICB9XG4gICAgb25TZXJpZXNIaWRlKHNlcmllcykge1xuICAgICAgYWxlcnQoYCR7c2VyaWVzLm5hbWV9IGlzIHNlbGVjdGVkYCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
