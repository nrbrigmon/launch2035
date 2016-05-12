System.register(["@angular/core", "@angular/router"], function(exports_1, context_1) {
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
    var core_1, router_1;
    var Route3Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Route3Component = (function () {
                function Route3Component(routeSegment) {
                    this.routeSegment = routeSegment;
                }
                Route3Component.prototype.ngOnInit = function () {
                    this.param = this.routeSegment.getParam('id');
                };
                Route3Component = __decorate([
                    core_1.Component({
                        selector: 'my-route3',
                        template: "\n        <p>This is route 3. No subrouting, has parameters</p>\n        <div>Passed parameters: {{param}}</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteSegment])
                ], Route3Component);
                return Route3Component;
            }());
            exports_1("Route3Component", Route3Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlci9yb3V0ZTMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBWUE7Z0JBR0kseUJBQW9CLFlBQTBCO29CQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztnQkFBRyxDQUFDO2dCQUVsRCxrQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xELENBQUM7Z0JBZEw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsUUFBUSxFQUFFLHdIQUdUO3FCQUNKLENBQUM7O21DQUFBO2dCQVNGLHNCQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFSRCw2Q0FRQyxDQUFBIiwiZmlsZSI6InJvdXRlci9yb3V0ZTMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9uQWN0aXZhdGUsIFJvdXRlU2VnbWVudCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7T25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZVBhcmFtc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuIFxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1yb3V0ZTMnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxwPlRoaXMgaXMgcm91dGUgMy4gTm8gc3Vicm91dGluZywgaGFzIHBhcmFtZXRlcnM8L3A+XG4gICAgICAgIDxkaXY+UGFzc2VkIHBhcmFtZXRlcnM6IHt7cGFyYW19fTwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgUm91dGUzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwYXJhbTpzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlU2VnbWVudDogUm91dGVTZWdtZW50KSB7fVxuICAgIFxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnBhcmFtID0gdGhpcy5yb3V0ZVNlZ21lbnQuZ2V0UGFyYW0oJ2lkJyk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
