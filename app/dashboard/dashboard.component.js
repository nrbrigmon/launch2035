System.register(['@angular/core', './chart-component-1.component', './chart-component-2.component', './chart-component-3.component', './chart-component-4.component', './chart-component-5.component', './chart-component-6.component', './chart-component-7.component', './chart-component-8.component'], function(exports_1, context_1) {
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
    var core_1, chart_component_1_component_1, chart_component_2_component_1, chart_component_3_component_1, chart_component_4_component_1, chart_component_5_component_1, chart_component_6_component_1, chart_component_7_component_1, chart_component_8_component_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (chart_component_1_component_1_1) {
                chart_component_1_component_1 = chart_component_1_component_1_1;
            },
            function (chart_component_2_component_1_1) {
                chart_component_2_component_1 = chart_component_2_component_1_1;
            },
            function (chart_component_3_component_1_1) {
                chart_component_3_component_1 = chart_component_3_component_1_1;
            },
            function (chart_component_4_component_1_1) {
                chart_component_4_component_1 = chart_component_4_component_1_1;
            },
            function (chart_component_5_component_1_1) {
                chart_component_5_component_1 = chart_component_5_component_1_1;
            },
            function (chart_component_6_component_1_1) {
                chart_component_6_component_1 = chart_component_6_component_1_1;
            },
            function (chart_component_7_component_1_1) {
                chart_component_7_component_1 = chart_component_7_component_1_1;
            },
            function (chart_component_8_component_1_1) {
                chart_component_8_component_1 = chart_component_8_component_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(el, renderer) {
                    this.el = el;
                    this.renderer = renderer;
                    this.category = 'Region';
                    this.cObj = 'Region';
                    this.clickedOutside = this.clickedOutside.bind(this);
                }
                DashboardComponent.prototype.setCategory = function (_val) {
                    this.cObj = _val;
                    this.category = _val;
                    // console.log(this.el.nativeElement);
                };
                DashboardComponent.prototype.clickedOutside = function () {
                    console.log('here');
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        templateUrl: './dev/dashboard/dash-test.html',
                        styleUrls: ['./dev/dashboard/dash-test.css'],
                        directives: [chart_component_1_component_1.ChartComponent1, chart_component_2_component_1.ChartComponent2, chart_component_3_component_1.ChartComponent3, chart_component_4_component_1.ChartComponent4, chart_component_5_component_1.ChartComponent5, chart_component_6_component_1.ChartComponent6, chart_component_7_component_1.ChartComponent7, chart_component_8_component_1.ChartComponent8]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JBO2dCQUdFLDRCQUFtQixFQUFjLEVBQVMsUUFBa0I7b0JBQXpDLE9BQUUsR0FBRixFQUFFLENBQVk7b0JBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtvQkFGNUQsYUFBUSxHQUFVLFFBQVEsQ0FBQztvQkFDM0IsU0FBSSxHQUFVLFFBQVEsQ0FBQztvQkFFckIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkQsQ0FBQztnQkFFRCx3Q0FBVyxHQUFYLFVBQVksSUFBVztvQkFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUNyQixzQ0FBc0M7Z0JBQ3hDLENBQUM7Z0JBQ0QsMkNBQWMsR0FBZDtvQkFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN0QixDQUFDO2dCQXBCSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFdBQVcsRUFBQyxnQ0FBZ0M7d0JBQzVDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO3dCQUM1QyxVQUFVLEVBQUUsQ0FBQyw2Q0FBZSxFQUFFLDZDQUFlLEVBQUUsNkNBQWUsRUFBRSw2Q0FBZSxFQUFFLDZDQUFlLEVBQUUsNkNBQWUsRUFBRSw2Q0FBZSxFQUFFLDZDQUFlLENBQUM7cUJBQ3JKLENBQUM7O3NDQUFBO2dCQWtCRix5QkFBQztZQUFELENBaEJBLEFBZ0JDLElBQUE7WUFoQkQsbURBZ0JDLENBQUEiLCJmaWxlIjoiZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgUmVuZGVyZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDaGFydENvbXBvbmVudDF9IGZyb20gJy4vY2hhcnQtY29tcG9uZW50LTEuY29tcG9uZW50JztcbmltcG9ydCB7Q2hhcnRDb21wb25lbnQyfSBmcm9tICcuL2NoYXJ0LWNvbXBvbmVudC0yLmNvbXBvbmVudCc7XG5pbXBvcnQge0NoYXJ0Q29tcG9uZW50M30gZnJvbSAnLi9jaGFydC1jb21wb25lbnQtMy5jb21wb25lbnQnO1xuaW1wb3J0IHtDaGFydENvbXBvbmVudDR9IGZyb20gJy4vY2hhcnQtY29tcG9uZW50LTQuY29tcG9uZW50JztcbmltcG9ydCB7Q2hhcnRDb21wb25lbnQ1fSBmcm9tICcuL2NoYXJ0LWNvbXBvbmVudC01LmNvbXBvbmVudCc7XG5pbXBvcnQge0NoYXJ0Q29tcG9uZW50Nn0gZnJvbSAnLi9jaGFydC1jb21wb25lbnQtNi5jb21wb25lbnQnO1xuaW1wb3J0IHtDaGFydENvbXBvbmVudDd9IGZyb20gJy4vY2hhcnQtY29tcG9uZW50LTcuY29tcG9uZW50JztcbmltcG9ydCB7Q2hhcnRDb21wb25lbnQ4fSBmcm9tICcuL2NoYXJ0LWNvbXBvbmVudC04LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDonLi9kZXYvZGFzaGJvYXJkL2Rhc2gtdGVzdC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGV2L2Rhc2hib2FyZC9kYXNoLXRlc3QuY3NzJ10sXG4gIGRpcmVjdGl2ZXM6IFtDaGFydENvbXBvbmVudDEsIENoYXJ0Q29tcG9uZW50MiwgQ2hhcnRDb21wb25lbnQzLCBDaGFydENvbXBvbmVudDQsIENoYXJ0Q29tcG9uZW50NSwgQ2hhcnRDb21wb25lbnQ2LCBDaGFydENvbXBvbmVudDcsIENoYXJ0Q29tcG9uZW50OF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQge1xuICBjYXRlZ29yeTpzdHJpbmcgPSAnUmVnaW9uJztcbiAgY09iajpzdHJpbmcgPSAnUmVnaW9uJztcbiAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLCBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyKXtcbiAgICB0aGlzLmNsaWNrZWRPdXRzaWRlID0gdGhpcy5jbGlja2VkT3V0c2lkZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2V0Q2F0ZWdvcnkoX3ZhbDpzdHJpbmcpe1xuICAgIHRoaXMuY09iaiA9IF92YWw7XG4gICAgdGhpcy5jYXRlZ29yeSA9IF92YWw7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcbiAgfVxuICBjbGlja2VkT3V0c2lkZSgpe1xuICAgIGNvbnNvbGUubG9nKCdoZXJlJyk7XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
