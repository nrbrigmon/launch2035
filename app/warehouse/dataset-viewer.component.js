System.register(['@angular/core', './fileTypeFilter.pipe', './fileNameFilter.pipe'], function(exports_1, context_1) {
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
    var core_1, fileTypeFilter_pipe_1, fileNameFilter_pipe_1;
    var DatasetViewerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (fileTypeFilter_pipe_1_1) {
                fileTypeFilter_pipe_1 = fileTypeFilter_pipe_1_1;
            },
            function (fileNameFilter_pipe_1_1) {
                fileNameFilter_pipe_1 = fileNameFilter_pipe_1_1;
            }],
        execute: function() {
            DatasetViewerComponent = (function () {
                function DatasetViewerComponent() {
                    this.geography = Array();
                    this._selection = 'all';
                    this.bObj = '';
                }
                DatasetViewerComponent.prototype.fileSelection = function (s) {
                    console.log(s);
                    this._selection = s;
                    this.bObj = s;
                };
                DatasetViewerComponent = __decorate([
                    core_1.Component({
                        selector: 'dataset-viewer-component',
                        styleUrls: ['./dev/warehouse/warehouse.css'],
                        templateUrl: './dev/warehouse/warehouse-viewer.html',
                        inputs: ['geography'],
                        pipes: [fileNameFilter_pipe_1.FileNamePipe, fileTypeFilter_pipe_1.FileTypePipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DatasetViewerComponent);
                return DatasetViewerComponent;
            }());
            exports_1("DatasetViewerComponent", DatasetViewerComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhcmVob3VzZS9kYXRhc2V0LXZpZXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFBQTtvQkFDRSxjQUFTLEdBQUcsS0FBSyxFQUFtQixDQUFDO29CQUNyQyxlQUFVLEdBQUcsS0FBSyxDQUFDO29CQUNuQixTQUFJLEdBQVUsRUFBRSxDQUFDO2dCQVFuQixDQUFDO2dCQU5DLDhDQUFhLEdBQWIsVUFBYyxDQUFRO29CQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNmLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO29CQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztnQkFDaEIsQ0FBQztnQkFqQkg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUMsMEJBQTBCO3dCQUNuQyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQzt3QkFDNUMsV0FBVyxFQUFFLHVDQUF1Qzt3QkFDcEQsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDO3dCQUNyQixLQUFLLEVBQUUsQ0FBQyxrQ0FBWSxFQUFFLGtDQUFZLENBQUM7cUJBQ3BDLENBQUM7OzBDQUFBO2dCQWFGLDZCQUFDO1lBQUQsQ0FYQSxBQVdDLElBQUE7WUFYRCwyREFXQyxDQUFBIiwiZmlsZSI6IndhcmVob3VzZS9kYXRhc2V0LXZpZXdlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlZ2lvbmFsRGF0YXNldH0gZnJvbSAnLi9kYXRhc2V0LnNjaGVtYSc7XG5pbXBvcnQge0ZpbGVUeXBlUGlwZX0gZnJvbSAnLi9maWxlVHlwZUZpbHRlci5waXBlJztcbmltcG9ydCB7RmlsZU5hbWVQaXBlfSBmcm9tICcuL2ZpbGVOYW1lRmlsdGVyLnBpcGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6J2RhdGFzZXQtdmlld2VyLWNvbXBvbmVudCcsXG4gIHN0eWxlVXJsczogWycuL2Rldi93YXJlaG91c2Uvd2FyZWhvdXNlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZGV2L3dhcmVob3VzZS93YXJlaG91c2Utdmlld2VyLmh0bWwnLFxuICBpbnB1dHM6IFsnZ2VvZ3JhcGh5J10sXG4gIHBpcGVzOiBbRmlsZU5hbWVQaXBlLCBGaWxlVHlwZVBpcGVdXG59KVxuXG5leHBvcnQgY2xhc3MgRGF0YXNldFZpZXdlckNvbXBvbmVudCB7XG4gIGdlb2dyYXBoeSA9IEFycmF5PFJlZ2lvbmFsRGF0YXNldD4oKTtcbiAgX3NlbGVjdGlvbiA9ICdhbGwnO1xuICBiT2JqOnN0cmluZyA9ICcnO1xuXG4gIGZpbGVTZWxlY3Rpb24oczpzdHJpbmcpe1xuICAgIGNvbnNvbGUubG9nKHMpO1xuICAgIHRoaXMuX3NlbGVjdGlvbiA9IHM7XG4gICAgdGhpcy5iT2JqID0gcztcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
