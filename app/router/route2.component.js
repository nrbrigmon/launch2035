System.register(["@angular/core", "@angular/router", "./subroutes/subroute1.component", "./subroutes/subroute2.component"], function(exports_1, context_1) {
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
    var core_1, router_1, subroute1_component_1, subroute2_component_1;
    var Route2Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (subroute1_component_1_1) {
                subroute1_component_1 = subroute1_component_1_1;
            },
            function (subroute2_component_1_1) {
                subroute2_component_1 = subroute2_component_1_1;
            }],
        execute: function() {
            Route2Component = (function () {
                function Route2Component() {
                }
                Route2Component = __decorate([
                    core_1.Component({
                        selector: 'my-route2',
                        template: "\n        <p>This is route 2. Has subrouting, no parameters</p>\n        <h3>Subroutes</h3>\n        <a [routerLink]=\"['./']\">Subroute 1</a> |\n        <a [routerLink]=\"['subroute2']\">Subroute 2</a>\n        <router-outlet></router-outlet>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.Routes([
                        { path: '', component: subroute1_component_1.Subroute1Component },
                        { path: '/subroute2', component: subroute2_component_1.Subroute2Component },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], Route2Component);
                return Route2Component;
            }());
            exports_1("Route2Component", Route2Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlci9yb3V0ZTIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBcUJBO2dCQUFBO2dCQUVBLENBQUM7Z0JBakJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFFBQVEsRUFBRSwyUEFNVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztxQkFDbEMsQ0FBQztvQkFDRCxlQUFNLENBQUM7d0JBQ0osRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBQzt3QkFDekMsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBQztxQkFDdEQsQ0FBQzs7bUNBQUE7Z0JBR0Ysc0JBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELDZDQUVDLENBQUEiLCJmaWxlIjoicm91dGVyL3JvdXRlMi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzLCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgU3Vicm91dGUxQ29tcG9uZW50IH0gZnJvbSBcIi4vc3Vicm91dGVzL3N1YnJvdXRlMS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFN1YnJvdXRlMkNvbXBvbmVudCB9IGZyb20gXCIuL3N1YnJvdXRlcy9zdWJyb3V0ZTIuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktcm91dGUyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8cD5UaGlzIGlzIHJvdXRlIDIuIEhhcyBzdWJyb3V0aW5nLCBubyBwYXJhbWV0ZXJzPC9wPlxuICAgICAgICA8aDM+U3Vicm91dGVzPC9oMz5cbiAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycuLyddXCI+U3Vicm91dGUgMTwvYT4gfFxuICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJ3N1YnJvdXRlMiddXCI+U3Vicm91dGUgMjwvYT5cbiAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxufSlcbkBSb3V0ZXMoW1xuICAgIHtwYXRoOiAnJywgY29tcG9uZW50OiBTdWJyb3V0ZTFDb21wb25lbnR9LFxuICAgIHtwYXRoOiAnL3N1YnJvdXRlMicsIGNvbXBvbmVudDogU3Vicm91dGUyQ29tcG9uZW50fSxcbl0pXG5leHBvcnQgY2xhc3MgUm91dGUyQ29tcG9uZW50IHtcbiAgICBcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
