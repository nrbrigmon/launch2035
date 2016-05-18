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
    var ChartComponent10;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_highcharts_1_1) {
                angular2_highcharts_1 = angular2_highcharts_1_1;
            }],
        execute: function() {
            ChartComponent10 = (function () {
                function ChartComponent10() {
                    this.options = {
                        title: { text: 'Jobs - Housing Balance' },
                        subtitle: { text: 'Ratio of Jobs:Housing' },
                        colors: ['#005C83', '#E84A36', '#A3D65C', '#4C4C4C', '#222222'],
                        xAxis: {
                            categories: ['Year 1']
                        },
                        yAxis: {
                            min: 0,
                            title: { text: ' ' }
                        },
                        chart: {
                            type: 'column'
                        },
                        series: [{
                                name: 'Scenario 1',
                                data: [0.1]
                            }, {
                                name: 'Scenario 2',
                                data: [0.4]
                            }, {
                                name: 'Scenario 3',
                                data: [0.7]
                            }]
                    };
                }
                ChartComponent10.prototype.saveChart = function (chart) {
                    this.chart = chart;
                };
                ChartComponent10.prototype.onPointSelect = function (point) {
                    alert(point.y + " is selected");
                };
                ChartComponent10.prototype.onSeriesHide = function (series) {
                    alert(series.name + " is selected");
                };
                ChartComponent10 = __decorate([
                    core_1.Component({
                        selector: 'chart-component-10',
                        styles: ["\n      chart {\n        display: block;\n      }\n  "],
                        template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
                        directives: [angular2_highcharts_1.CHART_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChartComponent10);
                return ChartComponent10;
            }());
            exports_1("ChartComponent10", ChartComponent10);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9jaGFydC1jb21wb25lbnQtMTAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQUdFO29CQUNNLElBQUksQ0FBQyxPQUFPLEdBQUc7d0JBQ1gsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLHdCQUF3QixFQUFFO3dCQUMzQyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsdUJBQXVCLEVBQUU7d0JBQzdDLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7d0JBQy9ELEtBQUssRUFBRTs0QkFDSCxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUM7eUJBQ3pCO3dCQUNELEtBQUssRUFBRTs0QkFDSCxHQUFHLEVBQUUsQ0FBQzs0QkFDTixLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO3lCQUN2Qjt3QkFDRCxLQUFLLEVBQUU7NEJBQ0gsSUFBSSxFQUFFLFFBQVE7eUJBQ2pCO3dCQUNELE1BQU0sRUFBRSxDQUFDO2dDQUNMLElBQUksRUFBRSxZQUFZO2dDQUNsQixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7NkJBQ2QsRUFBQztnQ0FDRSxJQUFJLEVBQUUsWUFBWTtnQ0FDbEIsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDOzZCQUNkLEVBQUM7Z0NBQ0UsSUFBSSxFQUFFLFlBQVk7Z0NBQ2xCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQzs2QkFDZCxDQUFDO3FCQUNMLENBQUM7Z0JBQ04sQ0FBQztnQkFDRCxvQ0FBUyxHQUFULFVBQVUsS0FBSztvQkFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDckIsQ0FBQztnQkFDRCx3Q0FBYSxHQUFiLFVBQWMsS0FBSztvQkFDakIsS0FBSyxDQUFJLEtBQUssQ0FBQyxDQUFDLGlCQUFjLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztnQkFDRCx1Q0FBWSxHQUFaLFVBQWEsTUFBTTtvQkFDakIsS0FBSyxDQUFJLE1BQU0sQ0FBQyxJQUFJLGlCQUFjLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkF2REw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUMsb0JBQW9CO3dCQUMzQixNQUFNLEVBQUUsQ0FBQyx1REFJVixDQUFDO3dCQUNGLFFBQVEsRUFBRSw2UEFNVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxzQ0FBZ0IsQ0FBQztxQkFDL0IsQ0FBQzs7b0NBQUE7Z0JBeUNGLHVCQUFDO1lBQUQsQ0F2Q0EsQUF1Q0MsSUFBQTtZQXZDRCwrQ0F1Q0MsQ0FBQSIsImZpbGUiOiJkYXNoYm9hcmQvY2hhcnQtY29tcG9uZW50LTEwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q0hBUlRfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjItaGlnaGNoYXJ0cyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjonY2hhcnQtY29tcG9uZW50LTEwJyxcbiAgICBzdHlsZXM6IFtgXG4gICAgICBjaGFydCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICBgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGNoYXJ0IFtvcHRpb25zXT1cIm9wdGlvbnNcIiAobG9hZCk9XCJzYXZlQ2hhcnQoJGV2ZW50LmNvbnRleHQpXCI+XG4gICAgICAgICAgPHNlcmllcyAoaGlkZSk9XCJvblNlcmllc0hpZGUoJGV2ZW50LmNvbnRleHQpXCI+XG4gICAgICAgICAgICA8cG9pbnQgKHNlbGVjdCk9XCJvblBvaW50U2VsZWN0KCRldmVudC5jb250ZXh0KVwiPjwvcG9pbnQ+XG4gICAgICAgICAgPC9zZXJpZXM+XG4gICAgICAgIDwvY2hhcnQ+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtDSEFSVF9ESVJFQ1RJVkVTXVxufSlcblxuZXhwb3J0IGNsYXNzIENoYXJ0Q29tcG9uZW50MTAge1xuICBvcHRpb25zOiBPYmplY3Q7XG4gIGNoYXJ0OiBPYmplY3Q7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZSA6IHsgdGV4dCA6ICdKb2JzIC0gSG91c2luZyBCYWxhbmNlJyB9LFxuICAgICAgICAgICAgc3VidGl0bGUgOiB7IHRleHQgOiAnUmF0aW8gb2YgSm9iczpIb3VzaW5nJyB9LFxuICAgICAgICAgICAgY29sb3JzOiBbJyMwMDVDODMnLCAnI0U4NEEzNicsICcjQTNENjVDJywgJyM0QzRDNEMnLCAnIzIyMjIyMiddLFxuICAgICAgICAgICAgeEF4aXM6IHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbJ1llYXIgMSddXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeUF4aXM6IHtcbiAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHsgdGV4dDogJyAnIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdjb2x1bW4nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdTY2VuYXJpbyAxJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBbMC4xXVxuICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgbmFtZTogJ1NjZW5hcmlvIDInLFxuICAgICAgICAgICAgICAgIGRhdGE6IFswLjRdXG4gICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnU2NlbmFyaW8gMycsXG4gICAgICAgICAgICAgICAgZGF0YTogWzAuN11cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH07XG4gICAgfVxuICAgIHNhdmVDaGFydChjaGFydCkge1xuICAgICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xuICAgIH1cbiAgICBvblBvaW50U2VsZWN0KHBvaW50KSB7XG4gICAgICBhbGVydChgJHtwb2ludC55fSBpcyBzZWxlY3RlZGApO1xuICAgIH1cbiAgICBvblNlcmllc0hpZGUoc2VyaWVzKSB7XG4gICAgICBhbGVydChgJHtzZXJpZXMubmFtZX0gaXMgc2VsZWN0ZWRgKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
