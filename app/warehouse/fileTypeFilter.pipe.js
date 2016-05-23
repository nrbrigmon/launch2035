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
                    // console.log(chosenFileType);
                    if (chosenFileType == 'All') {
                        return items;
                    }
                    else {
                        return items.filter(function (item) {
                            var fileType = item.Type;
                            //  item.Type.slice(item.link.length-3,item.link.length);
                            if (chosenFileType == 'Table') {
                                console.log('or...');
                                return fileType === chosenFileType || fileType === 'Report';
                            }
                            else {
                                return fileType === chosenFileType;
                            }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhcmVob3VzZS9maWxlVHlwZUZpbHRlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBQUE7Z0JBdUJBLENBQUM7Z0JBdEJDLGdDQUFTLEdBQVQsVUFBVSxLQUFTLEVBQUUsSUFBVztvQkFDNUIsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDO29CQUUxQix5QkFBeUI7b0JBQ3pCLCtCQUErQjtvQkFDL0IsRUFBRSxDQUFDLENBQUMsY0FBYyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQzVCLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ2YsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUk7NEJBRXBCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7NEJBQ3pCLHlEQUF5RDs0QkFDekQsRUFBRSxDQUFDLENBQUMsY0FBYyxJQUFJLE9BQU8sQ0FBQyxDQUFBLENBQUM7Z0NBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0NBQ3JCLE1BQU0sQ0FBQyxRQUFRLEtBQUssY0FBYyxJQUFJLFFBQVEsS0FBSyxRQUFRLENBQUM7NEJBQzlELENBQUM7NEJBQUMsSUFBSSxDQUFDLENBQUM7Z0NBQ04sTUFBTSxDQUFDLFFBQVEsS0FBSyxjQUFjLENBQUM7NEJBQ3JDLENBQUM7d0JBQ0gsQ0FBQyxDQUNGLENBQUM7b0JBQ0osQ0FBQztnQkFDTCxDQUFDO2dCQTFCSDtvQkFBQyxXQUFJLENBQUM7d0JBQ0osSUFBSSxFQUFDLGNBQWM7cUJBQ3BCLENBQUM7O2dDQUFBO2dCQXlCRixtQkFBQztZQUFELENBdkJBLEFBdUJDLElBQUE7WUF2QkQsdUNBdUJDLENBQUEiLCJmaWxlIjoid2FyZWhvdXNlL2ZpbGVUeXBlRmlsdGVyLnBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UmVnaW9uYWxEYXRhc2V0fSBmcm9tICcuL2RhdGFzZXQuc2NoZW1hJztcblxuQFBpcGUoe1xuICBuYW1lOidmaWxlVHlwZVBpcGUnXG59KVxuXG5leHBvcnQgY2xhc3MgRmlsZVR5cGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShpdGVtczphbnksIGFyZ3M6c3RyaW5nKSB7XG4gICAgICBsZXQgY2hvc2VuRmlsZVR5cGUgPSBhcmdzO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyhmaWxlVHlwZSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhjaG9zZW5GaWxlVHlwZSk7XG4gICAgICBpZiAoY2hvc2VuRmlsZVR5cGUgPT0gJ0FsbCcpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcihpdGVtID0+XG4gICAgICAgICAge1xuICAgICAgICAgICAgbGV0IGZpbGVUeXBlID0gaXRlbS5UeXBlO1xuICAgICAgICAgICAgLy8gIGl0ZW0uVHlwZS5zbGljZShpdGVtLmxpbmsubGVuZ3RoLTMsaXRlbS5saW5rLmxlbmd0aCk7XG4gICAgICAgICAgICBpZiAoY2hvc2VuRmlsZVR5cGUgPT0gJ1RhYmxlJyl7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvci4uLicpO1xuICAgICAgICAgICAgICByZXR1cm4gZmlsZVR5cGUgPT09IGNob3NlbkZpbGVUeXBlIHx8IGZpbGVUeXBlID09PSAnUmVwb3J0JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBmaWxlVHlwZSA9PT0gY2hvc2VuRmlsZVR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
