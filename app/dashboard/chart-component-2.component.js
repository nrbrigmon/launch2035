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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9jaGFydC1jb21wb25lbnQtMi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBR0U7b0JBQ00sSUFBSSxDQUFDLE9BQU8sR0FBRzt3QkFDWCxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsYUFBYSxFQUFFO3dCQUNoQyxLQUFLLEVBQUUsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDO3dCQUN2QixNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO3dCQUMvRCxNQUFNLEVBQUUsQ0FBQztnQ0FDTCxJQUFJLEVBQUUsSUFBSTtnQ0FDVixJQUFJLEVBQUU7b0NBQ0ksQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO29DQUNOLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztvQ0FDTCxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7b0NBQ04sQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO29DQUNOLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztvQ0FDTCxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7b0NBQ0wsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO29DQUNMLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztvQ0FDTixDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7b0NBQ04sQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDO2lDQUNSO2dDQUNULGdCQUFnQixFQUFFLElBQUk7NkJBQ3pCLENBQUM7cUJBQ0wsQ0FBQztnQkFDTixDQUFDO2dCQUNELG1DQUFTLEdBQVQsVUFBVSxLQUFLO29CQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixDQUFDO2dCQUNELHVDQUFhLEdBQWIsVUFBYyxLQUFLO29CQUNqQixLQUFLLENBQUksS0FBSyxDQUFDLENBQUMsaUJBQWMsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQUNELHNDQUFZLEdBQVosVUFBYSxNQUFNO29CQUNqQixLQUFLLENBQUksTUFBTSxDQUFDLElBQUksaUJBQWMsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO2dCQW5ETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBQyxtQkFBbUI7d0JBQzFCLE1BQU0sRUFBRSxDQUFDLHVEQUlWLENBQUM7d0JBQ0YsUUFBUSxFQUFFLDZQQU1UO3dCQUNELFVBQVUsRUFBRSxDQUFDLHNDQUFnQixDQUFDO3FCQUMvQixDQUFDOzttQ0FBQTtnQkFxQ0Ysc0JBQUM7WUFBRCxDQW5DQSxBQW1DQyxJQUFBO1lBbkNELDZDQW1DQyxDQUFBIiwiZmlsZSI6ImRhc2hib2FyZC9jaGFydC1jb21wb25lbnQtMi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NIQVJUX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyLWhpZ2hjaGFydHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6J2NoYXJ0LWNvbXBvbmVudC0yJyxcbiAgICBzdHlsZXM6IFtgXG4gICAgICBjaGFydCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICBgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGNoYXJ0IFtvcHRpb25zXT1cIm9wdGlvbnNcIiAobG9hZCk9XCJzYXZlQ2hhcnQoJGV2ZW50LmNvbnRleHQpXCI+XG4gICAgICAgICAgPHNlcmllcyAoaGlkZSk9XCJvblNlcmllc0hpZGUoJGV2ZW50LmNvbnRleHQpXCI+XG4gICAgICAgICAgICA8cG9pbnQgKHNlbGVjdCk9XCJvblBvaW50U2VsZWN0KCRldmVudC5jb250ZXh0KVwiPjwvcG9pbnQ+XG4gICAgICAgICAgPC9zZXJpZXM+XG4gICAgICAgIDwvY2hhcnQ+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtDSEFSVF9ESVJFQ1RJVkVTXVxufSlcblxuZXhwb3J0IGNsYXNzIENoYXJ0Q29tcG9uZW50MiB7XG4gIG9wdGlvbnM6IE9iamVjdDtcbiAgY2hhcnQ6IE9iamVjdDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlIDogeyB0ZXh0IDogJ2luZGljYXRvciBCJyB9LFxuICAgICAgICAgICAgY2hhcnQ6IHt0eXBlOiAnc3BsaW5lJ30sXG4gICAgICAgICAgICBjb2xvcnM6IFsnIzAwNUM4MycsICcjRTg0QTM2JywgJyNBM0Q2NUMnLCAnIzRDNEM0QycsICcjMjIyMjIyJ10sXG4gICAgICAgICAgICBzZXJpZXM6IFt7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3MxJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFsxLDEyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgWzIsNV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFszLDE4XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgWzQsMTNdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbNSw3XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgWzYsNF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFs3LDldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbOCwxMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFs5LDE1XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgWzEwLDIyXVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBhbGxvd1BvaW50U2VsZWN0OiB0cnVlXG4gICAgICAgICAgICB9XVxuICAgICAgICB9O1xuICAgIH1cbiAgICBzYXZlQ2hhcnQoY2hhcnQpIHtcbiAgICAgIHRoaXMuY2hhcnQgPSBjaGFydDtcbiAgICB9XG4gICAgb25Qb2ludFNlbGVjdChwb2ludCkge1xuICAgICAgYWxlcnQoYCR7cG9pbnQueX0gaXMgc2VsZWN0ZWRgKTtcbiAgICB9XG4gICAgb25TZXJpZXNIaWRlKHNlcmllcykge1xuICAgICAgYWxlcnQoYCR7c2VyaWVzLm5hbWV9IGlzIHNlbGVjdGVkYCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
