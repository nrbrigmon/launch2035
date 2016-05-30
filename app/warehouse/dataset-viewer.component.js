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
var fileTypeFilter_pipe_1 = require('./fileTypeFilter.pipe');
var fileNameFilter_pipe_1 = require('./fileNameFilter.pipe');
var DatasetViewerComponent = (function () {
    function DatasetViewerComponent() {
        this.geography = Array();
        this._selection = 'All';
        this.bObj = '';
    }
    DatasetViewerComponent.prototype.fileSelection = function (s) {
        this._selection = s;
        this.bObj = s;
    };
    DatasetViewerComponent.prototype.onDownloadClick = function (file) {
        console.log(file.Link);
        window.open(file.Link);
    };
    DatasetViewerComponent = __decorate([
        core_1.Component({
            selector: 'dataset-viewer-component',
            styleUrls: ['./warehouse/warehouse.css'],
            templateUrl: './warehouse/warehouse-viewer.html',
            inputs: ['geography', 'searchInitiated'],
            pipes: [fileNameFilter_pipe_1.FileNamePipe, fileTypeFilter_pipe_1.FileTypePipe]
        }), 
        __metadata('design:paramtypes', [])
    ], DatasetViewerComponent);
    return DatasetViewerComponent;
}());
exports.DatasetViewerComponent = DatasetViewerComponent;
//# sourceMappingURL=dataset-viewer.component.js.map