System.register(['@angular/core', '@angular/http', 'angular2-highcharts'], function(exports_1, context_1) {
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
    var core_1, http_1, angular2_highcharts_1;
    var MyHighMapsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (angular2_highcharts_1_1) {
                angular2_highcharts_1 = angular2_highcharts_1_1;
            }],
        execute: function() {
            MyHighMapsComponent = (function () {
                function MyHighMapsComponent(jsonp) {
                    var _this = this;
                    jsonp.request('./dev/warehouse/tricounty.json').subscribe(function (res) {
                        console.log(res);
                        console.log(res.json);
                        _this.options = {
                            title: { text: 'Alabama Counties' },
                            series: [{
                                    name: 'Launch 2035',
                                    data: res.json(),
                                    states: {
                                        hover: {
                                            color: '#BADA55'
                                        }
                                    },
                                    dataLabels: {
                                        enabled: true
                                    }
                                }]
                        };
                    });
                }
                MyHighMapsComponent = __decorate([
                    core_1.Component({
                        selector: 'my-highmaps',
                        styles: ["\n      chart {\n        display: block;\n      }\n  "],
                        directives: [angular2_highcharts_1.CHART_DIRECTIVES],
                        template: "\n        <chart type=\"Map\" [options]=\"options\"></chart>",
                        providers: [http_1.JSONP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [http_1.Jsonp])
                ], MyHighMapsComponent);
                return MyHighMapsComponent;
            }());
            exports_1("MyHighMapsComponent", MyHighMapsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhcmVob3VzZS9oaWdobWFwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBR0UsNkJBQVksS0FBYTtvQkFIM0IsaUJBc0NDO29CQWxDTyxLQUFLLENBQUMsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRzt3QkFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDdEIsS0FBSSxDQUFDLE9BQU8sR0FBRzs0QkFDYixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsa0JBQWtCLEVBQUU7NEJBQy9CLE1BQU0sRUFBRyxDQUFDO29DQUNOLElBQUksRUFBRyxhQUFhO29DQUNwQixJQUFJLEVBQUcsR0FBRyxDQUFDLElBQUksRUFBRTtvQ0FDakIsTUFBTSxFQUFFO3dDQUNKLEtBQUssRUFBRTs0Q0FDSCxLQUFLLEVBQUUsU0FBUzt5Q0FDbkI7cUNBQ0o7b0NBQ0QsVUFBVSxFQUFFO3dDQUNSLE9BQU8sRUFBRSxJQUFJO3FDQUNoQjtpQ0FDUixDQUFDO3lCQUNMLENBQUM7b0JBQ04sQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFwQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsTUFBTSxFQUFFLENBQUMsdURBSVIsQ0FBQzt3QkFDRixVQUFVLEVBQUMsQ0FBQyxzQ0FBZ0IsQ0FBQzt3QkFDN0IsUUFBUSxFQUFFLDhEQUMyQzt3QkFDckQsU0FBUyxFQUFDLENBQUMsc0JBQWUsQ0FBQztxQkFDNUIsQ0FBQzs7dUNBQUE7Z0JBd0NGLDBCQUFDO1lBQUQsQ0F0Q0EsQUFzQ0MsSUFBQTtZQXRDRCxxREFzQ0MsQ0FBQSIsImZpbGUiOiJ3YXJlaG91c2UvaGlnaG1hcHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtKc29ucCwgSlNPTlBfUFJPVklERVJTfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7Q0hBUlRfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjItaGlnaGNoYXJ0cyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LWhpZ2htYXBzJyxcbiAgc3R5bGVzOiBbYFxuICAgICAgY2hhcnQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgYF0sXG4gIGRpcmVjdGl2ZXM6W0NIQVJUX0RJUkVDVElWRVNdLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8Y2hhcnQgdHlwZT1cIk1hcFwiIFtvcHRpb25zXT1cIm9wdGlvbnNcIj48L2NoYXJ0PmAsXG4gIHByb3ZpZGVyczpbSlNPTlBfUFJPVklERVJTXVxufSlcblxuZXhwb3J0IGNsYXNzIE15SGlnaE1hcHNDb21wb25lbnQge1xuICBvcHRpb25zOiBPYmplY3Q7XG4gIGNoYXJ0OiBPYmplY3Q7XG4gIGNvbnN0cnVjdG9yKGpzb25wIDogSnNvbnApIHtcbiAgICAgICAganNvbnAucmVxdWVzdCgnLi9kZXYvd2FyZWhvdXNlL3RyaWNvdW50eS5qc29uJykuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5qc29uKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgdGl0bGUgOiB7IHRleHQgOiAnQWxhYmFtYSBDb3VudGllcycgfSxcbiAgICAgICAgICAgICAgICAgICAgc2VyaWVzIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgOiAnTGF1bmNoIDIwMzUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA6IHJlcy5qc29uKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Zlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNCQURBNTUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cbiAgICAvLyBzYXZlQ2hhcnQoY2hhcnQpIHtcbiAgICAvLyAgIHRoaXMuY2hhcnQgPSBjaGFydDtcbiAgICAvLyB9XG4gICAgLy8gb25Qb2ludFNlbGVjdChwb2ludCkge1xuICAgIC8vICAgYWxlcnQoYCR7cG9pbnQueX0gaXMgc2VsZWN0ZWRgKTtcbiAgICAvLyB9XG4gICAgLy8gb25TZXJpZXNIaWRlKHNlcmllcykge1xuICAgIC8vICAgYWxlcnQoYCR7c2VyaWVzLm5hbWV9IGlzIHNlbGVjdGVkYCk7XG4gICAgLy8gfVxuXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
