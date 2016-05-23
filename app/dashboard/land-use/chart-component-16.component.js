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
    var ChartComponent16;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_highcharts_1_1) {
                angular2_highcharts_1 = angular2_highcharts_1_1;
            }],
        execute: function() {
            ChartComponent16 = (function () {
                function ChartComponent16() {
                    this.options = {
                        title: { text: 'New Roadway Costs' },
                        subtitle: { text: '' },
                        colors: ['#005C83', '#E84A36', '#A3D65C', '#4C4C4C', '#222222'],
                        xAxis: {
                            categories: ['Year 1']
                        },
                        yAxis: {
                            min: 0,
                            title: { text: '' },
                            labels: {
                                formatter: function () {
                                    var num = (this.value).toString();
                                    if (num >= 1000000) {
                                        return '$' + num.slice(0, num.length - 6) + 'M';
                                    }
                                    else if (num >= 1000) {
                                        return '$' + num.slice(0, num.length - 3) + 'K';
                                    }
                                    else {
                                        return '$' + this.value;
                                    }
                                }
                            }
                        },
                        chart: {
                            type: 'column'
                        },
                        series: [{
                                name: 'Scenario 1',
                                data: [862811037]
                            }, {
                                name: 'Scenario 2',
                                data: [760707037]
                            }, {
                                name: 'Scenario 3',
                                data: [408145388]
                            }]
                    };
                }
                ChartComponent16.prototype.saveChart = function (chart) {
                    this.chart = chart;
                };
                ChartComponent16.prototype.onPointSelect = function (point) {
                    alert(point.y + " is selected");
                };
                ChartComponent16.prototype.onSeriesHide = function (series) {
                    alert(series.name + " is selected");
                };
                ChartComponent16 = __decorate([
                    core_1.Component({
                        selector: 'chart-component-16',
                        styles: ["\n      chart {\n        display: block;\n      }\n  "],
                        template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
                        directives: [angular2_highcharts_1.CHART_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChartComponent16);
                return ChartComponent16;
            }());
            exports_1("ChartComponent16", ChartComponent16);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9sYW5kLXVzZS9jaGFydC1jb21wb25lbnQtMTYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQUdFO29CQUNNLElBQUksQ0FBQyxPQUFPLEdBQUc7d0JBQ1gsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLG1CQUFtQixFQUFFO3dCQUN0QyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsRUFBRSxFQUFFO3dCQUN4QixNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO3dCQUMvRCxLQUFLLEVBQUU7NEJBQ0gsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDO3lCQUN6Qjt3QkFDRCxLQUFLLEVBQUU7NEJBQ0gsR0FBRyxFQUFFLENBQUM7NEJBQ04sS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRTs0QkFDbkIsTUFBTSxFQUFFO2dDQUNKLFNBQVMsRUFBRTtvQ0FDUCxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQ0FDbEMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxDQUFBLENBQUM7d0NBQ2xCLE1BQU0sQ0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7b0NBQzdDLENBQUM7b0NBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO3dDQUN0QixNQUFNLENBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO29DQUM3QyxDQUFDO29DQUFDLElBQUksQ0FBQyxDQUFDO3dDQUNOLE1BQU0sQ0FBQyxHQUFHLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztvQ0FDekIsQ0FBQztnQ0FDTCxDQUFDOzZCQUNKO3lCQUNKO3dCQUNELEtBQUssRUFBRTs0QkFDSCxJQUFJLEVBQUUsUUFBUTt5QkFDakI7d0JBQ0QsTUFBTSxFQUFFLENBQUM7Z0NBQ0wsSUFBSSxFQUFFLFlBQVk7Z0NBQ2xCLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQzs2QkFDcEIsRUFBQztnQ0FDRSxJQUFJLEVBQUUsWUFBWTtnQ0FDbEIsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDOzZCQUNwQixFQUFDO2dDQUNFLElBQUksRUFBRSxZQUFZO2dDQUNsQixJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUM7NkJBQ3BCLENBQUM7cUJBQ0wsQ0FBQztnQkFDTixDQUFDO2dCQUNELG9DQUFTLEdBQVQsVUFBVSxLQUFLO29CQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixDQUFDO2dCQUNELHdDQUFhLEdBQWIsVUFBYyxLQUFLO29CQUNqQixLQUFLLENBQUksS0FBSyxDQUFDLENBQUMsaUJBQWMsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQUNELHVDQUFZLEdBQVosVUFBYSxNQUFNO29CQUNqQixLQUFLLENBQUksTUFBTSxDQUFDLElBQUksaUJBQWMsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO2dCQW5FTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBQyxvQkFBb0I7d0JBQzNCLE1BQU0sRUFBRSxDQUFDLHVEQUlWLENBQUM7d0JBQ0YsUUFBUSxFQUFFLDZQQU1UO3dCQUNELFVBQVUsRUFBRSxDQUFDLHNDQUFnQixDQUFDO3FCQUMvQixDQUFDOztvQ0FBQTtnQkFxREYsdUJBQUM7WUFBRCxDQW5EQSxBQW1EQyxJQUFBO1lBbkRELCtDQW1EQyxDQUFBIiwiZmlsZSI6ImRhc2hib2FyZC9sYW5kLXVzZS9jaGFydC1jb21wb25lbnQtMTYuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDSEFSVF9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi1oaWdoY2hhcnRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOidjaGFydC1jb21wb25lbnQtMTYnLFxuICAgIHN0eWxlczogW2BcbiAgICAgIGNoYXJ0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gIGBdLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8Y2hhcnQgW29wdGlvbnNdPVwib3B0aW9uc1wiIChsb2FkKT1cInNhdmVDaGFydCgkZXZlbnQuY29udGV4dClcIj5cbiAgICAgICAgICA8c2VyaWVzIChoaWRlKT1cIm9uU2VyaWVzSGlkZSgkZXZlbnQuY29udGV4dClcIj5cbiAgICAgICAgICAgIDxwb2ludCAoc2VsZWN0KT1cIm9uUG9pbnRTZWxlY3QoJGV2ZW50LmNvbnRleHQpXCI+PC9wb2ludD5cbiAgICAgICAgICA8L3Nlcmllcz5cbiAgICAgICAgPC9jaGFydD5cbiAgYCxcbiAgZGlyZWN0aXZlczogW0NIQVJUX0RJUkVDVElWRVNdXG59KVxuXG5leHBvcnQgY2xhc3MgQ2hhcnRDb21wb25lbnQxNiB7XG4gIG9wdGlvbnM6IE9iamVjdDtcbiAgY2hhcnQ6IE9iamVjdDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlIDogeyB0ZXh0IDogJ05ldyBSb2Fkd2F5IENvc3RzJyB9LFxuICAgICAgICAgICAgc3VidGl0bGUgOiB7IHRleHQgOiAnJyB9LFxuICAgICAgICAgICAgY29sb3JzOiBbJyMwMDVDODMnLCAnI0U4NEEzNicsICcjQTNENjVDJywgJyM0QzRDNEMnLCAnIzIyMjIyMiddLFxuICAgICAgICAgICAgeEF4aXM6IHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbJ1llYXIgMSddXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeUF4aXM6IHtcbiAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHsgdGV4dDogJycgfSxcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbnVtID0gKHRoaXMudmFsdWUpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVtID49IDEwMDAwMDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyQnK251bS5zbGljZSgwLG51bS5sZW5ndGgtNikgKyAnTSc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG51bSA+PSAxMDAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICckJytudW0uc2xpY2UoMCxudW0ubGVuZ3RoLTMpICsgJ0snO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICckJysgdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdjb2x1bW4nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdTY2VuYXJpbyAxJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBbODYyODExMDM3XVxuICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgbmFtZTogJ1NjZW5hcmlvIDInLFxuICAgICAgICAgICAgICAgIGRhdGE6IFs3NjA3MDcwMzddXG4gICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnU2NlbmFyaW8gMycsXG4gICAgICAgICAgICAgICAgZGF0YTogWzQwODE0NTM4OF1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH07XG4gICAgfVxuICAgIHNhdmVDaGFydChjaGFydCkge1xuICAgICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xuICAgIH1cbiAgICBvblBvaW50U2VsZWN0KHBvaW50KSB7XG4gICAgICBhbGVydChgJHtwb2ludC55fSBpcyBzZWxlY3RlZGApO1xuICAgIH1cbiAgICBvblNlcmllc0hpZGUoc2VyaWVzKSB7XG4gICAgICBhbGVydChgJHtzZXJpZXMubmFtZX0gaXMgc2VsZWN0ZWRgKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
