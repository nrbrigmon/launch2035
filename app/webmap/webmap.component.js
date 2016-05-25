"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
var WebMapComponent = (function () {
    function WebMapComponent() {
    }
    WebMapComponent = __decorate([
        core_1.Component({
            template: "\n    <div id=\"wrap\">\n      <iframe id=\"iframeId\" scrolling=\"yes\" frameborder=\"no\" src=\"webmap/geoservermap.html\"></iframe>\n    </div>\n  ",
            styles: ["\n    #iframeId{\n      display: block;\n      width: 100%;\n      height: 100%;\n    }\n    #wrap {\n      position:fixed;\n      left:0;\n      width:100%;\n      top:0;\n      height:100%;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], WebMapComponent);
    return WebMapComponent;
}());
exports.WebMapComponent = WebMapComponent;
//# sourceMappingURL=webmap.component.js.map