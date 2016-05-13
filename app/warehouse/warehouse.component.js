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
                    this.searchInitiated = false;
                }
                WarehouseComponent.prototype.onGeoSelect = function (geography) {
                    this.searchInitiated = true;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhcmVob3VzZS93YXJlaG91c2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBS0UsNEJBQW9CLGVBQWdDO29CQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7b0JBSHBELFNBQUksR0FBVSxFQUFFLENBQUM7b0JBQ2pCLG9CQUFlLEdBQVksS0FBSyxDQUFDO2dCQUVzQixDQUFDO2dCQUV4RCx3Q0FBVyxHQUFYLFVBQVksU0FBZ0I7b0JBQzFCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO29CQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzVFLHVDQUF1QztnQkFDekMsQ0FBQztnQkFuQkg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxXQUFXLEVBQUUsZ0NBQWdDO3dCQUM3QyxVQUFVLEVBQUUsQ0FBQyxpREFBc0IsRUFBRSx3Q0FBbUIsQ0FBQzt3QkFDekQsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQzt3QkFDM0IsU0FBUyxFQUFDLENBQUMsK0JBQStCLENBQUM7cUJBQzVDLENBQUM7O3NDQUFBO2dCQWdCRix5QkFBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQsbURBY0MsQ0FBQSIsImZpbGUiOiJ3YXJlaG91c2Uvd2FyZWhvdXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGF0YXNldFZpZXdlckNvbXBvbmVudH0gZnJvbSAnLi9kYXRhc2V0LXZpZXdlci5jb21wb25lbnQnO1xuaW1wb3J0IHtEYXRhc2V0U2VydmljZX0gZnJvbSAnLi9kYXRhc2V0LnNlcnZpY2UnO1xuaW1wb3J0IHtSZWdpb25hbERhdGFzZXR9IGZyb20gJy4vZGF0YXNldC5zY2hlbWEnO1xuaW1wb3J0IHtNeUhpZ2hNYXBzQ29tcG9uZW50fSBmcm9tICcuL2hpZ2htYXBzLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJy4vZGV2L3dhcmVob3VzZS93YXJlaG91c2UuaHRtbCcsXG4gIGRpcmVjdGl2ZXM6IFtEYXRhc2V0Vmlld2VyQ29tcG9uZW50LCBNeUhpZ2hNYXBzQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbRGF0YXNldFNlcnZpY2VdLFxuICBzdHlsZVVybHM6WycuL2Rldi93YXJlaG91c2Uvd2FyZWhvdXNlLmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgV2FyZWhvdXNlQ29tcG9uZW50IHtcbiAgc2VsZWN0ZWRHZW9ncmFwaHk6IEFycmF5PFJlZ2lvbmFsRGF0YXNldD47XG4gIGNPYmo6c3RyaW5nID0gJyc7XG4gIHNlYXJjaEluaXRpYXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGFzZXRTZXJ2aWNlIDogRGF0YXNldFNlcnZpY2UpeyB9XG5cbiAgb25HZW9TZWxlY3QoZ2VvZ3JhcGh5OnN0cmluZyl7XG4gICAgdGhpcy5zZWFyY2hJbml0aWF0ZWQgPSB0cnVlO1xuICAgIHRoaXMuY09iaiA9IGdlb2dyYXBoeTtcbiAgICB0aGlzLnNlbGVjdGVkR2VvZ3JhcGh5ID0gdGhpcy5fZGF0YXNldFNlcnZpY2UuZ2V0RGF0YUJ5R2VvZ3JhcGh5KGdlb2dyYXBoeSk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZWxlY3RlZEdlb2dyYXBoeSk7XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
