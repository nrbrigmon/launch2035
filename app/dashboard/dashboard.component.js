System.register(['@angular/core', './chart-component-1.component', './chart-component-2.component', './chart-component-3.component', './chart-component-4.component', './chart-component-5.component', './chart-component-6.component'], function(exports_1, context_1) {
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
    var core_1, chart_component_1_component_1, chart_component_2_component_1, chart_component_3_component_1, chart_component_4_component_1, chart_component_5_component_1, chart_component_6_component_1;
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
                        directives: [chart_component_1_component_1.ChartComponent1, chart_component_2_component_1.ChartComponent2, chart_component_3_component_1.ChartComponent3, chart_component_4_component_1.ChartComponent4, chart_component_5_component_1.ChartComponent5, chart_component_6_component_1.ChartComponent6]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBR0UsNEJBQW1CLEVBQWMsRUFBUyxRQUFrQjtvQkFBekMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtvQkFBUyxhQUFRLEdBQVIsUUFBUSxDQUFVO29CQUY1RCxhQUFRLEdBQVUsUUFBUSxDQUFDO29CQUMzQixTQUFJLEdBQVUsUUFBUSxDQUFDO29CQUVyQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2RCxDQUFDO2dCQUVELHdDQUFXLEdBQVgsVUFBWSxJQUFXO29CQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3JCLHNDQUFzQztnQkFDeEMsQ0FBQztnQkFDRCwyQ0FBYyxHQUFkO29CQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3RCLENBQUM7Z0JBcEJIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsV0FBVyxFQUFDLGdDQUFnQzt3QkFDNUMsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7d0JBQzVDLFVBQVUsRUFBRSxDQUFDLDZDQUFlLEVBQUUsNkNBQWUsRUFBRSw2Q0FBZSxFQUFFLDZDQUFlLEVBQUUsNkNBQWUsRUFBRSw2Q0FBZSxDQUFDO3FCQUNuSCxDQUFDOztzQ0FBQTtnQkFrQkYseUJBQUM7WUFBRCxDQWhCQSxBQWdCQyxJQUFBO1lBaEJELG1EQWdCQyxDQUFBIiwiZmlsZSI6ImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2hhcnRDb21wb25lbnQxfSBmcm9tICcuL2NoYXJ0LWNvbXBvbmVudC0xLmNvbXBvbmVudCc7XG5pbXBvcnQge0NoYXJ0Q29tcG9uZW50Mn0gZnJvbSAnLi9jaGFydC1jb21wb25lbnQtMi5jb21wb25lbnQnO1xuaW1wb3J0IHtDaGFydENvbXBvbmVudDN9IGZyb20gJy4vY2hhcnQtY29tcG9uZW50LTMuY29tcG9uZW50JztcbmltcG9ydCB7Q2hhcnRDb21wb25lbnQ0fSBmcm9tICcuL2NoYXJ0LWNvbXBvbmVudC00LmNvbXBvbmVudCc7XG5pbXBvcnQge0NoYXJ0Q29tcG9uZW50NX0gZnJvbSAnLi9jaGFydC1jb21wb25lbnQtNS5jb21wb25lbnQnO1xuaW1wb3J0IHtDaGFydENvbXBvbmVudDZ9IGZyb20gJy4vY2hhcnQtY29tcG9uZW50LTYuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOicuL2Rldi9kYXNoYm9hcmQvZGFzaC10ZXN0Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kZXYvZGFzaGJvYXJkL2Rhc2gtdGVzdC5jc3MnXSxcbiAgZGlyZWN0aXZlczogW0NoYXJ0Q29tcG9uZW50MSwgQ2hhcnRDb21wb25lbnQyLCBDaGFydENvbXBvbmVudDMsIENoYXJ0Q29tcG9uZW50NCwgQ2hhcnRDb21wb25lbnQ1LCBDaGFydENvbXBvbmVudDZdXG59KVxuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IHtcbiAgY2F0ZWdvcnk6c3RyaW5nID0gJ1JlZ2lvbic7XG4gIGNPYmo6c3RyaW5nID0gJ1JlZ2lvbic7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZiwgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcil7XG4gICAgdGhpcy5jbGlja2VkT3V0c2lkZSA9IHRoaXMuY2xpY2tlZE91dHNpZGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNldENhdGVnb3J5KF92YWw6c3RyaW5nKXtcbiAgICB0aGlzLmNPYmogPSBfdmFsO1xuICAgIHRoaXMuY2F0ZWdvcnkgPSBfdmFsO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gIH1cbiAgY2xpY2tlZE91dHNpZGUoKXtcbiAgICBjb25zb2xlLmxvZygnaGVyZScpO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
