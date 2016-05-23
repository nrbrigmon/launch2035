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
    var Entre4Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_highcharts_1_1) {
                angular2_highcharts_1 = angular2_highcharts_1_1;
            }],
        execute: function() {
            Entre4Component = (function () {
                function Entre4Component() {
                    this.options = {
                        chart: { type: 'bar' },
                        title: { text: 'Employment at New/Young (<5 Yrs) Firms' },
                        subtitle: { text: "As Share of Total Employment (2013)" },
                        colors: ['#4C4C4C', '#222222'],
                        xAxis: {
                            categories: ['Austin', 'Raleigh-Durham', 'Launch2035', 'US', 'Colorado Springs', 'Greenville, SC', 'Chattanooga'],
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
                                data: [12.6, 10.0, 9.3, 9.1, 8.5, 7.7, 7.1]
                            }]
                    };
                }
                Entre4Component.prototype.saveChart = function (chart) {
                    this.chart = chart;
                };
                Entre4Component.prototype.onPointSelect = function (point) {
                    alert(point.y + " is selected");
                };
                Entre4Component.prototype.onSeriesHide = function (series) {
                    alert(series.name + " is selected");
                };
                Entre4Component = __decorate([
                    core_1.Component({
                        selector: 'entre-4',
                        styles: ["\n      chart {\n        display: block;\n      }\n  "],
                        template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
                        directives: [angular2_highcharts_1.CHART_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Entre4Component);
                return Entre4Component;
            }());
            exports_1("Entre4Component", Entre4Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9lbnRyZXByZW5yL2VudHJlcHJlbnItNC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBR0k7b0JBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRzt3QkFDWCxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO3dCQUN2QixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsd0NBQXdDLEVBQUU7d0JBQzNELFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxxQ0FBcUMsRUFBRTt3QkFDM0QsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQzt3QkFDOUIsS0FBSyxFQUFFOzRCQUNILFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLGFBQWEsQ0FBQzs0QkFDakgsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTt5QkFDeEI7d0JBQ0QsS0FBSyxFQUFFOzRCQUNILEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7NEJBQ3JCLE1BQU0sRUFBRTtnQ0FDSixTQUFTLEVBQUU7b0NBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsR0FBRyxDQUFDO2dDQUM1QixDQUFDOzZCQUNKO3lCQUNKO3dCQUNELE1BQU0sRUFBRTs0QkFDSixPQUFPLEVBQUUsS0FBSzt5QkFDakI7d0JBQ0QsV0FBVyxFQUFFOzRCQUNULEdBQUcsRUFBRTtnQ0FDRCxVQUFVLEVBQUU7b0NBQ1IsT0FBTyxFQUFFLElBQUk7b0NBQ2IsU0FBUyxFQUFFO3dDQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFDLEdBQUcsQ0FBQztvQ0FDeEIsQ0FBQztpQ0FDSjs2QkFDSjt5QkFDSjt3QkFDRCxNQUFNLEVBQUUsQ0FBQztnQ0FDTCxJQUFJLEVBQUUsSUFBSTtnQ0FDVixJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7NkJBQzlDLENBQUM7cUJBQ0wsQ0FBQztnQkFDTixDQUFDO2dCQUNELG1DQUFTLEdBQVQsVUFBVSxLQUFLO29CQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixDQUFDO2dCQUNELHVDQUFhLEdBQWIsVUFBYyxLQUFLO29CQUNqQixLQUFLLENBQUksS0FBSyxDQUFDLENBQUMsaUJBQWMsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQUNELHNDQUFZLEdBQVosVUFBYSxNQUFNO29CQUNqQixLQUFLLENBQUksTUFBTSxDQUFDLElBQUksaUJBQWMsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO2dCQWpFTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBQyxTQUFTO3dCQUNoQixNQUFNLEVBQUUsQ0FBQyx1REFJVixDQUFDO3dCQUNGLFFBQVEsRUFBRSw2UEFNVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxzQ0FBZ0IsQ0FBQztxQkFDL0IsQ0FBQzs7bUNBQUE7Z0JBbURGLHNCQUFDO1lBQUQsQ0FqREEsQUFpREMsSUFBQTtZQWpERCw2Q0FpREMsQ0FBQSIsImZpbGUiOiJkYXNoYm9hcmQvZW50cmVwcmVuci9lbnRyZXByZW5yLTQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDSEFSVF9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi1oaWdoY2hhcnRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOidlbnRyZS00JyxcbiAgICBzdHlsZXM6IFtgXG4gICAgICBjaGFydCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICBgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGNoYXJ0IFtvcHRpb25zXT1cIm9wdGlvbnNcIiAobG9hZCk9XCJzYXZlQ2hhcnQoJGV2ZW50LmNvbnRleHQpXCI+XG4gICAgICAgICAgPHNlcmllcyAoaGlkZSk9XCJvblNlcmllc0hpZGUoJGV2ZW50LmNvbnRleHQpXCI+XG4gICAgICAgICAgICA8cG9pbnQgKHNlbGVjdCk9XCJvblBvaW50U2VsZWN0KCRldmVudC5jb250ZXh0KVwiPjwvcG9pbnQ+XG4gICAgICAgICAgPC9zZXJpZXM+XG4gICAgICAgIDwvY2hhcnQ+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtDSEFSVF9ESVJFQ1RJVkVTXVxufSlcblxuZXhwb3J0IGNsYXNzIEVudHJlNENvbXBvbmVudCB7XG4gICAgb3B0aW9uczogT2JqZWN0O1xuICAgIGNoYXJ0OiBPYmplY3Q7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNoYXJ0OiAgeyB0eXBlOiAnYmFyJyB9LFxuICAgICAgICAgICAgdGl0bGUgOiB7IHRleHQgOiAnRW1wbG95bWVudCBhdCBOZXcvWW91bmcgKDw1IFlycykgRmlybXMnIH0sXG4gICAgICAgICAgICBzdWJ0aXRsZSA6IHsgdGV4dCA6IFwiQXMgU2hhcmUgb2YgVG90YWwgRW1wbG95bWVudCAoMjAxMylcIiB9LFxuICAgICAgICAgICAgY29sb3JzOiBbJyM0QzRDNEMnLCAnIzIyMjIyMiddLFxuICAgICAgICAgICAgeEF4aXM6IHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbJ0F1c3RpbicsICdSYWxlaWdoLUR1cmhhbScsICdMYXVuY2gyMDM1JywgJ1VTJywgJ0NvbG9yYWRvIFNwcmluZ3MnLCAnR3JlZW52aWxsZSwgU0MnLCAnQ2hhdHRhbm9vZ2EnXSxcbiAgICAgICAgICAgICAgICB0aXRsZTogeyB0ZXh0OiBudWxsIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5QXhpczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiB7IHRleHQ6IG51bGwgfSxcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlKyclJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgYmFyOiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnkrJyUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlcmllczogW3tcbiAgICAgICAgICAgICAgICBuYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgIGRhdGE6IFsxMi42LCAxMC4wLCA5LjMsIDkuMSwgOC41LCA3LjcsIDcuMV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH07XG4gICAgfVxuICAgIHNhdmVDaGFydChjaGFydCkge1xuICAgICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xuICAgIH1cbiAgICBvblBvaW50U2VsZWN0KHBvaW50KSB7XG4gICAgICBhbGVydChgJHtwb2ludC55fSBpcyBzZWxlY3RlZGApO1xuICAgIH1cbiAgICBvblNlcmllc0hpZGUoc2VyaWVzKSB7XG4gICAgICBhbGVydChgJHtzZXJpZXMubmFtZX0gaXMgc2VsZWN0ZWRgKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
