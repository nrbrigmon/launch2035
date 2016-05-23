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
                        // chart:  { type: 'area' },
                        // title : { text : 'Goal 3' },
                        // colors: ['#005C83', '#E84A36', '#A3D65C', '#4C4C4C', '#222222'],
                        series: [{
                                mapData: 'S1',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC93b3JrZm9yY2UvY2hhcnQtY29tcG9uZW50LTYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQUdFO29CQUNNLElBQUksQ0FBQyxPQUFPLEdBQUc7d0JBQ1gsNEJBQTRCO3dCQUM1QiwrQkFBK0I7d0JBQy9CLG1FQUFtRTt3QkFDbkUsTUFBTSxFQUFFLENBQUM7Z0NBQ1AsT0FBTyxFQUFFLElBQUk7Z0NBQ2IsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO29DQUM5RCxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO29DQUM3RCxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7b0NBQzdELEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSztvQ0FDN0QsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO29DQUM3RCxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7b0NBQzdELEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDOzZCQUNqRSxFQUFFO2dDQUNDLElBQUksRUFBRSxJQUFJO2dDQUNWLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7b0NBQzdELENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7b0NBQy9ELElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7b0NBQzlELEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSztvQ0FDN0QsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO29DQUM3RCxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7b0NBQzdELEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQzs2QkFDdkQsQ0FBQztxQkFDUCxDQUFDO2dCQUNOLENBQUM7Z0JBQ0QsbUNBQVMsR0FBVCxVQUFVLEtBQUs7b0JBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLENBQUM7Z0JBQ0QsdUNBQWEsR0FBYixVQUFjLEtBQUs7b0JBQ2pCLEtBQUssQ0FBSSxLQUFLLENBQUMsQ0FBQyxpQkFBYyxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7Z0JBQ0Qsc0NBQVksR0FBWixVQUFhLE1BQU07b0JBQ2pCLEtBQUssQ0FBSSxNQUFNLENBQUMsSUFBSSxpQkFBYyxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBdERMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFDLG1CQUFtQjt3QkFDMUIsTUFBTSxFQUFFLENBQUMsdURBSVYsQ0FBQzt3QkFDRixRQUFRLEVBQUUsNlBBTVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsc0NBQWdCLENBQUM7cUJBQy9CLENBQUM7O21DQUFBO2dCQXdDRixzQkFBQztZQUFELENBdENBLEFBc0NDLElBQUE7WUF0Q0QsNkNBc0NDLENBQUEiLCJmaWxlIjoiZGFzaGJvYXJkL3dvcmtmb3JjZS9jaGFydC1jb21wb25lbnQtNi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NIQVJUX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyLWhpZ2hjaGFydHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6J2NoYXJ0LWNvbXBvbmVudC02JyxcbiAgICBzdHlsZXM6IFtgXG4gICAgICBjaGFydCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICBgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGNoYXJ0IFtvcHRpb25zXT1cIm9wdGlvbnNcIiAobG9hZCk9XCJzYXZlQ2hhcnQoJGV2ZW50LmNvbnRleHQpXCI+XG4gICAgICAgICAgPHNlcmllcyAoaGlkZSk9XCJvblNlcmllc0hpZGUoJGV2ZW50LmNvbnRleHQpXCI+XG4gICAgICAgICAgICA8cG9pbnQgKHNlbGVjdCk9XCJvblBvaW50U2VsZWN0KCRldmVudC5jb250ZXh0KVwiPjwvcG9pbnQ+XG4gICAgICAgICAgPC9zZXJpZXM+XG4gICAgICAgIDwvY2hhcnQ+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtDSEFSVF9ESVJFQ1RJVkVTXVxufSlcblxuZXhwb3J0IGNsYXNzIENoYXJ0Q29tcG9uZW50NiB7XG4gIG9wdGlvbnM6IE9iamVjdDtcbiAgY2hhcnQ6IE9iamVjdDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIC8vIGNoYXJ0OiAgeyB0eXBlOiAnYXJlYScgfSxcbiAgICAgICAgICAgIC8vIHRpdGxlIDogeyB0ZXh0IDogJ0dvYWwgMycgfSxcbiAgICAgICAgICAgIC8vIGNvbG9yczogWycjMDA1QzgzJywgJyNFODRBMzYnLCAnI0EzRDY1QycsICcjNEM0QzRDJywgJyMyMjIyMjInXSxcbiAgICAgICAgICAgIHNlcmllczogW3tcbiAgICAgICAgICAgICAgbWFwRGF0YTogJ1MxJyxcbiAgICAgICAgICAgICAgZGF0YTogW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDYsIDExLCAzMiwgMTEwLCAyMzUsIDM2OSwgNjQwLFxuICAgICAgICAgICAgICAgICAgMTAwNSwgMTQzNiwgMjA2MywgMzA1NywgNDYxOCwgNjQ0NCwgOTgyMiwgMTU0NjgsIDIwNDM0LCAyNDEyNixcbiAgICAgICAgICAgICAgICAgIDI3Mzg3LCAyOTQ1OSwgMzEwNTYsIDMxOTgyLCAzMjA0MCwgMzEyMzMsIDI5MjI0LCAyNzM0MiwgMjY2NjIsXG4gICAgICAgICAgICAgICAgICAyNjk1NiwgMjc5MTIsIDI4OTk5LCAyODk2NSwgMjc4MjYsIDI1NTc5LCAyNTcyMiwgMjQ4MjYsIDI0NjA1LFxuICAgICAgICAgICAgICAgICAgMjQzMDQsIDIzNDY0LCAyMzcwOCwgMjQwOTksIDI0MzU3LCAyNDIzNywgMjQ0MDEsIDI0MzQ0LCAyMzU4NixcbiAgICAgICAgICAgICAgICAgIDIyMzgwLCAyMTAwNCwgMTcyODcsIDE0NzQ3LCAxMzA3NiwgMTI1NTUsIDEyMTQ0LCAxMTAwOSwgMTA5NTAsXG4gICAgICAgICAgICAgICAgICAxMDg3MSwgMTA4MjQsIDEwNTc3LCAxMDUyNywgMTA0NzUsIDEwNDIxLCAxMDM1OCwgMTAyOTUsIDEwMTA0XVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiAnUzInLFxuICAgICAgICAgICAgICAgICAgZGF0YTogW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgNSwgMjUsIDUwLCAxMjAsIDE1MCwgMjAwLCA0MjYsIDY2MCwgODY5LCAxMDYwLCAxNjA1LCAyNDcxLCAzMzIyLFxuICAgICAgICAgICAgICAgICAgICAgIDQyMzgsIDUyMjEsIDYxMjksIDcwODksIDgzMzksIDkzOTksIDEwNTM4LCAxMTY0MywgMTMwOTIsIDE0NDc4LFxuICAgICAgICAgICAgICAgICAgICAgIDE1OTE1LCAxNzM4NSwgMTkwNTUsIDIxMjA1LCAyMzA0NCwgMjUzOTMsIDI3OTM1LCAzMDA2MiwgMzIwNDksXG4gICAgICAgICAgICAgICAgICAgICAgMzM5NTIsIDM1ODA0LCAzNzQzMSwgMzkxOTcsIDQ1MDAwLCA0MzAwMCwgNDEwMDAsIDM5MDAwLCAzNzAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAzNTAwMCwgMzMwMDAsIDMxMDAwLCAyOTAwMCwgMjcwMDAsIDI1MDAwLCAyNDAwMCwgMjMwMDAsIDIyMDAwLFxuICAgICAgICAgICAgICAgICAgICAgIDIxMDAwLCAyMDAwMCwgMTkwMDAsIDE4MDAwLCAxODAwMCwgMTcwMDAsIDE2MDAwXVxuICAgICAgICAgICAgICB9XVxuICAgICAgICB9O1xuICAgIH1cbiAgICBzYXZlQ2hhcnQoY2hhcnQpIHtcbiAgICAgIHRoaXMuY2hhcnQgPSBjaGFydDtcbiAgICB9XG4gICAgb25Qb2ludFNlbGVjdChwb2ludCkge1xuICAgICAgYWxlcnQoYCR7cG9pbnQueX0gaXMgc2VsZWN0ZWRgKTtcbiAgICB9XG4gICAgb25TZXJpZXNIaWRlKHNlcmllcykge1xuICAgICAgYWxlcnQoYCR7c2VyaWVzLm5hbWV9IGlzIHNlbGVjdGVkYCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
