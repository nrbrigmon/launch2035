System.register(['@angular/core', "@angular/router"], function(exports_1, context_1) {
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
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(_router) {
                    this._router = _router;
                }
                HomeComponent.prototype.webmap = function () { this._router.navigate(['/webmap']); };
                HomeComponent.prototype.dashboard = function () { this._router.navigate(['/dashboard']); };
                HomeComponent.prototype.warehouse = function () { this._router.navigate(['/warehouse']); };
                HomeComponent = __decorate([
                    core_1.Component({
                        template: "\n    <div class=\"row top-row module\">\n      <div class=\"col-xs-12 \">\n      \n        <h2>Welcome to the Launch 2035 Interactive Clearinghouse!</h2>\n        <p>Use the navigation menu or select an application component below.</p>\n      \n      </div>\n    </div>\n    <div class=\"row app-entry-row\">\n        <div class=\"col-md-4 app-entry-col\">\n          <img class=\"img-circle\" src=\"./assets/img/webmap-screenshot.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n          <h2>Web Map</h2>\n          <p>The Web Map is an interactive tool that allows for examining, terrain, roadway infrastructure, and selected Metropolitan Planning Organizational data.</p>\n          <p><a class=\"btn btn-default\"  (click)=\"webmap()\"  role=\"button\">Go \u00BB</a></p>\n        </div><!-- /.col-md-4 -->\n        <div class=\"col-md-4 app-entry-col\">\n          <img class=\"img-circle\" src=\"./assets/img/warehouse-screenshot.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n          <h2>Warehouse</h2>\n          <p>The Warehouse is an easy to use interface for exploring the backend of every file found in both the dashboard and web map. It also is a connection to files not found in either location.</p>\n          <p><a class=\"btn btn-default\" (click)=\"warehouse()\" role=\"button\">Go \u00BB</a></p>\n        </div><!-- /.col-md-4 -->\n        <div class=\"col-md-4 app-entry-col\">\n          <img class=\"img-circle\" src=\"./assets/img/dashboard-screenshot.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n          <h2>Dashboard</h2>\n          <p>The Dashboard is a snapshot of economic, environmental, and social data at the regional and county level. It reveals insights into a path for a more sustainable future.</p>\n          <p><a class=\"btn btn-default\" (click)=\"dashboard()\" role=\"button\">Go \u00BB</a></p>\n        </div><!-- /.col-md-4 -->\n      </div>\n  ",
                        styles: ["\n    .top-row{\n        margin-top: 25px;\n    }\n    .app-entry-row{\n        padding: 30px;\n    }\n    .app-entry-col{\n        padding: 20px;\n        text-align:center;\n    }\n    .img-circle {\n        box-shadow: 1px 1px 1px #ccc;\n    }\n  "]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtREE7Z0JBRUksdUJBQW9CLE9BQWM7b0JBQWQsWUFBTyxHQUFQLE9BQU8sQ0FBTztnQkFBRyxDQUFDO2dCQUV0Qyw4QkFBTSxHQUFOLGNBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQztnQkFDOUMsaUNBQVMsR0FBVCxjQUFhLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQ3BELGlDQUFTLEdBQVQsY0FBYSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQXREeEQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsODZEQTZCVDt3QkFDRCxNQUFNLEVBQUMsQ0FBQyw0UEFjUCxDQUFDO3FCQUNILENBQUM7O2lDQUFBO2dCQVVGLG9CQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFSRCx5Q0FRQyxDQUFBIiwiZmlsZSI6ImhvbWUvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwicm93IHRvcC1yb3cgbW9kdWxlXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIFwiPlxuICAgICAgXG4gICAgICAgIDxoMj5XZWxjb21lIHRvIHRoZSBMYXVuY2ggMjAzNSBJbnRlcmFjdGl2ZSBDbGVhcmluZ2hvdXNlITwvaDI+XG4gICAgICAgIDxwPlVzZSB0aGUgbmF2aWdhdGlvbiBtZW51IG9yIHNlbGVjdCBhbiBhcHBsaWNhdGlvbiBjb21wb25lbnQgYmVsb3cuPC9wPlxuICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicm93IGFwcC1lbnRyeS1yb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00IGFwcC1lbnRyeS1jb2xcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLWNpcmNsZVwiIHNyYz1cIi4vYXNzZXRzL2ltZy93ZWJtYXAtc2NyZWVuc2hvdC5wbmdcIiBhbHQ9XCJHZW5lcmljIHBsYWNlaG9sZGVyIGltYWdlXCIgd2lkdGg9XCIxNDBcIiBoZWlnaHQ9XCIxNDBcIj5cbiAgICAgICAgICA8aDI+V2ViIE1hcDwvaDI+XG4gICAgICAgICAgPHA+VGhlIFdlYiBNYXAgaXMgYW4gaW50ZXJhY3RpdmUgdG9vbCB0aGF0IGFsbG93cyBmb3IgZXhhbWluaW5nLCB0ZXJyYWluLCByb2Fkd2F5IGluZnJhc3RydWN0dXJlLCBhbmQgc2VsZWN0ZWQgTWV0cm9wb2xpdGFuIFBsYW5uaW5nIE9yZ2FuaXphdGlvbmFsIGRhdGEuPC9wPlxuICAgICAgICAgIDxwPjxhIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgIChjbGljayk9XCJ3ZWJtYXAoKVwiICByb2xlPVwiYnV0dG9uXCI+R28gwrs8L2E+PC9wPlxuICAgICAgICA8L2Rpdj48IS0tIC8uY29sLW1kLTQgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBhcHAtZW50cnktY29sXCI+XG4gICAgICAgICAgPGltZyBjbGFzcz1cImltZy1jaXJjbGVcIiBzcmM9XCIuL2Fzc2V0cy9pbWcvd2FyZWhvdXNlLXNjcmVlbnNob3QucG5nXCIgYWx0PVwiR2VuZXJpYyBwbGFjZWhvbGRlciBpbWFnZVwiIHdpZHRoPVwiMTQwXCIgaGVpZ2h0PVwiMTQwXCI+XG4gICAgICAgICAgPGgyPldhcmVob3VzZTwvaDI+XG4gICAgICAgICAgPHA+VGhlIFdhcmVob3VzZSBpcyBhbiBlYXN5IHRvIHVzZSBpbnRlcmZhY2UgZm9yIGV4cGxvcmluZyB0aGUgYmFja2VuZCBvZiBldmVyeSBmaWxlIGZvdW5kIGluIGJvdGggdGhlIGRhc2hib2FyZCBhbmQgd2ViIG1hcC4gSXQgYWxzbyBpcyBhIGNvbm5lY3Rpb24gdG8gZmlsZXMgbm90IGZvdW5kIGluIGVpdGhlciBsb2NhdGlvbi48L3A+XG4gICAgICAgICAgPHA+PGEgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiAoY2xpY2spPVwid2FyZWhvdXNlKClcIiByb2xlPVwiYnV0dG9uXCI+R28gwrs8L2E+PC9wPlxuICAgICAgICA8L2Rpdj48IS0tIC8uY29sLW1kLTQgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBhcHAtZW50cnktY29sXCI+XG4gICAgICAgICAgPGltZyBjbGFzcz1cImltZy1jaXJjbGVcIiBzcmM9XCIuL2Fzc2V0cy9pbWcvZGFzaGJvYXJkLXNjcmVlbnNob3QucG5nXCIgYWx0PVwiR2VuZXJpYyBwbGFjZWhvbGRlciBpbWFnZVwiIHdpZHRoPVwiMTQwXCIgaGVpZ2h0PVwiMTQwXCI+XG4gICAgICAgICAgPGgyPkRhc2hib2FyZDwvaDI+XG4gICAgICAgICAgPHA+VGhlIERhc2hib2FyZCBpcyBhIHNuYXBzaG90IG9mIGVjb25vbWljLCBlbnZpcm9ubWVudGFsLCBhbmQgc29jaWFsIGRhdGEgYXQgdGhlIHJlZ2lvbmFsIGFuZCBjb3VudHkgbGV2ZWwuIEl0IHJldmVhbHMgaW5zaWdodHMgaW50byBhIHBhdGggZm9yIGEgbW9yZSBzdXN0YWluYWJsZSBmdXR1cmUuPC9wPlxuICAgICAgICAgIDxwPjxhIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cImRhc2hib2FyZCgpXCIgcm9sZT1cImJ1dHRvblwiPkdvIMK7PC9hPjwvcD5cbiAgICAgICAgPC9kaXY+PCEtLSAvLmNvbC1tZC00IC0tPlxuICAgICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczpbYFxuICAgIC50b3Atcm93e1xuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIH1cbiAgICAuYXBwLWVudHJ5LXJvd3tcbiAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICB9XG4gICAgLmFwcC1lbnRyeS1jb2x7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIH1cbiAgICAuaW1nLWNpcmNsZSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICNjY2M7XG4gICAgfVxuICBgXVxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgeyBcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIpIHt9XG5cbiAgICB3ZWJtYXAoKSB7dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL3dlYm1hcCddKTt9XG4gICAgZGFzaGJvYXJkKCkge3RoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9kYXNoYm9hcmQnXSk7fVxuICAgIHdhcmVob3VzZSgpIHt0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvd2FyZWhvdXNlJ10pO31cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
