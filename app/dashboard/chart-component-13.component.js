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
    var ChartComponent13;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_highcharts_1_1) {
                angular2_highcharts_1 = angular2_highcharts_1_1;
            }],
        execute: function() {
            ChartComponent13 = (function () {
                function ChartComponent13() {
                    this.options = {
                        title: { text: 'CO2 Emissions' },
                        subtitle: { text: 'Parts per Million' },
                        colors: ['#005C83', '#E84A36', '#A3D65C', '#4C4C4C', '#222222'],
                        xAxis: {
                            categories: ['Year 1']
                        },
                        yAxis: {
                            min: 0,
                            title: { text: 'Tons/Yr' }
                        },
                        chart: {
                            type: 'column'
                        },
                        series: [{
                                name: 'Scenario 1',
                                data: [3.1]
                            }, {
                                name: 'Scenario 2',
                                data: [3.2]
                            }, {
                                name: 'Scenario 3',
                                data: [3.3]
                            }]
                    };
                }
                ChartComponent13.prototype.saveChart = function (chart) {
                    this.chart = chart;
                };
                ChartComponent13.prototype.onPointSelect = function (point) {
                    alert(point.y + " is selected");
                };
                ChartComponent13.prototype.onSeriesHide = function (series) {
                    alert(series.name + " is selected");
                };
                ChartComponent13 = __decorate([
                    core_1.Component({
                        selector: 'chart-component-13',
                        styles: ["\n      chart {\n        display: block;\n      }\n  "],
                        template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
                        directives: [angular2_highcharts_1.CHART_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChartComponent13);
                return ChartComponent13;
            }());
            exports_1("ChartComponent13", ChartComponent13);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9jaGFydC1jb21wb25lbnQtMTMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQUdFO29CQUNNLElBQUksQ0FBQyxPQUFPLEdBQUc7d0JBQ1gsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLGVBQWUsRUFBRTt3QkFDbEMsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLG1CQUFtQixFQUFFO3dCQUN6QyxNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO3dCQUMvRCxLQUFLLEVBQUU7NEJBQ0gsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDO3lCQUN6Qjt3QkFDRCxLQUFLLEVBQUU7NEJBQ0gsR0FBRyxFQUFFLENBQUM7NEJBQ04sS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTt5QkFDN0I7d0JBQ0QsS0FBSyxFQUFFOzRCQUNILElBQUksRUFBRSxRQUFRO3lCQUNqQjt3QkFDRCxNQUFNLEVBQUUsQ0FBQztnQ0FDTCxJQUFJLEVBQUUsWUFBWTtnQ0FDbEIsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDOzZCQUNkLEVBQUM7Z0NBQ0UsSUFBSSxFQUFFLFlBQVk7Z0NBQ2xCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQzs2QkFDZCxFQUFDO2dDQUNFLElBQUksRUFBRSxZQUFZO2dDQUNsQixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7NkJBQ2QsQ0FBQztxQkFDTCxDQUFDO2dCQUNOLENBQUM7Z0JBQ0Qsb0NBQVMsR0FBVCxVQUFVLEtBQUs7b0JBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLENBQUM7Z0JBQ0Qsd0NBQWEsR0FBYixVQUFjLEtBQUs7b0JBQ2pCLEtBQUssQ0FBSSxLQUFLLENBQUMsQ0FBQyxpQkFBYyxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7Z0JBQ0QsdUNBQVksR0FBWixVQUFhLE1BQU07b0JBQ2pCLEtBQUssQ0FBSSxNQUFNLENBQUMsSUFBSSxpQkFBYyxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBdkRMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFDLG9CQUFvQjt3QkFDM0IsTUFBTSxFQUFFLENBQUMsdURBSVYsQ0FBQzt3QkFDRixRQUFRLEVBQUUsNlBBTVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsc0NBQWdCLENBQUM7cUJBQy9CLENBQUM7O29DQUFBO2dCQXlDRix1QkFBQztZQUFELENBdkNBLEFBdUNDLElBQUE7WUF2Q0QsK0NBdUNDLENBQUEiLCJmaWxlIjoiZGFzaGJvYXJkL2NoYXJ0LWNvbXBvbmVudC0xMy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NIQVJUX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyLWhpZ2hjaGFydHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6J2NoYXJ0LWNvbXBvbmVudC0xMycsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgY2hhcnQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgYF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxjaGFydCBbb3B0aW9uc109XCJvcHRpb25zXCIgKGxvYWQpPVwic2F2ZUNoYXJ0KCRldmVudC5jb250ZXh0KVwiPlxuICAgICAgICAgIDxzZXJpZXMgKGhpZGUpPVwib25TZXJpZXNIaWRlKCRldmVudC5jb250ZXh0KVwiPlxuICAgICAgICAgICAgPHBvaW50IChzZWxlY3QpPVwib25Qb2ludFNlbGVjdCgkZXZlbnQuY29udGV4dClcIj48L3BvaW50PlxuICAgICAgICAgIDwvc2VyaWVzPlxuICAgICAgICA8L2NoYXJ0PlxuICBgLFxuICBkaXJlY3RpdmVzOiBbQ0hBUlRfRElSRUNUSVZFU11cbn0pXG5cbmV4cG9ydCBjbGFzcyBDaGFydENvbXBvbmVudDEzIHtcbiAgb3B0aW9uczogT2JqZWN0O1xuICBjaGFydDogT2JqZWN0O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgdGl0bGUgOiB7IHRleHQgOiAnQ08yIEVtaXNzaW9ucycgfSxcbiAgICAgICAgICAgIHN1YnRpdGxlIDogeyB0ZXh0IDogJ1BhcnRzIHBlciBNaWxsaW9uJyB9LFxuICAgICAgICAgICAgY29sb3JzOiBbJyMwMDVDODMnLCAnI0U4NEEzNicsICcjQTNENjVDJywgJyM0QzRDNEMnLCAnIzIyMjIyMiddLFxuICAgICAgICAgICAgeEF4aXM6IHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbJ1llYXIgMSddXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeUF4aXM6IHtcbiAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHsgdGV4dDogJ1RvbnMvWXInIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdjb2x1bW4nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdTY2VuYXJpbyAxJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBbMy4xXVxuICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgbmFtZTogJ1NjZW5hcmlvIDInLFxuICAgICAgICAgICAgICAgIGRhdGE6IFszLjJdXG4gICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnU2NlbmFyaW8gMycsXG4gICAgICAgICAgICAgICAgZGF0YTogWzMuM11cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH07XG4gICAgfVxuICAgIHNhdmVDaGFydChjaGFydCkge1xuICAgICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xuICAgIH1cbiAgICBvblBvaW50U2VsZWN0KHBvaW50KSB7XG4gICAgICBhbGVydChgJHtwb2ludC55fSBpcyBzZWxlY3RlZGApO1xuICAgIH1cbiAgICBvblNlcmllc0hpZGUoc2VyaWVzKSB7XG4gICAgICBhbGVydChgJHtzZXJpZXMubmFtZX0gaXMgc2VsZWN0ZWRgKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
