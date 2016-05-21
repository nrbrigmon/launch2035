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
    var FileNamePipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FileNamePipe = (function () {
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
            exports_1("FileNamePipe", FileNamePipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhcmVob3VzZS9maWxlTmFtZUZpbHRlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBQUE7Z0JBa0JBLENBQUM7Z0JBakJDLGdDQUFTLEdBQVQsVUFBVSxLQUFTLEVBQUUsSUFBYTtvQkFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO29CQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNoQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7d0JBQ1osTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDZixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQzt3QkFDckIsR0FBRyxDQUFDLENBQWEsVUFBSyxFQUFMLGVBQUssRUFBTCxtQkFBSyxFQUFMLElBQUssQ0FBQzs0QkFBbEIsSUFBSSxJQUFJLGNBQUE7NEJBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDbEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0NBQ3pDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ3pCLENBQUM7eUJBQ0Y7d0JBQ0QsTUFBTSxDQUFDLFdBQVcsQ0FBQztvQkFDckIsQ0FBQztnQkFDTCxDQUFDO2dCQXBCTDtvQkFBQyxXQUFJLENBQUM7d0JBQ0osSUFBSSxFQUFDLGNBQWM7cUJBQ3BCLENBQUM7O2dDQUFBO2dCQW9CRixtQkFBQztZQUFELENBbEJBLEFBa0JDLElBQUE7WUFsQkQsdUNBa0JDLENBQUEiLCJmaWxlIjoid2FyZWhvdXNlL2ZpbGVOYW1lRmlsdGVyLnBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UmVnaW9uYWxEYXRhc2V0fSBmcm9tICcuL2RhdGFzZXQuc2NoZW1hJztcblxuQFBpcGUoe1xuICBuYW1lOidmaWxlTmFtZVBpcGUnXG59KVxuXG5leHBvcnQgY2xhc3MgRmlsZU5hbWVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShpdGVtczphbnksIGFyZ3M6c3RyaW5nW10pIHtcbiAgICAgIGNvbnNvbGUubG9nKCdmaWx0ZXJpbmcgYnkgaW5wdXQuLi4nKTtcbiAgICAgIGNvbnNvbGUubG9nKGFyZ3MpO1xuICAgICAgICBpZiAoIWFyZ3NbMF0pe1xuICAgICAgICAgIHJldHVybiBpdGVtcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgcmVzdWx0QXJyYXkgPSBbXTtcbiAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICAgICAgICAgIGlmIChpdGVtLk5hbWUubWF0Y2goJ14uKicgKyBhcmdzICsgJy4qJCcpKXtcbiAgICAgICAgICAgICAgcmVzdWx0QXJyYXkucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdEFycmF5O1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
