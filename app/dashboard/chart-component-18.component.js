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
    var ChartComponent18;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_highcharts_1_1) {
                angular2_highcharts_1 = angular2_highcharts_1_1;
            }],
        execute: function() {
            ChartComponent18 = (function () {
                function ChartComponent18() {
                    this.options = {
                        title: { text: 'New Sidewalks' },
                        subtitle: { text: '' },
                        colors: ['#005C83', '#E84A36', '#A3D65C', '#4C4C4C', '#222222'],
                        xAxis: {
                            categories: ['Year 1']
                        },
                        yAxis: {
                            min: 0,
                            title: { text: 'Miles' }
                        },
                        chart: {
                            type: 'column'
                        },
                        series: [{
                                name: 'Scenario 1',
                                data: [30.3]
                            }, {
                                name: 'Scenario 2',
                                data: [32.1]
                            }, {
                                name: 'Scenario 3',
                                data: [31.4]
                            }]
                    };
                }
                ChartComponent18.prototype.saveChart = function (chart) {
                    this.chart = chart;
                };
                ChartComponent18.prototype.onPointSelect = function (point) {
                    alert(point.y + " is selected");
                };
                ChartComponent18.prototype.onSeriesHide = function (series) {
                    alert(series.name + " is selected");
                };
                ChartComponent18 = __decorate([
                    core_1.Component({
                        selector: 'chart-component-18',
                        styles: ["\n      chart {\n        display: block;\n      }\n  "],
                        template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
                        directives: [angular2_highcharts_1.CHART_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChartComponent18);
                return ChartComponent18;
            }());
            exports_1("ChartComponent18", ChartComponent18);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9jaGFydC1jb21wb25lbnQtMTguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQUdFO29CQUNNLElBQUksQ0FBQyxPQUFPLEdBQUc7d0JBQ1gsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLGVBQWUsRUFBRTt3QkFDbEMsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEVBQUUsRUFBRTt3QkFDeEIsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQzt3QkFDL0QsS0FBSyxFQUFFOzRCQUNILFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQzt5QkFDekI7d0JBQ0QsS0FBSyxFQUFFOzRCQUNILEdBQUcsRUFBRSxDQUFDOzRCQUNOLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7eUJBQzNCO3dCQUNELEtBQUssRUFBRTs0QkFDSCxJQUFJLEVBQUUsUUFBUTt5QkFDakI7d0JBQ0QsTUFBTSxFQUFFLENBQUM7Z0NBQ0wsSUFBSSxFQUFFLFlBQVk7Z0NBQ2xCLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQzs2QkFDZixFQUFDO2dDQUNFLElBQUksRUFBRSxZQUFZO2dDQUNsQixJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkJBQ2YsRUFBQztnQ0FDRSxJQUFJLEVBQUUsWUFBWTtnQ0FDbEIsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDOzZCQUNmLENBQUM7cUJBQ0wsQ0FBQztnQkFDTixDQUFDO2dCQUNELG9DQUFTLEdBQVQsVUFBVSxLQUFLO29CQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixDQUFDO2dCQUNELHdDQUFhLEdBQWIsVUFBYyxLQUFLO29CQUNqQixLQUFLLENBQUksS0FBSyxDQUFDLENBQUMsaUJBQWMsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQUNELHVDQUFZLEdBQVosVUFBYSxNQUFNO29CQUNqQixLQUFLLENBQUksTUFBTSxDQUFDLElBQUksaUJBQWMsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO2dCQXZETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBQyxvQkFBb0I7d0JBQzNCLE1BQU0sRUFBRSxDQUFDLHVEQUlWLENBQUM7d0JBQ0YsUUFBUSxFQUFFLDZQQU1UO3dCQUNELFVBQVUsRUFBRSxDQUFDLHNDQUFnQixDQUFDO3FCQUMvQixDQUFDOztvQ0FBQTtnQkF5Q0YsdUJBQUM7WUFBRCxDQXZDQSxBQXVDQyxJQUFBO1lBdkNELCtDQXVDQyxDQUFBIiwiZmlsZSI6ImRhc2hib2FyZC9jaGFydC1jb21wb25lbnQtMTguY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDSEFSVF9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi1oaWdoY2hhcnRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOidjaGFydC1jb21wb25lbnQtMTgnLFxuICAgIHN0eWxlczogW2BcbiAgICAgIGNoYXJ0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gIGBdLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8Y2hhcnQgW29wdGlvbnNdPVwib3B0aW9uc1wiIChsb2FkKT1cInNhdmVDaGFydCgkZXZlbnQuY29udGV4dClcIj5cbiAgICAgICAgICA8c2VyaWVzIChoaWRlKT1cIm9uU2VyaWVzSGlkZSgkZXZlbnQuY29udGV4dClcIj5cbiAgICAgICAgICAgIDxwb2ludCAoc2VsZWN0KT1cIm9uUG9pbnRTZWxlY3QoJGV2ZW50LmNvbnRleHQpXCI+PC9wb2ludD5cbiAgICAgICAgICA8L3Nlcmllcz5cbiAgICAgICAgPC9jaGFydD5cbiAgYCxcbiAgZGlyZWN0aXZlczogW0NIQVJUX0RJUkVDVElWRVNdXG59KVxuXG5leHBvcnQgY2xhc3MgQ2hhcnRDb21wb25lbnQxOCB7XG4gIG9wdGlvbnM6IE9iamVjdDtcbiAgY2hhcnQ6IE9iamVjdDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlIDogeyB0ZXh0IDogJ05ldyBTaWRld2Fsa3MnIH0sXG4gICAgICAgICAgICBzdWJ0aXRsZSA6IHsgdGV4dCA6ICcnIH0sXG4gICAgICAgICAgICBjb2xvcnM6IFsnIzAwNUM4MycsICcjRTg0QTM2JywgJyNBM0Q2NUMnLCAnIzRDNEM0QycsICcjMjIyMjIyJ10sXG4gICAgICAgICAgICB4QXhpczoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsnWWVhciAxJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5QXhpczoge1xuICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICB0aXRsZTogeyB0ZXh0OiAnTWlsZXMnIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdjb2x1bW4nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdTY2VuYXJpbyAxJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBbMzAuM11cbiAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgIG5hbWU6ICdTY2VuYXJpbyAyJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBbMzIuMV1cbiAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgIG5hbWU6ICdTY2VuYXJpbyAzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBbMzEuNF1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH07XG4gICAgfVxuICAgIHNhdmVDaGFydChjaGFydCkge1xuICAgICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xuICAgIH1cbiAgICBvblBvaW50U2VsZWN0KHBvaW50KSB7XG4gICAgICBhbGVydChgJHtwb2ludC55fSBpcyBzZWxlY3RlZGApO1xuICAgIH1cbiAgICBvblNlcmllc0hpZGUoc2VyaWVzKSB7XG4gICAgICBhbGVydChgJHtzZXJpZXMubmFtZX0gaXMgc2VsZWN0ZWRgKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
