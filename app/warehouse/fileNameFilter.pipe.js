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
var FileNamePipe = (function () {
    function FileNamePipe() {
    }
    FileNamePipe.prototype.transform = function (items, args) {
        console.log('filtering by input...');
        console.log(args);
        if (!args[0]) {
            return items;
        }
        else {
            var resultArray = [];
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                console.log(item);
                if (item.Name.match('^.*' + args + '.*$')) {
                    resultArray.push(item);
                }
            }
            return resultArray;
        }
    };
    FileNamePipe = __decorate([
        core_1.Pipe({
            name: 'fileNamePipe'
        }), 
        __metadata('design:paramtypes', [])
    ], FileNamePipe);
    return FileNamePipe;
}());
exports.FileNamePipe = FileNamePipe;
//# sourceMappingURL=fileNameFilter.pipe.js.map