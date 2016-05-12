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
                        template: "\n    <iframe id=\"iframeId\" scrolling=\"no\" frameborder=\"no\" src=\"/dev/webmap/geoservermap.html\"></iframe>\n  ",
                        styles: ["\n    #iframeId{\n      margin:0 auto;\n      display: block;\n      width: 100%;\n      height: 1000px;\n    }\n  "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WebMapComponent);
                return WebMapComponent;
            }());
            exports_1("WebMapComponent", WebMapComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYm1hcC93ZWJtYXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JBO2dCQUFBO2dCQUVFLENBQUM7Z0JBaEJIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLHVIQUVUO3dCQUNELE1BQU0sRUFBQyxDQUFDLHFIQU9QLENBQUM7cUJBQ0gsQ0FBQzs7bUNBQUE7Z0JBSUEsc0JBQUM7WUFBRCxDQUZGLEFBRUcsSUFBQTtZQUZILDZDQUVHLENBQUEiLCJmaWxlIjoid2VibWFwL3dlYm1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxpZnJhbWUgaWQ9XCJpZnJhbWVJZFwiIHNjcm9sbGluZz1cIm5vXCIgZnJhbWVib3JkZXI9XCJub1wiIHNyYz1cIi9kZXYvd2VibWFwL2dlb3NlcnZlcm1hcC5odG1sXCI+PC9pZnJhbWU+XG4gIGAsXG4gIHN0eWxlczpbYFxuICAgICNpZnJhbWVJZHtcbiAgICAgIG1hcmdpbjowIGF1dG87XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAwcHg7XG4gICAgfVxuICBgXVxufSlcblxuZXhwb3J0IGNsYXNzIFdlYk1hcENvbXBvbmVudCB7XG5cbiAgfVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
