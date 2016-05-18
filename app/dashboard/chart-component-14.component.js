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
    var ChartComponent14;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_highcharts_1_1) {
                angular2_highcharts_1 = angular2_highcharts_1_1;
            }],
        execute: function() {
            ChartComponent14 = (function () {
                function ChartComponent14() {
                    this.options = {
                        title: { text: 'Energy Use' },
                        subtitle: { text: 'per Household per Year' },
                        colors: ['#005C83', '#E84A36', '#A3D65C', '#4C4C4C', '#222222'],
                        xAxis: {
                            categories: ['Year 1']
                        },
                        yAxis: {
                            min: 0,
                            title: { text: 'Million BTU/Yr' }
                        },
                        chart: {
                            type: 'column'
                        },
                        series: [{
                                name: 'Scenario 1',
                                data: [33.4]
                            }, {
                                name: 'Scenario 2',
                                data: [34.1]
                            }, {
                                name: 'Scenario 3',
                                data: [34.9]
                            }]
                    };
                }
                ChartComponent14.prototype.saveChart = function (chart) {
                    this.chart = chart;
                };
                ChartComponent14.prototype.onPointSelect = function (point) {
                    alert(point.y + " is selected");
                };
                ChartComponent14.prototype.onSeriesHide = function (series) {
                    alert(series.name + " is selected");
                };
                ChartComponent14 = __decorate([
                    core_1.Component({
                        selector: 'chart-component-14',
                        styles: ["\n      chart {\n        display: block;\n      }\n  "],
                        template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
                        directives: [angular2_highcharts_1.CHART_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChartComponent14);
                return ChartComponent14;
            }());
            exports_1("ChartComponent14", ChartComponent14);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9jaGFydC1jb21wb25lbnQtMTQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQUdFO29CQUNNLElBQUksQ0FBQyxPQUFPLEdBQUc7d0JBQ1gsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLFlBQVksRUFBRTt3QkFDL0IsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLHdCQUF3QixFQUFFO3dCQUM5QyxNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO3dCQUMvRCxLQUFLLEVBQUU7NEJBQ0gsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDO3lCQUN6Qjt3QkFDRCxLQUFLLEVBQUU7NEJBQ0gsR0FBRyxFQUFFLENBQUM7NEJBQ04sS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO3lCQUNwQzt3QkFDRCxLQUFLLEVBQUU7NEJBQ0gsSUFBSSxFQUFFLFFBQVE7eUJBQ2pCO3dCQUNELE1BQU0sRUFBRSxDQUFDO2dDQUNMLElBQUksRUFBRSxZQUFZO2dDQUNsQixJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkJBQ2YsRUFBQztnQ0FDRSxJQUFJLEVBQUUsWUFBWTtnQ0FDbEIsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDOzZCQUNmLEVBQUM7Z0NBQ0UsSUFBSSxFQUFFLFlBQVk7Z0NBQ2xCLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQzs2QkFDZixDQUFDO3FCQUNMLENBQUM7Z0JBQ04sQ0FBQztnQkFDRCxvQ0FBUyxHQUFULFVBQVUsS0FBSztvQkFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDckIsQ0FBQztnQkFDRCx3Q0FBYSxHQUFiLFVBQWMsS0FBSztvQkFDakIsS0FBSyxDQUFJLEtBQUssQ0FBQyxDQUFDLGlCQUFjLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztnQkFDRCx1Q0FBWSxHQUFaLFVBQWEsTUFBTTtvQkFDakIsS0FBSyxDQUFJLE1BQU0sQ0FBQyxJQUFJLGlCQUFjLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkF2REw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUMsb0JBQW9CO3dCQUMzQixNQUFNLEVBQUUsQ0FBQyx1REFJVixDQUFDO3dCQUNGLFFBQVEsRUFBRSw2UEFNVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxzQ0FBZ0IsQ0FBQztxQkFDL0IsQ0FBQzs7b0NBQUE7Z0JBeUNGLHVCQUFDO1lBQUQsQ0F2Q0EsQUF1Q0MsSUFBQTtZQXZDRCwrQ0F1Q0MsQ0FBQSIsImZpbGUiOiJkYXNoYm9hcmQvY2hhcnQtY29tcG9uZW50LTE0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q0hBUlRfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjItaGlnaGNoYXJ0cyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjonY2hhcnQtY29tcG9uZW50LTE0JyxcbiAgICBzdHlsZXM6IFtgXG4gICAgICBjaGFydCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICBgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGNoYXJ0IFtvcHRpb25zXT1cIm9wdGlvbnNcIiAobG9hZCk9XCJzYXZlQ2hhcnQoJGV2ZW50LmNvbnRleHQpXCI+XG4gICAgICAgICAgPHNlcmllcyAoaGlkZSk9XCJvblNlcmllc0hpZGUoJGV2ZW50LmNvbnRleHQpXCI+XG4gICAgICAgICAgICA8cG9pbnQgKHNlbGVjdCk9XCJvblBvaW50U2VsZWN0KCRldmVudC5jb250ZXh0KVwiPjwvcG9pbnQ+XG4gICAgICAgICAgPC9zZXJpZXM+XG4gICAgICAgIDwvY2hhcnQ+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtDSEFSVF9ESVJFQ1RJVkVTXVxufSlcblxuZXhwb3J0IGNsYXNzIENoYXJ0Q29tcG9uZW50MTQge1xuICBvcHRpb25zOiBPYmplY3Q7XG4gIGNoYXJ0OiBPYmplY3Q7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZSA6IHsgdGV4dCA6ICdFbmVyZ3kgVXNlJyB9LFxuICAgICAgICAgICAgc3VidGl0bGUgOiB7IHRleHQgOiAncGVyIEhvdXNlaG9sZCBwZXIgWWVhcicgfSxcbiAgICAgICAgICAgIGNvbG9yczogWycjMDA1QzgzJywgJyNFODRBMzYnLCAnI0EzRDY1QycsICcjNEM0QzRDJywgJyMyMjIyMjInXSxcbiAgICAgICAgICAgIHhBeGlzOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydZZWFyIDEnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHlBeGlzOiB7XG4gICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7IHRleHQ6ICdNaWxsaW9uIEJUVS9ZcicgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2NvbHVtbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXJpZXM6IFt7XG4gICAgICAgICAgICAgICAgbmFtZTogJ1NjZW5hcmlvIDEnLFxuICAgICAgICAgICAgICAgIGRhdGE6IFszMy40XVxuICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgbmFtZTogJ1NjZW5hcmlvIDInLFxuICAgICAgICAgICAgICAgIGRhdGE6IFszNC4xXVxuICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgbmFtZTogJ1NjZW5hcmlvIDMnLFxuICAgICAgICAgICAgICAgIGRhdGE6IFszNC45XVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgc2F2ZUNoYXJ0KGNoYXJ0KSB7XG4gICAgICB0aGlzLmNoYXJ0ID0gY2hhcnQ7XG4gICAgfVxuICAgIG9uUG9pbnRTZWxlY3QocG9pbnQpIHtcbiAgICAgIGFsZXJ0KGAke3BvaW50Lnl9IGlzIHNlbGVjdGVkYCk7XG4gICAgfVxuICAgIG9uU2VyaWVzSGlkZShzZXJpZXMpIHtcbiAgICAgIGFsZXJ0KGAke3Nlcmllcy5uYW1lfSBpcyBzZWxlY3RlZGApO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
