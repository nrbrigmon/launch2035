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
                        style: {
                            fontFamily: 'Montserrat'
                        },
                        title: { text: 'Goal 4' },
                        colors: ['#005C83', '#E84A36', '#A3D65C', '#4C4C4C', '#222222'],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9jaGFydC1jb21wb25lbnQtNC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBR0U7b0JBQ00sSUFBSSxDQUFDLE9BQU8sR0FBRzt3QkFDWCxLQUFLLEVBQUU7NEJBQ0gsVUFBVSxFQUFFLFlBQVk7eUJBQzNCO3dCQUNELEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxRQUFRLEVBQUU7d0JBQzNCLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7d0JBQy9ELEtBQUssRUFBRTs0QkFDSCxJQUFJLEVBQUUsUUFBUTt5QkFDakI7d0JBRUQsS0FBSyxFQUFFOzRCQUNILElBQUksRUFBRSxVQUFVO3lCQUNuQjt3QkFDRCxNQUFNLEVBQUUsQ0FBQztnQ0FDTCxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztnQ0FDdEYsVUFBVSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0NBQ2hDLGFBQWEsRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVc7NkJBQ3pDLEVBQUM7Z0NBQ0UsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUM7Z0NBQ3ZGLFVBQVUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dDQUNoQyxhQUFhLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXOzZCQUN6QyxDQUFDO3FCQUNMLENBQUM7Z0JBQ04sQ0FBQztnQkFDRCxtQ0FBUyxHQUFULFVBQVUsS0FBSztvQkFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDckIsQ0FBQztnQkFDRCx1Q0FBYSxHQUFiLFVBQWMsS0FBSztvQkFDakIsS0FBSyxDQUFJLEtBQUssQ0FBQyxDQUFDLGlCQUFjLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztnQkFDRCxzQ0FBWSxHQUFaLFVBQWEsTUFBTTtvQkFDakIsS0FBSyxDQUFJLE1BQU0sQ0FBQyxJQUFJLGlCQUFjLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkFyREw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUMsbUJBQW1CO3dCQUMxQixNQUFNLEVBQUUsQ0FBQyx1REFJVixDQUFDO3dCQUNGLFFBQVEsRUFBRSw2UEFNVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxzQ0FBZ0IsQ0FBQztxQkFDL0IsQ0FBQzs7bUNBQUE7Z0JBdUNGLHNCQUFDO1lBQUQsQ0FyQ0EsQUFxQ0MsSUFBQTtZQXJDRCw2Q0FxQ0MsQ0FBQSIsImZpbGUiOiJkYXNoYm9hcmQvY2hhcnQtY29tcG9uZW50LTQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDSEFSVF9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi1oaWdoY2hhcnRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOidjaGFydC1jb21wb25lbnQtNCcsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgY2hhcnQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgYF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxjaGFydCBbb3B0aW9uc109XCJvcHRpb25zXCIgKGxvYWQpPVwic2F2ZUNoYXJ0KCRldmVudC5jb250ZXh0KVwiPlxuICAgICAgICAgIDxzZXJpZXMgKGhpZGUpPVwib25TZXJpZXNIaWRlKCRldmVudC5jb250ZXh0KVwiPlxuICAgICAgICAgICAgPHBvaW50IChzZWxlY3QpPVwib25Qb2ludFNlbGVjdCgkZXZlbnQuY29udGV4dClcIj48L3BvaW50PlxuICAgICAgICAgIDwvc2VyaWVzPlxuICAgICAgICA8L2NoYXJ0PlxuICBgLFxuICBkaXJlY3RpdmVzOiBbQ0hBUlRfRElSRUNUSVZFU11cbn0pXG5cbmV4cG9ydCBjbGFzcyBDaGFydENvbXBvbmVudDQge1xuICBvcHRpb25zOiBPYmplY3Q7XG4gIGNoYXJ0OiBPYmplY3Q7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdNb250c2VycmF0J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpdGxlIDogeyB0ZXh0IDogJ0dvYWwgNCcgfSxcbiAgICAgICAgICAgIGNvbG9yczogWycjMDA1QzgzJywgJyNFODRBMzYnLCAnI0EzRDY1QycsICcjNEM0QzRDJywgJyMyMjIyMjInXSxcbiAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2NvbHVtbidcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHhBeGlzOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2RhdGV0aW1lJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlcmllczogW3tcbiAgICAgICAgICAgICAgICBkYXRhOiBbMjkuOSwgNzEuNSwgMTA2LjQsIDEyOS4yLCAxNDQuMCwgMTc2LjAsIDEzNS42LCAxNDguNSwgMjE2LjQsIDE5NC4xLCA5NS42LCA1NC40XSxcbiAgICAgICAgICAgICAgICBwb2ludFN0YXJ0OiBEYXRlLlVUQygyMDEwLCAwLCAxKSxcbiAgICAgICAgICAgICAgICBwb2ludEludGVydmFsOiAzNjAwICogMTAwMCAvLyBvbmUgaG91clxuICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgZGF0YTogWzM5LjksIDgxLjUsIDExNi40LCAxMzkuMiwgMTU0LjAsIDE4Ni4wLCAxNDUuNiwgMTU4LjUsIDIyNi40LCAyOTQuMSwgMTk1LjYsIDY0LjRdLFxuICAgICAgICAgICAgICAgIHBvaW50U3RhcnQ6IERhdGUuVVRDKDIwMTAsIDAsIDEpLFxuICAgICAgICAgICAgICAgIHBvaW50SW50ZXJ2YWw6IDM2MDAgKiAxMDAwIC8vIG9uZSBob3VyXG4gICAgICAgICAgICB9XVxuICAgICAgICB9O1xuICAgIH1cbiAgICBzYXZlQ2hhcnQoY2hhcnQpIHtcbiAgICAgIHRoaXMuY2hhcnQgPSBjaGFydDtcbiAgICB9XG4gICAgb25Qb2ludFNlbGVjdChwb2ludCkge1xuICAgICAgYWxlcnQoYCR7cG9pbnQueX0gaXMgc2VsZWN0ZWRgKTtcbiAgICB9XG4gICAgb25TZXJpZXNIaWRlKHNlcmllcykge1xuICAgICAgYWxlcnQoYCR7c2VyaWVzLm5hbWV9IGlzIHNlbGVjdGVkYCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
