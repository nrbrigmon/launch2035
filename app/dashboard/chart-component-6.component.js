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
    var ChartComponent6;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_highcharts_1_1) {
                angular2_highcharts_1 = angular2_highcharts_1_1;
            }],
        execute: function() {
            ChartComponent6 = (function () {
                function ChartComponent6() {
                    this.options = {
                        chart: { type: 'area' },
                        title: { text: 'Goal 3' },
                        series: [{
                                name: 'S1',
                                data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
                                    1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
                                    27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
                                    26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                                    24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
                                    22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
                                    10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104]
                            }, {
                                name: 'S2',
                                data: [null, null, null, null, null, null, null, null, null, null,
                                    5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
                                    4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
                                    15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
                                    33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
                                    35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
                                    21000, 20000, 19000, 18000, 18000, 17000, 16000]
                            }]
                    };
                }
                ChartComponent6.prototype.saveChart = function (chart) {
                    this.chart = chart;
                };
                ChartComponent6.prototype.onPointSelect = function (point) {
                    alert(point.y + " is selected");
                };
                ChartComponent6.prototype.onSeriesHide = function (series) {
                    alert(series.name + " is selected");
                };
                ChartComponent6 = __decorate([
                    core_1.Component({
                        selector: 'chart-component-6',
                        styles: ["\n      chart {\n        display: block;\n      }\n  "],
                        template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
                        directives: [angular2_highcharts_1.CHART_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChartComponent6);
                return ChartComponent6;
            }());
            exports_1("ChartComponent6", ChartComponent6);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9jaGFydC1jb21wb25lbnQtNi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBR0U7b0JBQ00sSUFBSSxDQUFDLE9BQU8sR0FBRzt3QkFDWCxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO3dCQUN4QixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsUUFBUSxFQUFFO3dCQUMzQixNQUFNLEVBQUUsQ0FBQztnQ0FDUCxJQUFJLEVBQUUsSUFBSTtnQ0FDVixJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7b0NBQzlELElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7b0NBQzdELEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSztvQ0FDN0QsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO29DQUM3RCxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7b0NBQzdELEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSztvQ0FDN0QsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7NkJBQ2pFLEVBQUU7Z0NBQ0MsSUFBSSxFQUFFLElBQUk7Z0NBQ1YsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtvQ0FDN0QsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtvQ0FDL0QsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSztvQ0FDOUQsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO29DQUM3RCxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7b0NBQzdELEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSztvQ0FDN0QsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDOzZCQUN2RCxDQUFDO3FCQUNQLENBQUM7Z0JBQ04sQ0FBQztnQkFDRCxtQ0FBUyxHQUFULFVBQVUsS0FBSztvQkFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDckIsQ0FBQztnQkFDRCx1Q0FBYSxHQUFiLFVBQWMsS0FBSztvQkFDakIsS0FBSyxDQUFJLEtBQUssQ0FBQyxDQUFDLGlCQUFjLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztnQkFDRCxzQ0FBWSxHQUFaLFVBQWEsTUFBTTtvQkFDakIsS0FBSyxDQUFJLE1BQU0sQ0FBQyxJQUFJLGlCQUFjLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkFyREw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUMsbUJBQW1CO3dCQUMxQixNQUFNLEVBQUUsQ0FBQyx1REFJVixDQUFDO3dCQUNGLFFBQVEsRUFBRSw2UEFNVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxzQ0FBZ0IsQ0FBQztxQkFDL0IsQ0FBQzs7bUNBQUE7Z0JBdUNGLHNCQUFDO1lBQUQsQ0FyQ0EsQUFxQ0MsSUFBQTtZQXJDRCw2Q0FxQ0MsQ0FBQSIsImZpbGUiOiJkYXNoYm9hcmQvY2hhcnQtY29tcG9uZW50LTYuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDSEFSVF9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi1oaWdoY2hhcnRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOidjaGFydC1jb21wb25lbnQtNicsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgY2hhcnQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgYF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxjaGFydCBbb3B0aW9uc109XCJvcHRpb25zXCIgKGxvYWQpPVwic2F2ZUNoYXJ0KCRldmVudC5jb250ZXh0KVwiPlxuICAgICAgICAgIDxzZXJpZXMgKGhpZGUpPVwib25TZXJpZXNIaWRlKCRldmVudC5jb250ZXh0KVwiPlxuICAgICAgICAgICAgPHBvaW50IChzZWxlY3QpPVwib25Qb2ludFNlbGVjdCgkZXZlbnQuY29udGV4dClcIj48L3BvaW50PlxuICAgICAgICAgIDwvc2VyaWVzPlxuICAgICAgICA8L2NoYXJ0PlxuICBgLFxuICBkaXJlY3RpdmVzOiBbQ0hBUlRfRElSRUNUSVZFU11cbn0pXG5cbmV4cG9ydCBjbGFzcyBDaGFydENvbXBvbmVudDYge1xuICBvcHRpb25zOiBPYmplY3Q7XG4gIGNoYXJ0OiBPYmplY3Q7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjaGFydDogIHsgdHlwZTogJ2FyZWEnIH0sXG4gICAgICAgICAgICB0aXRsZSA6IHsgdGV4dCA6ICdHb2FsIDMnIH0sXG4gICAgICAgICAgICBzZXJpZXM6IFt7XG4gICAgICAgICAgICAgIG5hbWU6ICdTMScsXG4gICAgICAgICAgICAgIGRhdGE6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA2LCAxMSwgMzIsIDExMCwgMjM1LCAzNjksIDY0MCxcbiAgICAgICAgICAgICAgICAgIDEwMDUsIDE0MzYsIDIwNjMsIDMwNTcsIDQ2MTgsIDY0NDQsIDk4MjIsIDE1NDY4LCAyMDQzNCwgMjQxMjYsXG4gICAgICAgICAgICAgICAgICAyNzM4NywgMjk0NTksIDMxMDU2LCAzMTk4MiwgMzIwNDAsIDMxMjMzLCAyOTIyNCwgMjczNDIsIDI2NjYyLFxuICAgICAgICAgICAgICAgICAgMjY5NTYsIDI3OTEyLCAyODk5OSwgMjg5NjUsIDI3ODI2LCAyNTU3OSwgMjU3MjIsIDI0ODI2LCAyNDYwNSxcbiAgICAgICAgICAgICAgICAgIDI0MzA0LCAyMzQ2NCwgMjM3MDgsIDI0MDk5LCAyNDM1NywgMjQyMzcsIDI0NDAxLCAyNDM0NCwgMjM1ODYsXG4gICAgICAgICAgICAgICAgICAyMjM4MCwgMjEwMDQsIDE3Mjg3LCAxNDc0NywgMTMwNzYsIDEyNTU1LCAxMjE0NCwgMTEwMDksIDEwOTUwLFxuICAgICAgICAgICAgICAgICAgMTA4NzEsIDEwODI0LCAxMDU3NywgMTA1MjcsIDEwNDc1LCAxMDQyMSwgMTAzNTgsIDEwMjk1LCAxMDEwNF1cbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgbmFtZTogJ1MyJyxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgIDUsIDI1LCA1MCwgMTIwLCAxNTAsIDIwMCwgNDI2LCA2NjAsIDg2OSwgMTA2MCwgMTYwNSwgMjQ3MSwgMzMyMixcbiAgICAgICAgICAgICAgICAgICAgICA0MjM4LCA1MjIxLCA2MTI5LCA3MDg5LCA4MzM5LCA5Mzk5LCAxMDUzOCwgMTE2NDMsIDEzMDkyLCAxNDQ3OCxcbiAgICAgICAgICAgICAgICAgICAgICAxNTkxNSwgMTczODUsIDE5MDU1LCAyMTIwNSwgMjMwNDQsIDI1MzkzLCAyNzkzNSwgMzAwNjIsIDMyMDQ5LFxuICAgICAgICAgICAgICAgICAgICAgIDMzOTUyLCAzNTgwNCwgMzc0MzEsIDM5MTk3LCA0NTAwMCwgNDMwMDAsIDQxMDAwLCAzOTAwMCwgMzcwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgMzUwMDAsIDMzMDAwLCAzMTAwMCwgMjkwMDAsIDI3MDAwLCAyNTAwMCwgMjQwMDAsIDIzMDAwLCAyMjAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAyMTAwMCwgMjAwMDAsIDE5MDAwLCAxODAwMCwgMTgwMDAsIDE3MDAwLCAxNjAwMF1cbiAgICAgICAgICAgICAgfV1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgc2F2ZUNoYXJ0KGNoYXJ0KSB7XG4gICAgICB0aGlzLmNoYXJ0ID0gY2hhcnQ7XG4gICAgfVxuICAgIG9uUG9pbnRTZWxlY3QocG9pbnQpIHtcbiAgICAgIGFsZXJ0KGAke3BvaW50Lnl9IGlzIHNlbGVjdGVkYCk7XG4gICAgfVxuICAgIG9uU2VyaWVzSGlkZShzZXJpZXMpIHtcbiAgICAgIGFsZXJ0KGAke3Nlcmllcy5uYW1lfSBpcyBzZWxlY3RlZGApO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
