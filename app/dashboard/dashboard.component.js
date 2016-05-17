System.register(['@angular/core', './chart-component-1.component', './chart-component-2.component', './chart-component-3.component', './chart-component-4.component', './chart-component-5.component', './chart-component-6.component', './chart-component-7.component', './chart-component-8.component', './chart-component-9.component', './chart-component-10.component', './chart-component-11.component', './chart-component-12.component', './chart-component-13.component', './chart-component-14.component', './chart-component-15.component', './chart-component-16.component', './chart-component-17.component', './chart-component-18.component'], function(exports_1, context_1) {
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
    var core_1, chart_component_1_component_1, chart_component_2_component_1, chart_component_3_component_1, chart_component_4_component_1, chart_component_5_component_1, chart_component_6_component_1, chart_component_7_component_1, chart_component_8_component_1, chart_component_9_component_1, chart_component_10_component_1, chart_component_11_component_1, chart_component_12_component_1, chart_component_13_component_1, chart_component_14_component_1, chart_component_15_component_1, chart_component_16_component_1, chart_component_17_component_1, chart_component_18_component_1;
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
            },
            function (chart_component_9_component_1_1) {
                chart_component_9_component_1 = chart_component_9_component_1_1;
            },
            function (chart_component_10_component_1_1) {
                chart_component_10_component_1 = chart_component_10_component_1_1;
            },
            function (chart_component_11_component_1_1) {
                chart_component_11_component_1 = chart_component_11_component_1_1;
            },
            function (chart_component_12_component_1_1) {
                chart_component_12_component_1 = chart_component_12_component_1_1;
            },
            function (chart_component_13_component_1_1) {
                chart_component_13_component_1 = chart_component_13_component_1_1;
            },
            function (chart_component_14_component_1_1) {
                chart_component_14_component_1 = chart_component_14_component_1_1;
            },
            function (chart_component_15_component_1_1) {
                chart_component_15_component_1 = chart_component_15_component_1_1;
            },
            function (chart_component_16_component_1_1) {
                chart_component_16_component_1 = chart_component_16_component_1_1;
            },
            function (chart_component_17_component_1_1) {
                chart_component_17_component_1 = chart_component_17_component_1_1;
            },
            function (chart_component_18_component_1_1) {
                chart_component_18_component_1 = chart_component_18_component_1_1;
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
                        directives: [chart_component_1_component_1.ChartComponent1, chart_component_2_component_1.ChartComponent2, chart_component_3_component_1.ChartComponent3, chart_component_4_component_1.ChartComponent4, chart_component_5_component_1.ChartComponent5, chart_component_6_component_1.ChartComponent6, chart_component_7_component_1.ChartComponent7, chart_component_8_component_1.ChartComponent8, chart_component_9_component_1.ChartComponent9, chart_component_10_component_1.ChartComponent10, chart_component_11_component_1.ChartComponent11, chart_component_12_component_1.ChartComponent12, chart_component_13_component_1.ChartComponent13, chart_component_14_component_1.ChartComponent14, chart_component_15_component_1.ChartComponent15, chart_component_16_component_1.ChartComponent16, chart_component_17_component_1.ChartComponent17, chart_component_18_component_1.ChartComponent18]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMEJBO2dCQUdFLDRCQUFtQixFQUFjLEVBQVMsUUFBa0I7b0JBQXpDLE9BQUUsR0FBRixFQUFFLENBQVk7b0JBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtvQkFGNUQsYUFBUSxHQUFVLFFBQVEsQ0FBQztvQkFDM0IsU0FBSSxHQUFVLFFBQVEsQ0FBQztvQkFFckIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkQsQ0FBQztnQkFFRCx3Q0FBVyxHQUFYLFVBQVksSUFBVztvQkFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUNyQixzQ0FBc0M7Z0JBQ3hDLENBQUM7Z0JBQ0QsMkNBQWMsR0FBZDtvQkFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN0QixDQUFDO2dCQXBCSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFdBQVcsRUFBQyxnQ0FBZ0M7d0JBQzVDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO3dCQUM1QyxVQUFVLEVBQUUsQ0FBQyw2Q0FBZSxFQUFFLDZDQUFlLEVBQUUsNkNBQWUsRUFBRSw2Q0FBZSxFQUFFLDZDQUFlLEVBQUUsNkNBQWUsRUFBRSw2Q0FBZSxFQUFFLDZDQUFlLEVBQUUsNkNBQWUsRUFBRSwrQ0FBZ0IsRUFBRSwrQ0FBZ0IsRUFBRSwrQ0FBZ0IsRUFBRSwrQ0FBZ0IsRUFBRSwrQ0FBZ0IsRUFBRSwrQ0FBZ0IsRUFBRSwrQ0FBZ0IsRUFBRSwrQ0FBZ0IsRUFBRSwrQ0FBZ0IsQ0FBQztxQkFDeFUsQ0FBQzs7c0NBQUE7Z0JBa0JGLHlCQUFDO1lBQUQsQ0FoQkEsQUFnQkMsSUFBQTtZQWhCRCxtREFnQkMsQ0FBQSIsImZpbGUiOiJkYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBSZW5kZXJlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NoYXJ0Q29tcG9uZW50MX0gZnJvbSAnLi9jaGFydC1jb21wb25lbnQtMS5jb21wb25lbnQnO1xuaW1wb3J0IHtDaGFydENvbXBvbmVudDJ9IGZyb20gJy4vY2hhcnQtY29tcG9uZW50LTIuY29tcG9uZW50JztcbmltcG9ydCB7Q2hhcnRDb21wb25lbnQzfSBmcm9tICcuL2NoYXJ0LWNvbXBvbmVudC0zLmNvbXBvbmVudCc7XG5pbXBvcnQge0NoYXJ0Q29tcG9uZW50NH0gZnJvbSAnLi9jaGFydC1jb21wb25lbnQtNC5jb21wb25lbnQnO1xuaW1wb3J0IHtDaGFydENvbXBvbmVudDV9IGZyb20gJy4vY2hhcnQtY29tcG9uZW50LTUuY29tcG9uZW50JztcbmltcG9ydCB7Q2hhcnRDb21wb25lbnQ2fSBmcm9tICcuL2NoYXJ0LWNvbXBvbmVudC02LmNvbXBvbmVudCc7XG5pbXBvcnQge0NoYXJ0Q29tcG9uZW50N30gZnJvbSAnLi9jaGFydC1jb21wb25lbnQtNy5jb21wb25lbnQnO1xuaW1wb3J0IHtDaGFydENvbXBvbmVudDh9IGZyb20gJy4vY2hhcnQtY29tcG9uZW50LTguY29tcG9uZW50JztcbmltcG9ydCB7Q2hhcnRDb21wb25lbnQ5fSBmcm9tICcuL2NoYXJ0LWNvbXBvbmVudC05LmNvbXBvbmVudCc7XG5pbXBvcnQge0NoYXJ0Q29tcG9uZW50MTB9IGZyb20gJy4vY2hhcnQtY29tcG9uZW50LTEwLmNvbXBvbmVudCc7XG5pbXBvcnQge0NoYXJ0Q29tcG9uZW50MTF9IGZyb20gJy4vY2hhcnQtY29tcG9uZW50LTExLmNvbXBvbmVudCc7XG5pbXBvcnQge0NoYXJ0Q29tcG9uZW50MTJ9IGZyb20gJy4vY2hhcnQtY29tcG9uZW50LTEyLmNvbXBvbmVudCc7XG5pbXBvcnQge0NoYXJ0Q29tcG9uZW50MTN9IGZyb20gJy4vY2hhcnQtY29tcG9uZW50LTEzLmNvbXBvbmVudCc7XG5pbXBvcnQge0NoYXJ0Q29tcG9uZW50MTR9IGZyb20gJy4vY2hhcnQtY29tcG9uZW50LTE0LmNvbXBvbmVudCc7XG5pbXBvcnQge0NoYXJ0Q29tcG9uZW50MTV9IGZyb20gJy4vY2hhcnQtY29tcG9uZW50LTE1LmNvbXBvbmVudCc7XG5pbXBvcnQge0NoYXJ0Q29tcG9uZW50MTZ9IGZyb20gJy4vY2hhcnQtY29tcG9uZW50LTE2LmNvbXBvbmVudCc7XG5pbXBvcnQge0NoYXJ0Q29tcG9uZW50MTd9IGZyb20gJy4vY2hhcnQtY29tcG9uZW50LTE3LmNvbXBvbmVudCc7XG5pbXBvcnQge0NoYXJ0Q29tcG9uZW50MTh9IGZyb20gJy4vY2hhcnQtY29tcG9uZW50LTE4LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDonLi9kZXYvZGFzaGJvYXJkL2Rhc2gtdGVzdC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGV2L2Rhc2hib2FyZC9kYXNoLXRlc3QuY3NzJ10sXG4gIGRpcmVjdGl2ZXM6IFtDaGFydENvbXBvbmVudDEsIENoYXJ0Q29tcG9uZW50MiwgQ2hhcnRDb21wb25lbnQzLCBDaGFydENvbXBvbmVudDQsIENoYXJ0Q29tcG9uZW50NSwgQ2hhcnRDb21wb25lbnQ2LCBDaGFydENvbXBvbmVudDcsIENoYXJ0Q29tcG9uZW50OCwgQ2hhcnRDb21wb25lbnQ5LCBDaGFydENvbXBvbmVudDEwLCBDaGFydENvbXBvbmVudDExLCBDaGFydENvbXBvbmVudDEyLCBDaGFydENvbXBvbmVudDEzLCBDaGFydENvbXBvbmVudDE0LCBDaGFydENvbXBvbmVudDE1LCBDaGFydENvbXBvbmVudDE2LCBDaGFydENvbXBvbmVudDE3LCBDaGFydENvbXBvbmVudDE4XVxufSlcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudCB7XG4gIGNhdGVnb3J5OnN0cmluZyA9ICdSZWdpb24nO1xuICBjT2JqOnN0cmluZyA9ICdSZWdpb24nO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYsIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIpe1xuICAgIHRoaXMuY2xpY2tlZE91dHNpZGUgPSB0aGlzLmNsaWNrZWRPdXRzaWRlLmJpbmQodGhpcyk7XG4gIH1cblxuICBzZXRDYXRlZ29yeShfdmFsOnN0cmluZyl7XG4gICAgdGhpcy5jT2JqID0gX3ZhbDtcbiAgICB0aGlzLmNhdGVnb3J5ID0gX3ZhbDtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG4gIGNsaWNrZWRPdXRzaWRlKCl7XG4gICAgY29uc29sZS5sb2coJ2hlcmUnKTtcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
