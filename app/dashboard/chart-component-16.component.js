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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9jaGFydC1jb21wb25lbnQtMTYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQUdFO29CQUNNLElBQUksQ0FBQyxPQUFPLEdBQUc7d0JBQ1gsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLG1CQUFtQixFQUFFO3dCQUN0QyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsRUFBRSxFQUFFO3dCQUN4QixNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO3dCQUMvRCxLQUFLLEVBQUU7NEJBQ0gsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDO3lCQUN6Qjt3QkFDRCxLQUFLLEVBQUU7NEJBQ0gsR0FBRyxFQUFFLENBQUM7NEJBQ04sS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRTs0QkFDbkIsU0FBUyxFQUFFO2dDQUNQLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dDQUNsQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLENBQUEsQ0FBQztvQ0FDbEIsTUFBTSxDQUFDLEdBQUcsR0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztnQ0FDN0MsQ0FBQztnQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7b0NBQ3RCLE1BQU0sQ0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7Z0NBQzdDLENBQUM7Z0NBQUMsSUFBSSxDQUFDLENBQUM7b0NBQ04sTUFBTSxDQUFDLEdBQUcsR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDO2dDQUN6QixDQUFDOzRCQUNMLENBQUM7eUJBQ0o7d0JBQ0QsS0FBSyxFQUFFOzRCQUNILElBQUksRUFBRSxRQUFRO3lCQUNqQjt3QkFDRCxNQUFNLEVBQUUsQ0FBQztnQ0FDTCxJQUFJLEVBQUUsWUFBWTtnQ0FDbEIsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDOzZCQUNwQixFQUFDO2dDQUNFLElBQUksRUFBRSxZQUFZO2dDQUNsQixJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUM7NkJBQ3BCLEVBQUM7Z0NBQ0UsSUFBSSxFQUFFLFlBQVk7Z0NBQ2xCLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQzs2QkFDcEIsQ0FBQztxQkFDTCxDQUFDO2dCQUNOLENBQUM7Z0JBQ0Qsb0NBQVMsR0FBVCxVQUFVLEtBQUs7b0JBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLENBQUM7Z0JBQ0Qsd0NBQWEsR0FBYixVQUFjLEtBQUs7b0JBQ2pCLEtBQUssQ0FBSSxLQUFLLENBQUMsQ0FBQyxpQkFBYyxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7Z0JBQ0QsdUNBQVksR0FBWixVQUFhLE1BQU07b0JBQ2pCLEtBQUssQ0FBSSxNQUFNLENBQUMsSUFBSSxpQkFBYyxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBakVMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFDLG9CQUFvQjt3QkFDM0IsTUFBTSxFQUFFLENBQUMsdURBSVYsQ0FBQzt3QkFDRixRQUFRLEVBQUUsNlBBTVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsc0NBQWdCLENBQUM7cUJBQy9CLENBQUM7O29DQUFBO2dCQW1ERix1QkFBQztZQUFELENBakRBLEFBaURDLElBQUE7WUFqREQsK0NBaURDLENBQUEiLCJmaWxlIjoiZGFzaGJvYXJkL2NoYXJ0LWNvbXBvbmVudC0xNi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NIQVJUX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyLWhpZ2hjaGFydHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6J2NoYXJ0LWNvbXBvbmVudC0xNicsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgY2hhcnQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgYF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxjaGFydCBbb3B0aW9uc109XCJvcHRpb25zXCIgKGxvYWQpPVwic2F2ZUNoYXJ0KCRldmVudC5jb250ZXh0KVwiPlxuICAgICAgICAgIDxzZXJpZXMgKGhpZGUpPVwib25TZXJpZXNIaWRlKCRldmVudC5jb250ZXh0KVwiPlxuICAgICAgICAgICAgPHBvaW50IChzZWxlY3QpPVwib25Qb2ludFNlbGVjdCgkZXZlbnQuY29udGV4dClcIj48L3BvaW50PlxuICAgICAgICAgIDwvc2VyaWVzPlxuICAgICAgICA8L2NoYXJ0PlxuICBgLFxuICBkaXJlY3RpdmVzOiBbQ0hBUlRfRElSRUNUSVZFU11cbn0pXG5cbmV4cG9ydCBjbGFzcyBDaGFydENvbXBvbmVudDE2IHtcbiAgb3B0aW9uczogT2JqZWN0O1xuICBjaGFydDogT2JqZWN0O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgdGl0bGUgOiB7IHRleHQgOiAnTmV3IFJvYWR3YXkgQ29zdHMnIH0sXG4gICAgICAgICAgICBzdWJ0aXRsZSA6IHsgdGV4dCA6ICcnIH0sXG4gICAgICAgICAgICBjb2xvcnM6IFsnIzAwNUM4MycsICcjRTg0QTM2JywgJyNBM0Q2NUMnLCAnIzRDNEM0QycsICcjMjIyMjIyJ10sXG4gICAgICAgICAgICB4QXhpczoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsnWWVhciAxJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5QXhpczoge1xuICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICB0aXRsZTogeyB0ZXh0OiAnJyB9LFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbnVtID0gKHRoaXMudmFsdWUpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChudW0gPj0gMTAwMDAwMCl7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICckJytudW0uc2xpY2UoMCxudW0ubGVuZ3RoLTYpICsgJ00nO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG51bSA+PSAxMDAwKXtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyQnK251bS5zbGljZSgwLG51bS5sZW5ndGgtMykgKyAnSyc7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICckJysgdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdjb2x1bW4nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdTY2VuYXJpbyAxJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBbODYyODExMDM3XVxuICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgbmFtZTogJ1NjZW5hcmlvIDInLFxuICAgICAgICAgICAgICAgIGRhdGE6IFs3NjA3MDcwMzddXG4gICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnU2NlbmFyaW8gMycsXG4gICAgICAgICAgICAgICAgZGF0YTogWzQwODE0NTM4OF1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH07XG4gICAgfVxuICAgIHNhdmVDaGFydChjaGFydCkge1xuICAgICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xuICAgIH1cbiAgICBvblBvaW50U2VsZWN0KHBvaW50KSB7XG4gICAgICBhbGVydChgJHtwb2ludC55fSBpcyBzZWxlY3RlZGApO1xuICAgIH1cbiAgICBvblNlcmllc0hpZGUoc2VyaWVzKSB7XG4gICAgICBhbGVydChgJHtzZXJpZXMubmFtZX0gaXMgc2VsZWN0ZWRgKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
