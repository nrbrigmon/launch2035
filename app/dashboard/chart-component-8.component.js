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
                                data: [3370260468]
                            }, {
                                name: 'Scenario 2',
                                data: [6115747316]
                            }, {
                                name: 'Scenario 3',
                                data: [7956296631]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9jaGFydC1jb21wb25lbnQtOC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBR0U7b0JBQ00sSUFBSSxDQUFDLE9BQU8sR0FBRzt3QkFDWCxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsaUJBQWlCLEVBQUU7d0JBQ3BDLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyx5QkFBeUIsRUFBRTt3QkFDL0MsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQzt3QkFDL0QsS0FBSyxFQUFFOzRCQUNILFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQzt5QkFDekI7d0JBQ0QsS0FBSyxFQUFFOzRCQUNILEdBQUcsRUFBRSxDQUFDOzRCQUNOLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7NEJBQ25CLE1BQU0sRUFBRTtnQ0FDSixTQUFTLEVBQUU7b0NBQ1AsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7b0NBQ2xDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsQ0FBQSxDQUFDO3dDQUNsQixNQUFNLENBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO29DQUM3QyxDQUFDO29DQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUEsQ0FBQzt3Q0FDdEIsTUFBTSxDQUFDLEdBQUcsR0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQ0FDN0MsQ0FBQztvQ0FBQyxJQUFJLENBQUMsQ0FBQzt3Q0FDTixNQUFNLENBQUMsR0FBRyxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7b0NBQ3pCLENBQUM7Z0NBQ0wsQ0FBQzs2QkFDSjt5QkFDSjt3QkFDRCxLQUFLLEVBQUU7NEJBQ0gsSUFBSSxFQUFFLFFBQVE7eUJBQ2pCO3dCQUNELE1BQU0sRUFBRSxDQUFDO2dDQUNMLElBQUksRUFBRSxZQUFZO2dDQUNsQixJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUM7NkJBQ3JCLEVBQUM7Z0NBQ0UsSUFBSSxFQUFFLFlBQVk7Z0NBQ2xCLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQzs2QkFDckIsRUFBQztnQ0FDRSxJQUFJLEVBQUUsWUFBWTtnQ0FDbEIsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDOzZCQUNyQixDQUFDO3FCQUNMLENBQUM7Z0JBQ04sQ0FBQztnQkFDRCxtQ0FBUyxHQUFULFVBQVUsS0FBSztvQkFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDckIsQ0FBQztnQkFDRCx1Q0FBYSxHQUFiLFVBQWMsS0FBSztvQkFDakIsS0FBSyxDQUFJLEtBQUssQ0FBQyxDQUFDLGlCQUFjLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztnQkFDRCxzQ0FBWSxHQUFaLFVBQWEsTUFBTTtvQkFDakIsS0FBSyxDQUFJLE1BQU0sQ0FBQyxJQUFJLGlCQUFjLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkFuRUw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUMsbUJBQW1CO3dCQUMxQixNQUFNLEVBQUUsQ0FBQyx1REFJVixDQUFDO3dCQUNGLFFBQVEsRUFBRSw2UEFNVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxzQ0FBZ0IsQ0FBQztxQkFDL0IsQ0FBQzs7bUNBQUE7Z0JBcURGLHNCQUFDO1lBQUQsQ0FuREEsQUFtREMsSUFBQTtZQW5ERCw2Q0FtREMsQ0FBQSIsImZpbGUiOiJkYXNoYm9hcmQvY2hhcnQtY29tcG9uZW50LTguY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDSEFSVF9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi1oaWdoY2hhcnRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOidjaGFydC1jb21wb25lbnQtOCcsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgY2hhcnQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgYF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxjaGFydCBbb3B0aW9uc109XCJvcHRpb25zXCIgKGxvYWQpPVwic2F2ZUNoYXJ0KCRldmVudC5jb250ZXh0KVwiPlxuICAgICAgICAgIDxzZXJpZXMgKGhpZGUpPVwib25TZXJpZXNIaWRlKCRldmVudC5jb250ZXh0KVwiPlxuICAgICAgICAgICAgPHBvaW50IChzZWxlY3QpPVwib25Qb2ludFNlbGVjdCgkZXZlbnQuY29udGV4dClcIj48L3BvaW50PlxuICAgICAgICAgIDwvc2VyaWVzPlxuICAgICAgICA8L2NoYXJ0PlxuICBgLFxuICBkaXJlY3RpdmVzOiBbQ0hBUlRfRElSRUNUSVZFU11cbn0pXG5cbmV4cG9ydCBjbGFzcyBDaGFydENvbXBvbmVudDgge1xuICBvcHRpb25zOiBPYmplY3Q7XG4gIGNoYXJ0OiBPYmplY3Q7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZSA6IHsgdGV4dCA6ICdOZXcgVG90YWwgVmFsdWUnIH0sXG4gICAgICAgICAgICBzdWJ0aXRsZSA6IHsgdGV4dCA6ICdmcm9tIENvbnN0cnVjdGlvbiBDb3N0cycgfSxcbiAgICAgICAgICAgIGNvbG9yczogWycjMDA1QzgzJywgJyNFODRBMzYnLCAnI0EzRDY1QycsICcjNEM0QzRDJywgJyMyMjIyMjInXSxcbiAgICAgICAgICAgIHhBeGlzOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydZZWFyIDEnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHlBeGlzOiB7XG4gICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7IHRleHQ6ICcnIH0sXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG51bSA9ICh0aGlzLnZhbHVlKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bSA+PSAxMDAwMDAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICckJytudW0uc2xpY2UoMCxudW0ubGVuZ3RoLTYpICsgJ00nO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChudW0gPj0gMTAwMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJCcrbnVtLnNsaWNlKDAsbnVtLmxlbmd0aC0zKSArICdLJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJCcrIHRoaXMudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnY29sdW1uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlcmllczogW3tcbiAgICAgICAgICAgICAgICBuYW1lOiAnU2NlbmFyaW8gMScsXG4gICAgICAgICAgICAgICAgZGF0YTogWzMzNzAyNjA0NjhdXG4gICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnU2NlbmFyaW8gMicsXG4gICAgICAgICAgICAgICAgZGF0YTogWzYxMTU3NDczMTZdXG4gICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnU2NlbmFyaW8gMycsXG4gICAgICAgICAgICAgICAgZGF0YTogWzc5NTYyOTY2MzFdXG4gICAgICAgICAgICB9XVxuICAgICAgICB9O1xuICAgIH1cbiAgICBzYXZlQ2hhcnQoY2hhcnQpIHtcbiAgICAgIHRoaXMuY2hhcnQgPSBjaGFydDtcbiAgICB9XG4gICAgb25Qb2ludFNlbGVjdChwb2ludCkge1xuICAgICAgYWxlcnQoYCR7cG9pbnQueX0gaXMgc2VsZWN0ZWRgKTtcbiAgICB9XG4gICAgb25TZXJpZXNIaWRlKHNlcmllcykge1xuICAgICAgYWxlcnQoYCR7c2VyaWVzLm5hbWV9IGlzIHNlbGVjdGVkYCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
