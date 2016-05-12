System.register(['@angular/core', './dataset-viewer.component', './dataset.service', './highmaps.component'], function(exports_1, context_1) {
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
    var core_1, dataset_viewer_component_1, dataset_service_1, highmaps_component_1;
    var WarehouseComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dataset_viewer_component_1_1) {
                dataset_viewer_component_1 = dataset_viewer_component_1_1;
            },
            function (dataset_service_1_1) {
                dataset_service_1 = dataset_service_1_1;
            },
            function (highmaps_component_1_1) {
                highmaps_component_1 = highmaps_component_1_1;
            }],
        execute: function() {
            WarehouseComponent = (function () {
                function WarehouseComponent(_datasetService) {
                    this._datasetService = _datasetService;
                    this.cObj = '';
                }
                WarehouseComponent.prototype.onGeoSelect = function (geography) {
                    this.cObj = geography;
                    this.selectedGeography = this._datasetService.getDataByGeography(geography);
                    // console.log(this.selectedGeography);
                };
                WarehouseComponent = __decorate([
                    core_1.Component({
                        templateUrl: './dev/warehouse/warehouse.html',
                        directives: [dataset_viewer_component_1.DatasetViewerComponent, highmaps_component_1.MyHighMapsComponent],
                        providers: [dataset_service_1.DatasetService],
                        styleUrls: ['./dev/warehouse/warehouse.css']
                    }), 
                    __metadata('design:paramtypes', [dataset_service_1.DatasetService])
                ], WarehouseComponent);
                return WarehouseComponent;
            }());
            exports_1("WarehouseComponent", WarehouseComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhcmVob3VzZS93YXJlaG91c2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBSUUsNEJBQW9CLGVBQWdDO29CQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7b0JBRnBELFNBQUksR0FBVSxFQUFFLENBQUM7Z0JBRXNDLENBQUM7Z0JBRXhELHdDQUFXLEdBQVgsVUFBWSxTQUFnQjtvQkFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUM1RSx1Q0FBdUM7Z0JBQ3pDLENBQUM7Z0JBakJIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsV0FBVyxFQUFFLGdDQUFnQzt3QkFDN0MsVUFBVSxFQUFFLENBQUMsaURBQXNCLEVBQUUsd0NBQW1CLENBQUM7d0JBQ3pELFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7d0JBQzNCLFNBQVMsRUFBQyxDQUFDLCtCQUErQixDQUFDO3FCQUM1QyxDQUFDOztzQ0FBQTtnQkFjRix5QkFBQztZQUFELENBWkEsQUFZQyxJQUFBO1lBWkQsbURBWUMsQ0FBQSIsImZpbGUiOiJ3YXJlaG91c2Uvd2FyZWhvdXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGF0YXNldFZpZXdlckNvbXBvbmVudH0gZnJvbSAnLi9kYXRhc2V0LXZpZXdlci5jb21wb25lbnQnO1xuaW1wb3J0IHtEYXRhc2V0U2VydmljZX0gZnJvbSAnLi9kYXRhc2V0LnNlcnZpY2UnO1xuaW1wb3J0IHtSZWdpb25hbERhdGFzZXR9IGZyb20gJy4vZGF0YXNldC5zY2hlbWEnO1xuaW1wb3J0IHtNeUhpZ2hNYXBzQ29tcG9uZW50fSBmcm9tICcuL2hpZ2htYXBzLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJy4vZGV2L3dhcmVob3VzZS93YXJlaG91c2UuaHRtbCcsXG4gIGRpcmVjdGl2ZXM6IFtEYXRhc2V0Vmlld2VyQ29tcG9uZW50LCBNeUhpZ2hNYXBzQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbRGF0YXNldFNlcnZpY2VdLFxuICBzdHlsZVVybHM6WycuL2Rldi93YXJlaG91c2Uvd2FyZWhvdXNlLmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgV2FyZWhvdXNlQ29tcG9uZW50IHtcbiAgc2VsZWN0ZWRHZW9ncmFwaHk6IEFycmF5PFJlZ2lvbmFsRGF0YXNldD47XG4gIGNPYmo6c3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YXNldFNlcnZpY2UgOiBEYXRhc2V0U2VydmljZSl7IH1cblxuICBvbkdlb1NlbGVjdChnZW9ncmFwaHk6c3RyaW5nKXtcbiAgICB0aGlzLmNPYmogPSBnZW9ncmFwaHk7XG4gICAgdGhpcy5zZWxlY3RlZEdlb2dyYXBoeSA9IHRoaXMuX2RhdGFzZXRTZXJ2aWNlLmdldERhdGFCeUdlb2dyYXBoeShnZW9ncmFwaHkpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWRHZW9ncmFwaHkpO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
