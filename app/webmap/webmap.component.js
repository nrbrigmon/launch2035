System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var WebMapComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            WebMapComponent = (function () {
                function WebMapComponent() {
                }
                WebMapComponent = __decorate([
                    core_1.Component({
                        template: "\n    <div id=\"wrap\">\n      <iframe id=\"iframeId\" scrolling=\"no\" frameborder=\"no\" src=\"/dev/webmap/geoservermap.html\"></iframe>\n    </div>\n  ",
                        styles: ["\n    #iframeId{\n      display: block;\n      width: 100%;\n      height: 1000px;\n    }\n    #wrap {\n      position:fixed;\n      left:0;\n      width:100%;\n      top:0;\n      height:100%;\n    }\n  "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WebMapComponent);
                return WebMapComponent;
            }());
            exports_1("WebMapComponent", WebMapComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYm1hcC93ZWJtYXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBd0JBO2dCQUFBO2dCQUVFLENBQUM7Z0JBeEJIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLDRKQUlUO3dCQUNELE1BQU0sRUFBQyxDQUFDLDhNQWFQLENBQUM7cUJBQ0gsQ0FBQzs7bUNBQUE7Z0JBSUEsc0JBQUM7WUFBRCxDQUZGLEFBRUcsSUFBQTtZQUZILDZDQUVHLENBQUEiLCJmaWxlIjoid2VibWFwL3dlYm1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgaWQ9XCJ3cmFwXCI+XG4gICAgICA8aWZyYW1lIGlkPVwiaWZyYW1lSWRcIiBzY3JvbGxpbmc9XCJub1wiIGZyYW1lYm9yZGVyPVwibm9cIiBzcmM9XCIvZGV2L3dlYm1hcC9nZW9zZXJ2ZXJtYXAuaHRtbFwiPjwvaWZyYW1lPlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6W2BcbiAgICAjaWZyYW1lSWR7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAwcHg7XG4gICAgfVxuICAgICN3cmFwIHtcbiAgICAgIHBvc2l0aW9uOmZpeGVkO1xuICAgICAgbGVmdDowO1xuICAgICAgd2lkdGg6MTAwJTtcbiAgICAgIHRvcDowO1xuICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgfVxuICBgXVxufSlcblxuZXhwb3J0IGNsYXNzIFdlYk1hcENvbXBvbmVudCB7XG5cbiAgfVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
