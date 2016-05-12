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
                            var fileType = item.link.slice(item.link.length - 3, item.link.length);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhcmVob3VzZS9maWxlVHlwZUZpbHRlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBQUE7Z0JBaUJBLENBQUM7Z0JBaEJDLGdDQUFTLEdBQVQsVUFBVSxLQUFTLEVBQUUsSUFBVztvQkFDNUIsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDO29CQUUxQix5QkFBeUI7b0JBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQzVCLEVBQUUsQ0FBQyxDQUFDLGNBQWMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUM1QixNQUFNLENBQUMsS0FBSyxDQUFDO29CQUNmLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJOzRCQUVwQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzs0QkFDcEUsTUFBTSxDQUFDLFFBQVEsS0FBSyxjQUFjLENBQUM7d0JBQ3JDLENBQUMsQ0FDRixDQUFDO29CQUNKLENBQUM7Z0JBQ0wsQ0FBQztnQkFwQkg7b0JBQUMsV0FBSSxDQUFDO3dCQUNKLElBQUksRUFBQyxjQUFjO3FCQUNwQixDQUFDOztnQ0FBQTtnQkFtQkYsbUJBQUM7WUFBRCxDQWpCQSxBQWlCQyxJQUFBO1lBakJELHVDQWlCQyxDQUFBIiwiZmlsZSI6IndhcmVob3VzZS9maWxlVHlwZUZpbHRlci5waXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlZ2lvbmFsRGF0YXNldH0gZnJvbSAnLi9kYXRhc2V0LnNjaGVtYSc7XG5cbkBQaXBlKHtcbiAgbmFtZTonZmlsZVR5cGVQaXBlJ1xufSlcblxuZXhwb3J0IGNsYXNzIEZpbGVUeXBlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oaXRlbXM6YW55LCBhcmdzOnN0cmluZykge1xuICAgICAgbGV0IGNob3NlbkZpbGVUeXBlID0gYXJncztcblxuICAgICAgLy8gY29uc29sZS5sb2coZmlsZVR5cGUpO1xuICAgICAgY29uc29sZS5sb2coY2hvc2VuRmlsZVR5cGUpO1xuICAgICAgaWYgKGNob3NlbkZpbGVUeXBlID09ICdhbGwnKSB7XG4gICAgICAgIHJldHVybiBpdGVtcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIoaXRlbSA9PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxldCBmaWxlVHlwZSA9IGl0ZW0ubGluay5zbGljZShpdGVtLmxpbmsubGVuZ3RoLTMsaXRlbS5saW5rLmxlbmd0aCk7XG4gICAgICAgICAgICByZXR1cm4gZmlsZVR5cGUgPT09IGNob3NlbkZpbGVUeXBlO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
