System.register(['@angular/core', './chart-component-1.component', './chart-component-2.component', './chart-component-3.component', './chart-component-4.component', './chart-component-5.component', './workforce/workforce-1.component', './workforce/workforce-2.component', './workforce/workforce-3.component', './workforce/workforce-4.component', './entreprenr/entreprenr-1.component', './entreprenr/entreprenr-2.component', './entreprenr/entreprenr-3.component', './entreprenr/entreprenr-4.component', './land-use/chart-component-7.component', './land-use/chart-component-8.component', './land-use/chart-component-9.component', './land-use/chart-component-10.component', './land-use/chart-component-11.component', './land-use/chart-component-12.component', './land-use/chart-component-13.component', './land-use/chart-component-14.component', './land-use/chart-component-15.component', './land-use/chart-component-16.component', './land-use/chart-component-17.component', './land-use/chart-component-18.component'], function(exports_1, context_1) {
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
    var core_1, chart_component_1_component_1, chart_component_2_component_1, chart_component_3_component_1, chart_component_4_component_1, chart_component_5_component_1, workforce_1_component_1, workforce_2_component_1, workforce_3_component_1, workforce_4_component_1, entreprenr_1_component_1, entreprenr_2_component_1, entreprenr_3_component_1, entreprenr_4_component_1, chart_component_7_component_1, chart_component_8_component_1, chart_component_9_component_1, chart_component_10_component_1, chart_component_11_component_1, chart_component_12_component_1, chart_component_13_component_1, chart_component_14_component_1, chart_component_15_component_1, chart_component_16_component_1, chart_component_17_component_1, chart_component_18_component_1;
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
            function (workforce_1_component_1_1) {
                workforce_1_component_1 = workforce_1_component_1_1;
            },
            function (workforce_2_component_1_1) {
                workforce_2_component_1 = workforce_2_component_1_1;
            },
            function (workforce_3_component_1_1) {
                workforce_3_component_1 = workforce_3_component_1_1;
            },
            function (workforce_4_component_1_1) {
                workforce_4_component_1 = workforce_4_component_1_1;
            },
            function (entreprenr_1_component_1_1) {
                entreprenr_1_component_1 = entreprenr_1_component_1_1;
            },
            function (entreprenr_2_component_1_1) {
                entreprenr_2_component_1 = entreprenr_2_component_1_1;
            },
            function (entreprenr_3_component_1_1) {
                entreprenr_3_component_1 = entreprenr_3_component_1_1;
            },
            function (entreprenr_4_component_1_1) {
                entreprenr_4_component_1 = entreprenr_4_component_1_1;
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
                    this.category = 'Home'; //category will help set the HTML template directive
                    this.cObj = 'Home'; //cObj will help set an active class for the navbar
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
                        directives: [chart_component_1_component_1.ChartComponent1, chart_component_2_component_1.ChartComponent2, chart_component_3_component_1.ChartComponent3, chart_component_4_component_1.ChartComponent4, chart_component_5_component_1.ChartComponent5, workforce_1_component_1.Workforce1Component, workforce_2_component_1.Workforce2Component, workforce_3_component_1.Workforce3Component, workforce_4_component_1.Workforce4Component, entreprenr_1_component_1.Entre1Component, entreprenr_2_component_1.Entre2Component, entreprenr_3_component_1.Entre3Component, entreprenr_4_component_1.Entre4Component, chart_component_7_component_1.ChartComponent7, chart_component_8_component_1.ChartComponent8, chart_component_9_component_1.ChartComponent9, chart_component_10_component_1.ChartComponent10, chart_component_11_component_1.ChartComponent11, chart_component_12_component_1.ChartComponent12, chart_component_13_component_1.ChartComponent13, chart_component_14_component_1.ChartComponent14, chart_component_15_component_1.ChartComponent15, chart_component_16_component_1.ChartComponent16, chart_component_17_component_1.ChartComponent17, chart_component_18_component_1.ChartComponent18]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map