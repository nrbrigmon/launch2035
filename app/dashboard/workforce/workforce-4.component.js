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
    var Workforce4Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_highcharts_1_1) {
                angular2_highcharts_1 = angular2_highcharts_1_1;
            }],
        execute: function() {
            Workforce4Component = (function () {
                function Workforce4Component() {
                    this.options = {
                        chart: { type: 'bar' },
                        title: { text: 'Skilled Technology Jobs' },
                        subtitle: { text: "As Share of Total Employment (2016)" },
                        colors: ['#4C4C4C', '#222222'],
                        xAxis: {
                            categories: ['Launch2035', 'Austin', 'Raleigh-Durham', 'Colorado Springs', 'US', 'Greenville, SC', 'Chattanooga'],
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
                                data: [7.6, 6.9, 6.1, 4.8, 3.4, 2.5, 2.1]
                            }]
                    };
                }
                Workforce4Component.prototype.saveChart = function (chart) {
                    this.chart = chart;
                };
                Workforce4Component.prototype.onPointSelect = function (point) {
                    alert(point.y + " is selected");
                };
                Workforce4Component.prototype.onSeriesHide = function (series) {
                    alert(series.name + " is selected");
                };
                Workforce4Component = __decorate([
                    core_1.Component({
                        selector: 'workforce-4',
                        styles: ["\n      chart {\n        display: block;\n      }\n  "],
                        template: "\n        <chart [options]=\"options\" (load)=\"saveChart($event.context)\">\n          <series (hide)=\"onSeriesHide($event.context)\">\n            <point (select)=\"onPointSelect($event.context)\"></point>\n          </series>\n        </chart>\n  ",
                        directives: [angular2_highcharts_1.CHART_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Workforce4Component);
                return Workforce4Component;
            }());
            exports_1("Workforce4Component", Workforce4Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC93b3JrZm9yY2Uvd29ya2ZvcmNlLTQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQUdJO29CQUNJLElBQUksQ0FBQyxPQUFPLEdBQUc7d0JBQ1gsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTt3QkFDdkIsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLHlCQUF5QixFQUFFO3dCQUM1QyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcscUNBQXFDLEVBQUU7d0JBQzNELE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUM7d0JBQzlCLEtBQUssRUFBRTs0QkFDSCxVQUFVLEVBQUUsQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLENBQUM7NEJBQ2pILEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7eUJBQ3hCO3dCQUNELEtBQUssRUFBRTs0QkFDSCxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFOzRCQUNyQixNQUFNLEVBQUU7Z0NBQ0osU0FBUyxFQUFFO29DQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQ0FDOUIsQ0FBQzs2QkFDSjt5QkFDSjt3QkFDRCxNQUFNLEVBQUU7NEJBQ0osT0FBTyxFQUFFLEtBQUs7eUJBQ2pCO3dCQUNELFdBQVcsRUFBRTs0QkFDVCxHQUFHLEVBQUU7Z0NBQ0QsVUFBVSxFQUFFO29DQUNSLE9BQU8sRUFBRSxJQUFJO29DQUNiLFNBQVMsRUFBRTt3Q0FDTCxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7b0NBQzFCLENBQUM7aUNBQ0o7NkJBQ0o7eUJBQ0o7d0JBQ0QsTUFBTSxFQUFFLENBQUM7Z0NBQ0wsSUFBSSxFQUFFLElBQUk7Z0NBQ1YsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDOzZCQUM1QyxDQUFDO3FCQUNMLENBQUM7Z0JBQ04sQ0FBQztnQkFDRCx1Q0FBUyxHQUFULFVBQVUsS0FBSztvQkFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDckIsQ0FBQztnQkFDRCwyQ0FBYSxHQUFiLFVBQWMsS0FBSztvQkFDakIsS0FBSyxDQUFJLEtBQUssQ0FBQyxDQUFDLGlCQUFjLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztnQkFDRCwwQ0FBWSxHQUFaLFVBQWEsTUFBTTtvQkFDakIsS0FBSyxDQUFJLE1BQU0sQ0FBQyxJQUFJLGlCQUFjLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkFqRUw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUMsYUFBYTt3QkFDcEIsTUFBTSxFQUFFLENBQUMsdURBSVYsQ0FBQzt3QkFDRixRQUFRLEVBQUUsNlBBTVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsc0NBQWdCLENBQUM7cUJBQy9CLENBQUM7O3VDQUFBO2dCQW1ERiwwQkFBQztZQUFELENBakRBLEFBaURDLElBQUE7WUFqREQscURBaURDLENBQUEiLCJmaWxlIjoiZGFzaGJvYXJkL3dvcmtmb3JjZS93b3JrZm9yY2UtNC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NIQVJUX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyLWhpZ2hjaGFydHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6J3dvcmtmb3JjZS00JyxcbiAgICBzdHlsZXM6IFtgXG4gICAgICBjaGFydCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICBgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGNoYXJ0IFtvcHRpb25zXT1cIm9wdGlvbnNcIiAobG9hZCk9XCJzYXZlQ2hhcnQoJGV2ZW50LmNvbnRleHQpXCI+XG4gICAgICAgICAgPHNlcmllcyAoaGlkZSk9XCJvblNlcmllc0hpZGUoJGV2ZW50LmNvbnRleHQpXCI+XG4gICAgICAgICAgICA8cG9pbnQgKHNlbGVjdCk9XCJvblBvaW50U2VsZWN0KCRldmVudC5jb250ZXh0KVwiPjwvcG9pbnQ+XG4gICAgICAgICAgPC9zZXJpZXM+XG4gICAgICAgIDwvY2hhcnQ+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtDSEFSVF9ESVJFQ1RJVkVTXVxufSlcblxuZXhwb3J0IGNsYXNzIFdvcmtmb3JjZTRDb21wb25lbnQge1xuICAgIG9wdGlvbnM6IE9iamVjdDtcbiAgICBjaGFydDogT2JqZWN0O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjaGFydDogIHsgdHlwZTogJ2JhcicgfSxcbiAgICAgICAgICAgIHRpdGxlIDogeyB0ZXh0IDogJ1NraWxsZWQgVGVjaG5vbG9neSBKb2JzJyB9LFxuICAgICAgICAgICAgc3VidGl0bGUgOiB7IHRleHQgOiBcIkFzIFNoYXJlIG9mIFRvdGFsIEVtcGxveW1lbnQgKDIwMTYpXCIgfSxcbiAgICAgICAgICAgIGNvbG9yczogWycjNEM0QzRDJywgJyMyMjIyMjInXSxcbiAgICAgICAgICAgIHhBeGlzOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydMYXVuY2gyMDM1JywgJ0F1c3RpbicsICdSYWxlaWdoLUR1cmhhbScsICdDb2xvcmFkbyBTcHJpbmdzJywgJ1VTJywgJ0dyZWVudmlsbGUsIFNDJywgJ0NoYXR0YW5vb2dhJ10sXG4gICAgICAgICAgICAgICAgdGl0bGU6IHsgdGV4dDogbnVsbCB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeUF4aXM6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogeyB0ZXh0OiBudWxsIH0sXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSArICclJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgYmFyOiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnkgKyAnJSc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICAgIG5hbWU6IG51bGwsXG4gICAgICAgICAgICAgICAgZGF0YTogWzcuNiwgNi45LCA2LjEsIDQuOCwgMy40LCAyLjUsIDIuMV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH07XG4gICAgfVxuICAgIHNhdmVDaGFydChjaGFydCkge1xuICAgICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xuICAgIH1cbiAgICBvblBvaW50U2VsZWN0KHBvaW50KSB7XG4gICAgICBhbGVydChgJHtwb2ludC55fSBpcyBzZWxlY3RlZGApO1xuICAgIH1cbiAgICBvblNlcmllc0hpZGUoc2VyaWVzKSB7XG4gICAgICBhbGVydChgJHtzZXJpZXMubmFtZX0gaXMgc2VsZWN0ZWRgKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
