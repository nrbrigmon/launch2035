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
    var FileTypePipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FileTypePipe = (function () {
                function FileTypePipe() {
                }
                FileTypePipe.prototype.transform = function (items, args) {
                    var chosenFileType = args;
                    // console.log(fileType);
                    console.log(chosenFileType);
                    if (chosenFileType == 'all') {
                        return items;
                    }
                    else {
                        return items.filter(function (item) {
                            var fileType = item.Type;
                            //  item.Type.slice(item.link.length-3,item.link.length);
                            return fileType === chosenFileType;
                        });
                    }
                };
                FileTypePipe = __decorate([
                    core_1.Pipe({
                        name: 'fileTypePipe'
                    }), 
                    __metadata('design:paramtypes', [])
                ], FileTypePipe);
                return FileTypePipe;
            }());
            exports_1("FileTypePipe", FileTypePipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhcmVob3VzZS9maWxlVHlwZUZpbHRlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBQUE7Z0JBa0JBLENBQUM7Z0JBakJDLGdDQUFTLEdBQVQsVUFBVSxLQUFTLEVBQUUsSUFBVztvQkFDNUIsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDO29CQUUxQix5QkFBeUI7b0JBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQzVCLEVBQUUsQ0FBQyxDQUFDLGNBQWMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUM1QixNQUFNLENBQUMsS0FBSyxDQUFDO29CQUNmLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJOzRCQUVwQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDOzRCQUN6Qix5REFBeUQ7NEJBQ3pELE1BQU0sQ0FBQyxRQUFRLEtBQUssY0FBYyxDQUFDO3dCQUNyQyxDQUFDLENBQ0YsQ0FBQztvQkFDSixDQUFDO2dCQUNMLENBQUM7Z0JBckJIO29CQUFDLFdBQUksQ0FBQzt3QkFDSixJQUFJLEVBQUMsY0FBYztxQkFDcEIsQ0FBQzs7Z0NBQUE7Z0JBb0JGLG1CQUFDO1lBQUQsQ0FsQkEsQUFrQkMsSUFBQTtZQWxCRCx1Q0FrQkMsQ0FBQSIsImZpbGUiOiJ3YXJlaG91c2UvZmlsZVR5cGVGaWx0ZXIucGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSZWdpb25hbERhdGFzZXR9IGZyb20gJy4vZGF0YXNldC5zY2hlbWEnO1xuXG5AUGlwZSh7XG4gIG5hbWU6J2ZpbGVUeXBlUGlwZSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBGaWxlVHlwZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGl0ZW1zOmFueSwgYXJnczpzdHJpbmcpIHtcbiAgICAgIGxldCBjaG9zZW5GaWxlVHlwZSA9IGFyZ3M7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKGZpbGVUeXBlKTtcbiAgICAgIGNvbnNvbGUubG9nKGNob3NlbkZpbGVUeXBlKTtcbiAgICAgIGlmIChjaG9zZW5GaWxlVHlwZSA9PSAnYWxsJykge1xuICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gaXRlbXMuZmlsdGVyKGl0ZW0gPT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBsZXQgZmlsZVR5cGUgPSBpdGVtLlR5cGU7XG4gICAgICAgICAgICAvLyAgaXRlbS5UeXBlLnNsaWNlKGl0ZW0ubGluay5sZW5ndGgtMyxpdGVtLmxpbmsubGVuZ3RoKTtcbiAgICAgICAgICAgIHJldHVybiBmaWxlVHlwZSA9PT0gY2hvc2VuRmlsZVR5cGU7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
