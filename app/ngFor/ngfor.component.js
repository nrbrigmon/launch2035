System.register(["@angular/core"], function(exports_1, context_1) {
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
    var NgForComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NgForComponent = (function () {
                function NgForComponent() {
                    this.items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                }
                NgForComponent = __decorate([
                    core_1.Component({
                        selector: 'my-ngfor',
                        template: "\n        <ul>\n            <li *ngFor=\"let item of items\">Item: {{item}}</li>\n        </ul>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgForComponent);
                return NgForComponent;
            }());
            exports_1("NgForComponent", NgForComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5nRm9yL25nZm9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUFBO29CQUNJLFVBQUssR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQVZEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLFFBQVEsRUFBRSx1R0FJVDtxQkFDSixDQUFDOztrQ0FBQTtnQkFHRixxQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsMkNBRUMsQ0FBQSIsImZpbGUiOiJuZ0Zvci9uZ2Zvci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LW5nZm9yJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIj5JdGVtOiB7e2l0ZW19fTwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBOZ0ZvckNvbXBvbmVudCB7XG4gICAgaXRlbXMgPSBbMSwyLDMsNCw1LDYsNyw4LDksMTBdO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
