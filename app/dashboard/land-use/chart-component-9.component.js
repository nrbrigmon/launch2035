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
    var ChartComponent9;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_highcharts_1_1) {
                angular2_highcharts_1 = angular2_highcharts_1_1;
            }],
        execute: function() {
            ChartComponent9 = (function () {
                function ChartComponent9() {
                    this.options = {
                        title: { text: 'Sales Tax Revenue' },
                        subtitle: { text: 'per Acre per Year' },
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
                                    if (num >= 1000) {
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
                                data: [13438]
                            }, {
                                name: 'Scenario 2',
                                data: [97482]
                            }, {
                                name: 'Scenario 3',
                                data: [246630]
                            }]
                    };
                }
                ChartComponent9.prototype.saveChart = function (chart) {
                    this.chart = chart;
                };
                ChartComponent9.prototype.onPointSelect = function (point) {
                    alert(point.y + " is selected");
                };
                ChartComponent9.prototype.onSeriesHide = function (series) {
                    alert(series.name + " is selected");
                };
                ChartComponent9 = __decorate([
                    core_1.Component({
                        selector: 'chart-component-9',
                        styles: ["\n      chart {\n        display: block;\n      }\n  "],
                        template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
                        directives: [angular2_highcharts_1.CHART_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChartComponent9);
                return ChartComponent9;
            }());
            exports_1("ChartComponent9", ChartComponent9);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9sYW5kLXVzZS9jaGFydC1jb21wb25lbnQtOS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBR0U7b0JBQ00sSUFBSSxDQUFDLE9BQU8sR0FBRzt3QkFDWCxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsbUJBQW1CLEVBQUU7d0JBQ3RDLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxtQkFBbUIsRUFBRTt3QkFDekMsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQzt3QkFDL0QsS0FBSyxFQUFFOzRCQUNILFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQzt5QkFDekI7d0JBQ0QsS0FBSyxFQUFFOzRCQUNILEdBQUcsRUFBRSxDQUFDOzRCQUNOLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7NEJBQ25CLE1BQU0sRUFBRTtnQ0FDSixTQUFTLEVBQUU7b0NBQ1AsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7b0NBQ2xDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO3dDQUNmLE1BQU0sQ0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7b0NBQzdDLENBQUM7b0NBQUMsSUFBSSxDQUFDLENBQUM7d0NBQ04sTUFBTSxDQUFDLEdBQUcsR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDO29DQUN6QixDQUFDO2dDQUNMLENBQUM7NkJBQ0o7eUJBQ0o7d0JBQ0QsS0FBSyxFQUFFOzRCQUNILElBQUksRUFBRSxRQUFRO3lCQUNqQjt3QkFDRCxNQUFNLEVBQUUsQ0FBQztnQ0FDTCxJQUFJLEVBQUUsWUFBWTtnQ0FDbEIsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDOzZCQUNoQixFQUFDO2dDQUNFLElBQUksRUFBRSxZQUFZO2dDQUNsQixJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkJBQ2hCLEVBQUM7Z0NBQ0UsSUFBSSxFQUFFLFlBQVk7Z0NBQ2xCLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQzs2QkFDakIsQ0FBQztxQkFDTCxDQUFDO2dCQUNOLENBQUM7Z0JBQ0QsbUNBQVMsR0FBVCxVQUFVLEtBQUs7b0JBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLENBQUM7Z0JBQ0QsdUNBQWEsR0FBYixVQUFjLEtBQUs7b0JBQ2pCLEtBQUssQ0FBSSxLQUFLLENBQUMsQ0FBQyxpQkFBYyxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7Z0JBQ0Qsc0NBQVksR0FBWixVQUFhLE1BQU07b0JBQ2pCLEtBQUssQ0FBSSxNQUFNLENBQUMsSUFBSSxpQkFBYyxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBakVMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFDLG1CQUFtQjt3QkFDMUIsTUFBTSxFQUFFLENBQUMsdURBSVYsQ0FBQzt3QkFDRixRQUFRLEVBQUUsNlBBTVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsc0NBQWdCLENBQUM7cUJBQy9CLENBQUM7O21DQUFBO2dCQW1ERixzQkFBQztZQUFELENBakRBLEFBaURDLElBQUE7WUFqREQsNkNBaURDLENBQUEiLCJmaWxlIjoiZGFzaGJvYXJkL2xhbmQtdXNlL2NoYXJ0LWNvbXBvbmVudC05LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q0hBUlRfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjItaGlnaGNoYXJ0cyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjonY2hhcnQtY29tcG9uZW50LTknLFxuICAgIHN0eWxlczogW2BcbiAgICAgIGNoYXJ0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gIGBdLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8Y2hhcnQgW29wdGlvbnNdPVwib3B0aW9uc1wiIChsb2FkKT1cInNhdmVDaGFydCgkZXZlbnQuY29udGV4dClcIj5cbiAgICAgICAgICA8c2VyaWVzIChoaWRlKT1cIm9uU2VyaWVzSGlkZSgkZXZlbnQuY29udGV4dClcIj5cbiAgICAgICAgICAgIDxwb2ludCAoc2VsZWN0KT1cIm9uUG9pbnRTZWxlY3QoJGV2ZW50LmNvbnRleHQpXCI+PC9wb2ludD5cbiAgICAgICAgICA8L3Nlcmllcz5cbiAgICAgICAgPC9jaGFydD5cbiAgYCxcbiAgZGlyZWN0aXZlczogW0NIQVJUX0RJUkVDVElWRVNdXG59KVxuXG5leHBvcnQgY2xhc3MgQ2hhcnRDb21wb25lbnQ5IHtcbiAgb3B0aW9uczogT2JqZWN0O1xuICBjaGFydDogT2JqZWN0O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgdGl0bGUgOiB7IHRleHQgOiAnU2FsZXMgVGF4IFJldmVudWUnIH0sXG4gICAgICAgICAgICBzdWJ0aXRsZSA6IHsgdGV4dCA6ICdwZXIgQWNyZSBwZXIgWWVhcicgfSxcbiAgICAgICAgICAgIGNvbG9yczogWycjMDA1QzgzJywgJyNFODRBMzYnLCAnI0EzRDY1QycsICcjNEM0QzRDJywgJyMyMjIyMjInXSxcbiAgICAgICAgICAgIHhBeGlzOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydZZWFyIDEnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHlBeGlzOiB7XG4gICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7IHRleHQ6ICcnIH0sXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG51bSA9ICh0aGlzLnZhbHVlKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bSA+PSAxMDAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICckJytudW0uc2xpY2UoMCxudW0ubGVuZ3RoLTMpICsgJ0snO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICckJysgdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdjb2x1bW4nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdTY2VuYXJpbyAxJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBbMTM0MzhdXG4gICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnU2NlbmFyaW8gMicsXG4gICAgICAgICAgICAgICAgZGF0YTogWzk3NDgyXVxuICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgbmFtZTogJ1NjZW5hcmlvIDMnLFxuICAgICAgICAgICAgICAgIGRhdGE6IFsyNDY2MzBdXG4gICAgICAgICAgICB9XVxuICAgICAgICB9O1xuICAgIH1cbiAgICBzYXZlQ2hhcnQoY2hhcnQpIHtcbiAgICAgIHRoaXMuY2hhcnQgPSBjaGFydDtcbiAgICB9XG4gICAgb25Qb2ludFNlbGVjdChwb2ludCkge1xuICAgICAgYWxlcnQoYCR7cG9pbnQueX0gaXMgc2VsZWN0ZWRgKTtcbiAgICB9XG4gICAgb25TZXJpZXNIaWRlKHNlcmllcykge1xuICAgICAgYWxlcnQoYCR7c2VyaWVzLm5hbWV9IGlzIHNlbGVjdGVkYCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
