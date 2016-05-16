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
    var ChartComponent8;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_highcharts_1_1) {
                angular2_highcharts_1 = angular2_highcharts_1_1;
            }],
        execute: function() {
            ChartComponent8 = (function () {
                function ChartComponent8() {
                    this.options = {
                        title: { text: 'New Total Value' },
                        subtitle: { text: 'from Construction Costs' },
                        colors: ['#005C83', '#E84A36', '#A3D65C', '#4C4C4C', '#222222'],
                        xAxis: {
                            categories: ['2016']
                        },
                        yAxis: {
                            min: 0,
                            title: { text: 'US$' }
                        },
                        chart: {
                            type: 'column'
                        },
                        series: [{
                                name: 'Scenario 1',
                                data: [3500000000]
                            }, {
                                name: 'Scenario 2',
                                data: [7500000000]
                            }, {
                                name: 'Scenario 3',
                                data: [5500000000]
                            }]
                    };
                }
                ChartComponent8.prototype.saveChart = function (chart) {
                    this.chart = chart;
                };
                ChartComponent8.prototype.onPointSelect = function (point) {
                    alert(point.y + " is selected");
                };
                ChartComponent8.prototype.onSeriesHide = function (series) {
                    alert(series.name + " is selected");
                };
                ChartComponent8 = __decorate([
                    core_1.Component({
                        selector: 'chart-component-8',
                        styles: ["\n      chart {\n        display: block;\n      }\n  "],
                        template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
                        directives: [angular2_highcharts_1.CHART_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChartComponent8);
                return ChartComponent8;
            }());
            exports_1("ChartComponent8", ChartComponent8);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9jaGFydC1jb21wb25lbnQtOC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBR0U7b0JBQ00sSUFBSSxDQUFDLE9BQU8sR0FBRzt3QkFDWCxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsaUJBQWlCLEVBQUU7d0JBQ3BDLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyx5QkFBeUIsRUFBRTt3QkFDL0MsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQzt3QkFDL0QsS0FBSyxFQUFFOzRCQUNILFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5QkFDdkI7d0JBQ0QsS0FBSyxFQUFFOzRCQUNILEdBQUcsRUFBRSxDQUFDOzRCQUNOLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7eUJBQ3pCO3dCQUNELEtBQUssRUFBRTs0QkFDSCxJQUFJLEVBQUUsUUFBUTt5QkFDakI7d0JBQ0QsTUFBTSxFQUFFLENBQUM7Z0NBQ0wsSUFBSSxFQUFFLFlBQVk7Z0NBQ2xCLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQzs2QkFDckIsRUFBQztnQ0FDRSxJQUFJLEVBQUUsWUFBWTtnQ0FDbEIsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDOzZCQUNyQixFQUFDO2dDQUNFLElBQUksRUFBRSxZQUFZO2dDQUNsQixJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUM7NkJBQ3JCLENBQUM7cUJBQ0wsQ0FBQztnQkFDTixDQUFDO2dCQUNELG1DQUFTLEdBQVQsVUFBVSxLQUFLO29CQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixDQUFDO2dCQUNELHVDQUFhLEdBQWIsVUFBYyxLQUFLO29CQUNqQixLQUFLLENBQUksS0FBSyxDQUFDLENBQUMsaUJBQWMsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQUNELHNDQUFZLEdBQVosVUFBYSxNQUFNO29CQUNqQixLQUFLLENBQUksTUFBTSxDQUFDLElBQUksaUJBQWMsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO2dCQXZETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBQyxtQkFBbUI7d0JBQzFCLE1BQU0sRUFBRSxDQUFDLHVEQUlWLENBQUM7d0JBQ0YsUUFBUSxFQUFFLDZQQU1UO3dCQUNELFVBQVUsRUFBRSxDQUFDLHNDQUFnQixDQUFDO3FCQUMvQixDQUFDOzttQ0FBQTtnQkF5Q0Ysc0JBQUM7WUFBRCxDQXZDQSxBQXVDQyxJQUFBO1lBdkNELDZDQXVDQyxDQUFBIiwiZmlsZSI6ImRhc2hib2FyZC9jaGFydC1jb21wb25lbnQtOC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NIQVJUX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyLWhpZ2hjaGFydHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6J2NoYXJ0LWNvbXBvbmVudC04JyxcbiAgICBzdHlsZXM6IFtgXG4gICAgICBjaGFydCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICBgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGNoYXJ0IFtvcHRpb25zXT1cIm9wdGlvbnNcIiAobG9hZCk9XCJzYXZlQ2hhcnQoJGV2ZW50LmNvbnRleHQpXCI+XG4gICAgICAgICAgPHNlcmllcyAoaGlkZSk9XCJvblNlcmllc0hpZGUoJGV2ZW50LmNvbnRleHQpXCI+XG4gICAgICAgICAgICA8cG9pbnQgKHNlbGVjdCk9XCJvblBvaW50U2VsZWN0KCRldmVudC5jb250ZXh0KVwiPjwvcG9pbnQ+XG4gICAgICAgICAgPC9zZXJpZXM+XG4gICAgICAgIDwvY2hhcnQ+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtDSEFSVF9ESVJFQ1RJVkVTXVxufSlcblxuZXhwb3J0IGNsYXNzIENoYXJ0Q29tcG9uZW50OCB7XG4gIG9wdGlvbnM6IE9iamVjdDtcbiAgY2hhcnQ6IE9iamVjdDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlIDogeyB0ZXh0IDogJ05ldyBUb3RhbCBWYWx1ZScgfSxcbiAgICAgICAgICAgIHN1YnRpdGxlIDogeyB0ZXh0IDogJ2Zyb20gQ29uc3RydWN0aW9uIENvc3RzJyB9LFxuICAgICAgICAgICAgY29sb3JzOiBbJyMwMDVDODMnLCAnI0U4NEEzNicsICcjQTNENjVDJywgJyM0QzRDNEMnLCAnIzIyMjIyMiddLFxuICAgICAgICAgICAgeEF4aXM6IHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbJzIwMTYnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHlBeGlzOiB7XG4gICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7IHRleHQ6ICdVUyQnIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdjb2x1bW4nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdTY2VuYXJpbyAxJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBbMzUwMDAwMDAwMF1cbiAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgIG5hbWU6ICdTY2VuYXJpbyAyJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBbNzUwMDAwMDAwMF1cbiAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgIG5hbWU6ICdTY2VuYXJpbyAzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBbNTUwMDAwMDAwMF1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH07XG4gICAgfVxuICAgIHNhdmVDaGFydChjaGFydCkge1xuICAgICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xuICAgIH1cbiAgICBvblBvaW50U2VsZWN0KHBvaW50KSB7XG4gICAgICBhbGVydChgJHtwb2ludC55fSBpcyBzZWxlY3RlZGApO1xuICAgIH1cbiAgICBvblNlcmllc0hpZGUoc2VyaWVzKSB7XG4gICAgICBhbGVydChgJHtzZXJpZXMubmFtZX0gaXMgc2VsZWN0ZWRgKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
