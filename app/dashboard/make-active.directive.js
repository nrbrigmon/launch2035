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
                MakeActiveDirective.prototype.ngOnInit = function () {
                    var self = this;
                    setTimeout(function () { document.addEventListener('click', self.offClickHandler); }, 0);
                };
                MakeActiveDirective.prototype.onClick = function ($event) {
                    // consol
                };
                __decorate([
                    core_1.Input('makeActive'), 
                    __metadata('design:type', Object)
                ], MakeActiveDirective.prototype, "offClickHandler", void 0);
                MakeActiveDirective = __decorate([
                    core_1.Directive({
                        selector: 'makeActive',
                        inputs: ['makeActive'],
                        host: {
                            '(click)': 'onClick($event)',
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], MakeActiveDirective);
                return MakeActiveDirective;
            }());
            exports_1("default", MakeActiveDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9tYWtlLWFjdGl2ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFHSSw2QkFBbUIsRUFBYyxFQUFTLFFBQWtCO29CQUF6QyxPQUFFLEdBQUYsRUFBRSxDQUFZO29CQUFTLGFBQVEsR0FBUixRQUFRLENBQVU7Z0JBQUUsQ0FBQztnQkFFL0Qsc0NBQVEsR0FBUjtvQkFDRSxJQUFJLElBQUksR0FBQyxJQUFJLENBQUM7b0JBQ2QsVUFBVSxDQUFDLGNBQU8sUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ25GLENBQUM7Z0JBRUQscUNBQU8sR0FBUCxVQUFRLE1BQU07b0JBQ1YsU0FBUztnQkFDYixDQUFDO2dCQVhEO29CQUFDLFlBQUssQ0FBQyxZQUFZLENBQUM7OzRFQUFBO2dCQVR4QjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUM7d0JBQ3RCLElBQUksRUFBRTs0QkFDRixTQUFTLEVBQUUsaUJBQWlCO3lCQUMvQjtxQkFDSixDQUFDOzt1Q0FBQTtnQkFlRiwwQkFBQztZQUFELENBYkEsQUFhQyxJQUFBO1lBYkQseUNBYUMsQ0FBQSIsImZpbGUiOiJkYXNoYm9hcmQvbWFrZS1hY3RpdmUuZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyLCBIb3N0LCBEZXBlbmRlbmN5LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnbWFrZUFjdGl2ZScsXG4gICAgaW5wdXRzOiBbJ21ha2VBY3RpdmUnXSxcbiAgICBob3N0OiB7XG4gICAgICAgICcoY2xpY2spJzogJ29uQ2xpY2soJGV2ZW50KScsXG4gICAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFrZUFjdGl2ZURpcmVjdGl2ZSB7XG4gICAgQElucHV0KCdtYWtlQWN0aXZlJykgb2ZmQ2xpY2tIYW5kbGVyO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLCBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyKXt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgIGxldCBzZWxmPXRoaXM7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGYub2ZmQ2xpY2tIYW5kbGVyKTt9LCAwKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrKCRldmVudCkge1xuICAgICAgICAvLyBjb25zb2xcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
