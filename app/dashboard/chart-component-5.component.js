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
    var ChartComponent5;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_highcharts_1_1) {
                angular2_highcharts_1 = angular2_highcharts_1_1;
            }],
        execute: function() {
            ChartComponent5 = (function () {
                function ChartComponent5() {
                    this.options = {
                        title: { text: 'Goal 4' },
                        colors: ['#005C83', '#E84A36', '#A3D65C', '#4C4C4C', '#222222'],
                        chart: {
                            type: 'pie'
                        },
                        series: [{
                                name: 'Brands',
                                colorByPoint: true,
                                data: [{
                                        name: 'a',
                                        y: 56.33
                                    }, {
                                        name: 'b',
                                        y: 24.03,
                                        sliced: true,
                                        selected: true
                                    }, {
                                        name: 'd',
                                        y: 10.38
                                    }, {
                                        name: 'e',
                                        y: 4.77
                                    }, {
                                        name: 'f',
                                        y: 0.91
                                    }, {
                                        name: 'c',
                                        y: 0.2
                                    }]
                            }]
                    };
                }
                ChartComponent5.prototype.saveChart = function (chart) {
                    this.chart = chart;
                };
                ChartComponent5.prototype.onPointSelect = function (point) {
                    alert(point.y + " is selected");
                };
                ChartComponent5.prototype.onSeriesHide = function (series) {
                    alert(series.name + " is selected");
                };
                ChartComponent5 = __decorate([
                    core_1.Component({
                        selector: 'chart-component-5',
                        styles: ["\n      chart {\n        display: block;\n      }\n  "],
                        template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
                        directives: [angular2_highcharts_1.CHART_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChartComponent5);
                return ChartComponent5;
            }());
            exports_1("ChartComponent5", ChartComponent5);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9jaGFydC1jb21wb25lbnQtNS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBR0U7b0JBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRzt3QkFDWCxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsUUFBUSxFQUFFO3dCQUMzQixNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO3dCQUMvRCxLQUFLLEVBQUU7NEJBQ0gsSUFBSSxFQUFFLEtBQUs7eUJBQ2Q7d0JBQ0QsTUFBTSxFQUFFLENBQUM7Z0NBQ0wsSUFBSSxFQUFFLFFBQVE7Z0NBQ2QsWUFBWSxFQUFFLElBQUk7Z0NBQ2xCLElBQUksRUFBRSxDQUFDO3dDQUNILElBQUksRUFBRSxHQUFHO3dDQUNULENBQUMsRUFBRSxLQUFLO3FDQUNYLEVBQUU7d0NBQ0MsSUFBSSxFQUFFLEdBQUc7d0NBQ1QsQ0FBQyxFQUFFLEtBQUs7d0NBQ1IsTUFBTSxFQUFFLElBQUk7d0NBQ1osUUFBUSxFQUFFLElBQUk7cUNBQ2pCLEVBQUU7d0NBQ0MsSUFBSSxFQUFFLEdBQUc7d0NBQ1QsQ0FBQyxFQUFFLEtBQUs7cUNBQ1gsRUFBRTt3Q0FDQyxJQUFJLEVBQUUsR0FBRzt3Q0FDVCxDQUFDLEVBQUUsSUFBSTtxQ0FDVixFQUFFO3dDQUNDLElBQUksRUFBRSxHQUFHO3dDQUNULENBQUMsRUFBRSxJQUFJO3FDQUNWLEVBQUU7d0NBQ0MsSUFBSSxFQUFFLEdBQUc7d0NBQ1QsQ0FBQyxFQUFFLEdBQUc7cUNBQ1QsQ0FBQzs2QkFDSCxDQUFDO3FCQUNQLENBQUM7Z0JBQ0YsQ0FBQztnQkFDRCxtQ0FBUyxHQUFULFVBQVUsS0FBSztvQkFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDckIsQ0FBQztnQkFDRCx1Q0FBYSxHQUFiLFVBQWMsS0FBSztvQkFDakIsS0FBSyxDQUFJLEtBQUssQ0FBQyxDQUFDLGlCQUFjLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztnQkFDRCxzQ0FBWSxHQUFaLFVBQWEsTUFBTTtvQkFDakIsS0FBSyxDQUFJLE1BQU0sQ0FBQyxJQUFJLGlCQUFjLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkE5REw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUMsbUJBQW1CO3dCQUMxQixNQUFNLEVBQUUsQ0FBQyx1REFJVixDQUFDO3dCQUNGLFFBQVEsRUFBRSw2UEFNVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxzQ0FBZ0IsQ0FBQztxQkFDL0IsQ0FBQzs7bUNBQUE7Z0JBZ0RGLHNCQUFDO1lBQUQsQ0E5Q0EsQUE4Q0MsSUFBQTtZQTlDRCw2Q0E4Q0MsQ0FBQSIsImZpbGUiOiJkYXNoYm9hcmQvY2hhcnQtY29tcG9uZW50LTUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDSEFSVF9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi1oaWdoY2hhcnRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOidjaGFydC1jb21wb25lbnQtNScsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgY2hhcnQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgYF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxjaGFydCBbb3B0aW9uc109XCJvcHRpb25zXCIgKGxvYWQpPVwic2F2ZUNoYXJ0KCRldmVudC5jb250ZXh0KVwiPlxuICAgICAgICAgIDxzZXJpZXMgKGhpZGUpPVwib25TZXJpZXNIaWRlKCRldmVudC5jb250ZXh0KVwiPlxuICAgICAgICAgICAgPHBvaW50IChzZWxlY3QpPVwib25Qb2ludFNlbGVjdCgkZXZlbnQuY29udGV4dClcIj48L3BvaW50PlxuICAgICAgICAgIDwvc2VyaWVzPlxuICAgICAgICA8L2NoYXJ0PlxuICBgLFxuICBkaXJlY3RpdmVzOiBbQ0hBUlRfRElSRUNUSVZFU11cbn0pXG5cbmV4cG9ydCBjbGFzcyBDaGFydENvbXBvbmVudDUge1xuICBvcHRpb25zOiBPYmplY3Q7XG4gIGNoYXJ0OiBPYmplY3Q7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgdGl0bGUgOiB7IHRleHQgOiAnR29hbCA0JyB9LFxuICAgICAgICBjb2xvcnM6IFsnIzAwNUM4MycsICcjRTg0QTM2JywgJyNBM0Q2NUMnLCAnIzRDNEM0QycsICcjMjIyMjIyJ10sXG4gICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICB0eXBlOiAncGllJ1xuICAgICAgICB9LFxuICAgICAgICBzZXJpZXM6IFt7XG4gICAgICAgICAgICBuYW1lOiAnQnJhbmRzJyxcbiAgICAgICAgICAgIGNvbG9yQnlQb2ludDogdHJ1ZSxcbiAgICAgICAgICAgIGRhdGE6IFt7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2EnLFxuICAgICAgICAgICAgICAgIHk6IDU2LjMzXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2InLFxuICAgICAgICAgICAgICAgIHk6IDI0LjAzLFxuICAgICAgICAgICAgICAgIHNsaWNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogdHJ1ZVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdkJyxcbiAgICAgICAgICAgICAgICB5OiAxMC4zOFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdlJyxcbiAgICAgICAgICAgICAgICB5OiA0Ljc3XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2YnLFxuICAgICAgICAgICAgICAgIHk6IDAuOTFcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnYycsXG4gICAgICAgICAgICAgICAgeTogMC4yXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH1dXG4gICAgfTtcbiAgICB9XG4gICAgc2F2ZUNoYXJ0KGNoYXJ0KSB7XG4gICAgICB0aGlzLmNoYXJ0ID0gY2hhcnQ7XG4gICAgfVxuICAgIG9uUG9pbnRTZWxlY3QocG9pbnQpIHtcbiAgICAgIGFsZXJ0KGAke3BvaW50Lnl9IGlzIHNlbGVjdGVkYCk7XG4gICAgfVxuICAgIG9uU2VyaWVzSGlkZShzZXJpZXMpIHtcbiAgICAgIGFsZXJ0KGAke3Nlcmllcy5uYW1lfSBpcyBzZWxlY3RlZGApO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
