"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var dataset_viewer_component_1 = require('./dataset-viewer.component');
var dataset_service_1 = require('./dataset.service');
require('rxjs/add/operator/map');
var WarehouseComponent = (function () {
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
            templateUrl: 'warehouse/warehouse.html',
            directives: [dataset_viewer_component_1.DatasetViewerComponent],
            providers: [dataset_service_1.DatasetService],
            styleUrls: ['warehouse/warehouse.css']
        }), 
        __metadata('design:paramtypes', [dataset_service_1.DatasetService])
    ], WarehouseComponent);
    return WarehouseComponent;
}());
exports.WarehouseComponent = WarehouseComponent;
//# sourceMappingURL=warehouse.component.js.map