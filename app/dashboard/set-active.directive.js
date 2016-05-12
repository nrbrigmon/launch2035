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
    var MakeActiveDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MakeActiveDirective = (function () {
                function MakeActiveDirective(el, renderer) {
                    this.el = el;
                    this.renderer = renderer;
                }
                MakeActiveDirective.prototype.onClick = function ($event) {
                    // this.renderer.setElementClass(this.el.nativeElement, 'active', true);
                };
                MakeActiveDirective = __decorate([
                    core_1.Directive({
                        selector: '[makeActive]',
                        host: {
                            '(click)': 'onClick($event)',
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], MakeActiveDirective);
                return MakeActiveDirective;
            }());
            exports_1("MakeActiveDirective", MakeActiveDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9zZXQtYWN0aXZlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQUNJLDZCQUFtQixFQUFjLEVBQVMsUUFBa0I7b0JBQXpDLE9BQUUsR0FBRixFQUFFLENBQVk7b0JBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtnQkFDNUQsQ0FBQztnQkFFRCxxQ0FBTyxHQUFQLFVBQVEsTUFBTTtvQkFFWix3RUFBd0U7Z0JBQzFFLENBQUM7Z0JBZEw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsSUFBSSxFQUFFOzRCQUNGLFNBQVMsRUFBRSxpQkFBaUI7eUJBQy9CO3FCQUNKLENBQUM7O3VDQUFBO2dCQVdGLDBCQUFDO1lBQUQsQ0FUQSxBQVNDLElBQUE7WUFURCxxREFTQyxDQUFBIiwiZmlsZSI6ImRhc2hib2FyZC9zZXQtYWN0aXZlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW21ha2VBY3RpdmVdJyxcbiAgICBob3N0OiB7XG4gICAgICAgICcoY2xpY2spJzogJ29uQ2xpY2soJGV2ZW50KScsXG4gICAgfVxufSlcblxuZXhwb3J0IGNsYXNzIE1ha2VBY3RpdmVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZiwgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcil7XG4gICAgfVxuXG4gICAgb25DbGljaygkZXZlbnQpe1xuXG4gICAgICAvLyB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdhY3RpdmUnLCB0cnVlKTtcbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
