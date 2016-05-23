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
    var Workforce1Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_highcharts_1_1) {
                angular2_highcharts_1 = angular2_highcharts_1_1;
            }],
        execute: function() {
            Workforce1Component = (function () {
                function Workforce1Component() {
                    this.options = {
                        chart: { type: 'bar' },
                        title: { text: 'Share of Primary Working Age (25-64) Population' },
                        subtitle: { text: "With Associate's Degree or Higher (2014)" },
                        colors: ['#005C83', '#E84A36', '#A3D65C', '#4C4C4C', '#222222'],
                        xAxis: {
                            categories: ['Raleigh-Durham', 'Austin', 'Colorado Springs', 'Launch2035', 'US', 'Greenville, SC', 'Chattanooga'],
                            title: { text: null }
                        },
                        yAxis: {
                            title: { text: null },
                            labels: {
                                formatter: function () {
                                    return this.value + '%';
                                }
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        plotOptions: {
                            bar: {
                                dataLabels: {
                                    enabled: true,
                                    formatter: function () {
                                        return this.y + '%';
                                    }
                                }
                            }
                        },
                        series: [{
                                name: null,
                                data: [54, 49, 47, 42, 40, 37, 36]
                            }]
                    };
                }
                Workforce1Component.prototype.saveChart = function (chart) {
                    this.chart = chart;
                };
                Workforce1Component.prototype.onPointSelect = function (point) {
                    alert(point.y + " is selected");
                };
                Workforce1Component.prototype.onSeriesHide = function (series) {
                    alert(series.name + " is selected");
                };
                Workforce1Component = __decorate([
                    core_1.Component({
                        selector: 'workforce-1',
                        styles: ["\n      chart {\n        display: block;\n      }\n  "],
                        template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
                        directives: [angular2_highcharts_1.CHART_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Workforce1Component);
                return Workforce1Component;
            }());
            exports_1("Workforce1Component", Workforce1Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC93b3JrZm9yY2Uvd29ya2ZvcmNlLTEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQUdJO29CQUNJLElBQUksQ0FBQyxPQUFPLEdBQUc7d0JBQ1gsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTt3QkFDdkIsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLGlEQUFpRCxFQUFFO3dCQUNwRSxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsMENBQTBDLEVBQUU7d0JBQ2hFLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7d0JBQy9ELEtBQUssRUFBRTs0QkFDSCxVQUFVLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLENBQUM7NEJBQ2pILEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7eUJBQ3hCO3dCQUNELEtBQUssRUFBRTs0QkFDSCxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFOzRCQUNyQixNQUFNLEVBQUU7Z0NBQ0osU0FBUyxFQUFFO29DQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQ0FDOUIsQ0FBQzs2QkFDSjt5QkFDSjt3QkFDRCxNQUFNLEVBQUU7NEJBQ0osT0FBTyxFQUFFLEtBQUs7eUJBQ2pCO3dCQUNELFdBQVcsRUFBRTs0QkFDVCxHQUFHLEVBQUU7Z0NBQ0QsVUFBVSxFQUFFO29DQUNSLE9BQU8sRUFBRSxJQUFJO29DQUNiLFNBQVMsRUFBRTt3Q0FDTCxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7b0NBQzFCLENBQUM7aUNBQ0o7NkJBQ0o7eUJBQ0o7d0JBQ0QsTUFBTSxFQUFFLENBQUM7Z0NBQ0wsSUFBSSxFQUFFLElBQUk7Z0NBQ1YsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDOzZCQUNyQyxDQUFDO3FCQUNMLENBQUM7Z0JBQ04sQ0FBQztnQkFDRCx1Q0FBUyxHQUFULFVBQVUsS0FBSztvQkFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDckIsQ0FBQztnQkFDRCwyQ0FBYSxHQUFiLFVBQWMsS0FBSztvQkFDakIsS0FBSyxDQUFJLEtBQUssQ0FBQyxDQUFDLGlCQUFjLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztnQkFDRCwwQ0FBWSxHQUFaLFVBQWEsTUFBTTtvQkFDakIsS0FBSyxDQUFJLE1BQU0sQ0FBQyxJQUFJLGlCQUFjLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkFqRUw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUMsYUFBYTt3QkFDcEIsTUFBTSxFQUFFLENBQUMsdURBSVYsQ0FBQzt3QkFDRixRQUFRLEVBQUUsNlBBTVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsc0NBQWdCLENBQUM7cUJBQy9CLENBQUM7O3VDQUFBO2dCQW1ERiwwQkFBQztZQUFELENBakRBLEFBaURDLElBQUE7WUFqREQscURBaURDLENBQUEiLCJmaWxlIjoiZGFzaGJvYXJkL3dvcmtmb3JjZS93b3JrZm9yY2UtMS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NIQVJUX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyLWhpZ2hjaGFydHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6J3dvcmtmb3JjZS0xJyxcbiAgICBzdHlsZXM6IFtgXG4gICAgICBjaGFydCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICBgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGNoYXJ0IFtvcHRpb25zXT1cIm9wdGlvbnNcIiAobG9hZCk9XCJzYXZlQ2hhcnQoJGV2ZW50LmNvbnRleHQpXCI+XG4gICAgICAgICAgPHNlcmllcyAoaGlkZSk9XCJvblNlcmllc0hpZGUoJGV2ZW50LmNvbnRleHQpXCI+XG4gICAgICAgICAgICA8cG9pbnQgKHNlbGVjdCk9XCJvblBvaW50U2VsZWN0KCRldmVudC5jb250ZXh0KVwiPjwvcG9pbnQ+XG4gICAgICAgICAgPC9zZXJpZXM+XG4gICAgICAgIDwvY2hhcnQ+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtDSEFSVF9ESVJFQ1RJVkVTXVxufSlcblxuZXhwb3J0IGNsYXNzIFdvcmtmb3JjZTFDb21wb25lbnQge1xuICAgIG9wdGlvbnM6IE9iamVjdDtcbiAgICBjaGFydDogT2JqZWN0O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjaGFydDogIHsgdHlwZTogJ2JhcicgfSxcbiAgICAgICAgICAgIHRpdGxlIDogeyB0ZXh0IDogJ1NoYXJlIG9mIFByaW1hcnkgV29ya2luZyBBZ2UgKDI1LTY0KSBQb3B1bGF0aW9uJyB9LFxuICAgICAgICAgICAgc3VidGl0bGUgOiB7IHRleHQgOiBcIldpdGggQXNzb2NpYXRlJ3MgRGVncmVlIG9yIEhpZ2hlciAoMjAxNClcIiB9LFxuICAgICAgICAgICAgY29sb3JzOiBbJyMwMDVDODMnLCAnI0U4NEEzNicsICcjQTNENjVDJywgJyM0QzRDNEMnLCAnIzIyMjIyMiddLFxuICAgICAgICAgICAgeEF4aXM6IHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbJ1JhbGVpZ2gtRHVyaGFtJywgJ0F1c3RpbicsICdDb2xvcmFkbyBTcHJpbmdzJywgJ0xhdW5jaDIwMzUnLCAnVVMnLCAnR3JlZW52aWxsZSwgU0MnLCAnQ2hhdHRhbm9vZ2EnXSxcbiAgICAgICAgICAgICAgICB0aXRsZTogeyB0ZXh0OiBudWxsIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5QXhpczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiB7IHRleHQ6IG51bGwgfSxcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlICsgJyUnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMueSArICclJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXJpZXM6IFt7XG4gICAgICAgICAgICAgICAgbmFtZTogbnVsbCxcbiAgICAgICAgICAgICAgICBkYXRhOiBbNTQsIDQ5LCA0NywgNDIsIDQwLCAzNywgMzZdXG4gICAgICAgICAgICB9XVxuICAgICAgICB9O1xuICAgIH1cbiAgICBzYXZlQ2hhcnQoY2hhcnQpIHtcbiAgICAgIHRoaXMuY2hhcnQgPSBjaGFydDtcbiAgICB9XG4gICAgb25Qb2ludFNlbGVjdChwb2ludCkge1xuICAgICAgYWxlcnQoYCR7cG9pbnQueX0gaXMgc2VsZWN0ZWRgKTtcbiAgICB9XG4gICAgb25TZXJpZXNIaWRlKHNlcmllcykge1xuICAgICAgYWxlcnQoYCR7c2VyaWVzLm5hbWV9IGlzIHNlbGVjdGVkYCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
