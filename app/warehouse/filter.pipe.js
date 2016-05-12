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
                    var chosenFileType = args[0];
                    if (chosenFileType == 'all') {
                        return items;
                    }
                    else {
                        return items.filter(function (item) {
                            return item.fileType === chosenFileType;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhcmVob3VzZS9maWx0ZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQUFBO2dCQTRCQSxDQUFDO2dCQTNCQyxnQ0FBUyxHQUFULFVBQVUsS0FBUyxFQUFFLElBQWE7b0JBQzVCLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDN0IsRUFBRSxDQUFDLENBQUMsY0FBYyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQzVCLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ2YsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUk7NEJBRXBCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLGNBQWMsQ0FBQzt3QkFDMUMsQ0FBQyxDQUNGLENBQUM7b0JBQ0osQ0FBQztnQkFDTCxDQUFDO2dCQWhCTDtvQkFBQyxXQUFJLENBQUM7d0JBQ0osSUFBSSxFQUFDLGNBQWM7cUJBQ3BCLENBQUM7O2dDQUFBO2dCQThCRixtQkFBQztZQUFELENBNUJBLEFBNEJDLElBQUE7WUE1QkQsdUNBNEJDLENBQUEiLCJmaWxlIjoid2FyZWhvdXNlL2ZpbHRlci5waXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlZ2lvbmFsRGF0YXNldH0gZnJvbSAnLi9kYXRhc2V0LnNjaGVtYSc7XG5cbkBQaXBlKHtcbiAgbmFtZTonZmlsZVR5cGVQaXBlJ1xufSkgXG5cbmV4cG9ydCBjbGFzcyBGaWxlVHlwZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGl0ZW1zOmFueSwgYXJnczpzdHJpbmdbXSkge1xuICAgICAgICBsZXQgY2hvc2VuRmlsZVR5cGUgPSBhcmdzWzBdO1xuICAgICAgICBpZiAoY2hvc2VuRmlsZVR5cGUgPT0gJ2FsbCcpIHtcbiAgICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcihpdGVtID0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJldHVybiBpdGVtLmZpbGVUeXBlID09PSBjaG9zZW5GaWxlVHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuICAvLyB0cmFuc2Zvcm0odmFsdWU6IFJlZ2lvbmFsRGF0YXNldFtdLCBhcmdzOnN0cmluZ1tdKTphbnl7XG4gIC8vICAgY29uc29sZS5sb2coJ2ZpbHRlcmluZy4uLicpO1xuICAvLyAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCApe1xuICAvLyAgICAgICByZXR1cm4gdmFsdWU7XG4gIC8vICAgICB9XG4gIC8vXG4gIC8vICAgICBsZXQgcmVzdWx0QXJyYXkgPSBbXTtcbiAgLy8gICAgIGZvciAobGV0IGl0ZW0gb2YgdmFsdWUpIHtcbiAgLy8gICAgICAgaWYgKGl0ZW0ubmFtZS5tYXRjaCgnXi4qJyArIGFyZ3NbMF0gKyAnLiokJykpe1xuICAvLyAgICAgICAgIHJlc3VsdEFycmF5LnB1c2goaXRlbSk7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH1cbiAgLy8gICAgIGNvbnNvbGUubG9nKHJlc3VsdEFycmF5KTtcbiAgLy8gICAgIHJldHVybiByZXN1bHRBcnJheTtcbiAgLy8gfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
