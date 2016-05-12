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
    var RouterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            RouterComponent = (function () {
                function RouterComponent() {
                }
                RouterComponent = __decorate([
                    core_1.Component({
                        selector: 'my-router',
                        template: "\n        <a [routerLink]=\"['route1']\">Route 1 (no subroutes)</a> |\n        <a [routerLink]=\"['route2']\">Route 2 (has subroutes)</a> |\n        <a [routerLink]=\"['route3', 1]\">Route 3 (has parameter)</a>\n        <br>\n        <router-outlet></router-outlet>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RouterComponent);
                return RouterComponent;
            }());
            exports_1("RouterComponent", RouterComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlci9yb3V0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFiRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixRQUFRLEVBQUUsaVJBTVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7cUJBQ2xDLENBQUM7O21DQUFBO2dCQUdGLHNCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCw2Q0FFQyxDQUFBIiwiZmlsZSI6InJvdXRlci9yb3V0ZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LXJvdXRlcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydyb3V0ZTEnXVwiPlJvdXRlIDEgKG5vIHN1YnJvdXRlcyk8L2E+IHxcbiAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydyb3V0ZTInXVwiPlJvdXRlIDIgKGhhcyBzdWJyb3V0ZXMpPC9hPiB8XG4gICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsncm91dGUzJywgMV1cIj5Sb3V0ZSAzIChoYXMgcGFyYW1ldGVyKTwvYT5cbiAgICAgICAgPGJyPlxuICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIFJvdXRlckNvbXBvbmVudCB7XG4gICAgXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
