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
    var Entre1Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_highcharts_1_1) {
                angular2_highcharts_1 = angular2_highcharts_1_1;
            }],
        execute: function() {
            Entre1Component = (function () {
                function Entre1Component() {
                    this.options = {
                        chart: { type: 'bar' },
                        title: { text: 'Venture Capital Investment' },
                        subtitle: { text: "Per $10,000 GDP (2015)" },
                        colors: ['#005C83', '#E84A36', '#A3D65C', '#4C4C4C', '#222222'],
                        xAxis: {
                            categories: ['Austin', 'US', 'Raleigh-Durham', 'Chattanooga', 'Launch2035', 'Greenville, SC', 'Colorado Springs'],
                            title: { text: null }
                        },
                        yAxis: {
                            title: { text: null },
                            labels: {
                                formatter: function () {
                                    return '$' + this.value;
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
                                        return '$' + this.y;
                                    }
                                }
                            }
                        },
                        series: [{
                                name: null,
                                data: [64.2, 34.64, 32.86, 9.24, 8.76, 8.22, 2.34]
                            }]
                    };
                }
                Entre1Component.prototype.saveChart = function (chart) {
                    this.chart = chart;
                };
                Entre1Component.prototype.onPointSelect = function (point) {
                    alert(point.y + " is selected");
                };
                Entre1Component.prototype.onSeriesHide = function (series) {
                    alert(series.name + " is selected");
                };
                Entre1Component = __decorate([
                    core_1.Component({
                        selector: 'entre-1',
                        styles: ["\n      chart {\n        display: block;\n      }\n  "],
                        template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
                        directives: [angular2_highcharts_1.CHART_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Entre1Component);
                return Entre1Component;
            }());
            exports_1("Entre1Component", Entre1Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9lbnRyZXByZW5yL2VudHJlcHJlbnItMS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBR0k7b0JBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRzt3QkFDWCxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO3dCQUN2QixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsNEJBQTRCLEVBQUU7d0JBQy9DLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyx3QkFBd0IsRUFBRTt3QkFDOUMsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQzt3QkFDL0QsS0FBSyxFQUFFOzRCQUNILFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsQ0FBQzs0QkFDakgsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTt5QkFDeEI7d0JBQ0QsS0FBSyxFQUFFOzRCQUNILEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7NEJBQ3JCLE1BQU0sRUFBRTtnQ0FDSixTQUFTLEVBQUU7b0NBQ0wsTUFBTSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dDQUM1QixDQUFDOzZCQUNKO3lCQUNKO3dCQUNELE1BQU0sRUFBRTs0QkFDSixPQUFPLEVBQUUsS0FBSzt5QkFDakI7d0JBQ0QsV0FBVyxFQUFFOzRCQUNULEdBQUcsRUFBRTtnQ0FDRCxVQUFVLEVBQUU7b0NBQ1IsT0FBTyxFQUFFLElBQUk7b0NBQ2IsU0FBUyxFQUFFO3dDQUNMLE1BQU0sQ0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQ0FDeEIsQ0FBQztpQ0FDSjs2QkFDSjt5QkFDSjt3QkFDRCxNQUFNLEVBQUUsQ0FBQztnQ0FDTCxJQUFJLEVBQUUsSUFBSTtnQ0FDVixJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7NkJBQ3JELENBQUM7cUJBQ0wsQ0FBQztnQkFDTixDQUFDO2dCQUNELG1DQUFTLEdBQVQsVUFBVSxLQUFLO29CQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixDQUFDO2dCQUNELHVDQUFhLEdBQWIsVUFBYyxLQUFLO29CQUNqQixLQUFLLENBQUksS0FBSyxDQUFDLENBQUMsaUJBQWMsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQUNELHNDQUFZLEdBQVosVUFBYSxNQUFNO29CQUNqQixLQUFLLENBQUksTUFBTSxDQUFDLElBQUksaUJBQWMsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO2dCQWpFTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBQyxTQUFTO3dCQUNoQixNQUFNLEVBQUUsQ0FBQyx1REFJVixDQUFDO3dCQUNGLFFBQVEsRUFBRSw2UEFNVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxzQ0FBZ0IsQ0FBQztxQkFDL0IsQ0FBQzs7bUNBQUE7Z0JBbURGLHNCQUFDO1lBQUQsQ0FqREEsQUFpREMsSUFBQTtZQWpERCw2Q0FpREMsQ0FBQSIsImZpbGUiOiJkYXNoYm9hcmQvZW50cmVwcmVuci9lbnRyZXByZW5yLTEuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDSEFSVF9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi1oaWdoY2hhcnRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOidlbnRyZS0xJyxcbiAgICBzdHlsZXM6IFtgXG4gICAgICBjaGFydCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICBgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGNoYXJ0IFtvcHRpb25zXT1cIm9wdGlvbnNcIiAobG9hZCk9XCJzYXZlQ2hhcnQoJGV2ZW50LmNvbnRleHQpXCI+XG4gICAgICAgICAgPHNlcmllcyAoaGlkZSk9XCJvblNlcmllc0hpZGUoJGV2ZW50LmNvbnRleHQpXCI+XG4gICAgICAgICAgICA8cG9pbnQgKHNlbGVjdCk9XCJvblBvaW50U2VsZWN0KCRldmVudC5jb250ZXh0KVwiPjwvcG9pbnQ+XG4gICAgICAgICAgPC9zZXJpZXM+XG4gICAgICAgIDwvY2hhcnQ+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtDSEFSVF9ESVJFQ1RJVkVTXVxufSlcblxuZXhwb3J0IGNsYXNzIEVudHJlMUNvbXBvbmVudCB7XG4gICAgb3B0aW9uczogT2JqZWN0O1xuICAgIGNoYXJ0OiBPYmplY3Q7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNoYXJ0OiAgeyB0eXBlOiAnYmFyJyB9LFxuICAgICAgICAgICAgdGl0bGUgOiB7IHRleHQgOiAnVmVudHVyZSBDYXBpdGFsIEludmVzdG1lbnQnIH0sXG4gICAgICAgICAgICBzdWJ0aXRsZSA6IHsgdGV4dCA6IFwiUGVyICQxMCwwMDAgR0RQICgyMDE1KVwiIH0sXG4gICAgICAgICAgICBjb2xvcnM6IFsnIzAwNUM4MycsICcjRTg0QTM2JywgJyNBM0Q2NUMnLCAnIzRDNEM0QycsICcjMjIyMjIyJ10sXG4gICAgICAgICAgICB4QXhpczoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsnQXVzdGluJywgJ1VTJywgJ1JhbGVpZ2gtRHVyaGFtJywgJ0NoYXR0YW5vb2dhJywgJ0xhdW5jaDIwMzUnLCAnR3JlZW52aWxsZSwgU0MnLCAnQ29sb3JhZG8gU3ByaW5ncyddLFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7IHRleHQ6IG51bGwgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHlBeGlzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHsgdGV4dDogbnVsbCB9LFxuICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICckJyt0aGlzLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICckJyt0aGlzLnk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICAgIG5hbWU6IG51bGwsXG4gICAgICAgICAgICAgICAgZGF0YTogWzY0LjIsIDM0LjY0LCAzMi44NiwgOS4yNCwgOC43NiwgOC4yMiwgMi4zNF1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH07XG4gICAgfVxuICAgIHNhdmVDaGFydChjaGFydCkge1xuICAgICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xuICAgIH1cbiAgICBvblBvaW50U2VsZWN0KHBvaW50KSB7XG4gICAgICBhbGVydChgJHtwb2ludC55fSBpcyBzZWxlY3RlZGApO1xuICAgIH1cbiAgICBvblNlcmllc0hpZGUoc2VyaWVzKSB7XG4gICAgICBhbGVydChgJHtzZXJpZXMubmFtZX0gaXMgc2VsZWN0ZWRgKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
