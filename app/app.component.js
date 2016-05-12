System.register(['@angular/core', './home/home.component', './webmap/webmap.component', './warehouse/warehouse.component', './dashboard/dashboard.component', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, home_component_1, webmap_component_1, warehouse_component_1, dashboard_component_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (webmap_component_1_1) {
                webmap_component_1 = webmap_component_1_1;
            },
            function (warehouse_component_1_1) {
                warehouse_component_1 = warehouse_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.navtoggle = 'no';
                }
                AppComponent.prototype.navToggle = function () {
                    if (this.navtoggle === 'no') {
                        this.navtoggle = 'yes';
                    }
                    else {
                        this.navtoggle = 'no';
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: './dev/app-main.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.Routes([
                        { path: '', component: home_component_1.HomeComponent },
                        { path: '/webmap', component: webmap_component_1.WebMapComponent },
                        { path: '/warehouse', component: warehouse_component_1.WarehouseComponent },
                        { path: '/dashboard', component: dashboard_component_1.DashboardComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBQUE7b0JBQ0UsY0FBUyxHQUFXLElBQUksQ0FBQztnQkFTM0IsQ0FBQztnQkFQQyxnQ0FBUyxHQUFUO29CQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLENBQUEsQ0FBQzt3QkFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7b0JBQ3pCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7b0JBQ3hCLENBQUM7Z0JBQ0gsQ0FBQztnQkF0Qkg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsV0FBVyxFQUFFLHFCQUFxQjt3QkFDbEMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7cUJBQ2xDLENBQUM7b0JBRUQsZUFBTSxDQUFDO3dCQUNOLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTt3QkFDcEMsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO3dCQUM3QyxFQUFDLElBQUksRUFBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLHdDQUFrQixFQUFDO3dCQUNsRCxFQUFDLElBQUksRUFBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLHdDQUFrQixFQUFDO3FCQUNuRCxDQUFDOztnQ0FBQTtnQkFZRixtQkFBQztZQUFELENBVkEsQUFVQyxJQUFBO1lBVkQsdUNBVUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQge1dlYk1hcENvbXBvbmVudH0gZnJvbSAnLi93ZWJtYXAvd2VibWFwLmNvbXBvbmVudCc7XG5pbXBvcnQge1dhcmVob3VzZUNvbXBvbmVudH0gZnJvbSAnLi93YXJlaG91c2Uvd2FyZWhvdXNlLmNvbXBvbmVudCc7XG5pbXBvcnQge0Rhc2hib2FyZENvbXBvbmVudH0gZnJvbSAnLi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQge1JvdXRlcywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGV2L2FwcC1tYWluLmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cbn0pXG5cbkBSb3V0ZXMoW1xuICB7cGF0aDonJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gIHtwYXRoOicvd2VibWFwJywgY29tcG9uZW50OiBXZWJNYXBDb21wb25lbnQgfSxcbiAge3BhdGg6Jy93YXJlaG91c2UnLCBjb21wb25lbnQ6IFdhcmVob3VzZUNvbXBvbmVudH0sXG4gIHtwYXRoOicvZGFzaGJvYXJkJywgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnR9XG5dKVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgbmF2dG9nZ2xlOiBzdHJpbmcgPSAnbm8nO1xuXG4gIG5hdlRvZ2dsZSgpe1xuICAgIGlmICh0aGlzLm5hdnRvZ2dsZSA9PT0gJ25vJyl7XG4gICAgICB0aGlzLm5hdnRvZ2dsZSA9ICd5ZXMnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5hdnRvZ2dsZSA9ICdubyc7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
