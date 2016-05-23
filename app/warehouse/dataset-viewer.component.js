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
                    this._selection = 'All';
                    this.bObj = '';
                }
                DatasetViewerComponent.prototype.fileSelection = function (s) {
                    this._selection = s;
                    this.bObj = s;
                };
                DatasetViewerComponent.prototype.onDownloadClick = function () {
                    alert("Your download will start shortly... in theory");
                };
                DatasetViewerComponent = __decorate([
                    core_1.Component({
                        selector: 'dataset-viewer-component',
                        styleUrls: ['./dev/warehouse/warehouse.css'],
                        templateUrl: './dev/warehouse/warehouse-viewer.html',
                        inputs: ['geography', 'searchInitiated'],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhcmVob3VzZS9kYXRhc2V0LXZpZXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFBQTtvQkFDRSxjQUFTLEdBQUcsS0FBSyxFQUFtQixDQUFDO29CQUNyQyxlQUFVLEdBQUcsS0FBSyxDQUFDO29CQUNuQixTQUFJLEdBQVUsRUFBRSxDQUFDO2dCQVNuQixDQUFDO2dCQVBDLDhDQUFhLEdBQWIsVUFBYyxDQUFRO29CQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztvQkFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLENBQUM7Z0JBQ0QsZ0RBQWUsR0FBZjtvQkFDRSxLQUFLLENBQUMsK0NBQStDLENBQUMsQ0FBQztnQkFDekQsQ0FBQztnQkFuQkg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUMsMEJBQTBCO3dCQUNuQyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQzt3QkFDNUMsV0FBVyxFQUFFLHVDQUF1Qzt3QkFDcEQsTUFBTSxFQUFFLENBQUMsV0FBVyxFQUFFLGlCQUFpQixDQUFDO3dCQUN4QyxLQUFLLEVBQUUsQ0FBQyxrQ0FBWSxFQUFFLGtDQUFZLENBQUM7cUJBQ3BDLENBQUM7OzBDQUFBO2dCQWNGLDZCQUFDO1lBQUQsQ0FaQSxBQVlDLElBQUE7WUFaRCwyREFZQyxDQUFBIiwiZmlsZSI6IndhcmVob3VzZS9kYXRhc2V0LXZpZXdlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlZ2lvbmFsRGF0YXNldH0gZnJvbSAnLi9kYXRhc2V0LnNjaGVtYSc7XG5pbXBvcnQge0ZpbGVUeXBlUGlwZX0gZnJvbSAnLi9maWxlVHlwZUZpbHRlci5waXBlJztcbmltcG9ydCB7RmlsZU5hbWVQaXBlfSBmcm9tICcuL2ZpbGVOYW1lRmlsdGVyLnBpcGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6J2RhdGFzZXQtdmlld2VyLWNvbXBvbmVudCcsXG4gIHN0eWxlVXJsczogWycuL2Rldi93YXJlaG91c2Uvd2FyZWhvdXNlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZGV2L3dhcmVob3VzZS93YXJlaG91c2Utdmlld2VyLmh0bWwnLFxuICBpbnB1dHM6IFsnZ2VvZ3JhcGh5JywgJ3NlYXJjaEluaXRpYXRlZCddLFxuICBwaXBlczogW0ZpbGVOYW1lUGlwZSwgRmlsZVR5cGVQaXBlXVxufSlcblxuZXhwb3J0IGNsYXNzIERhdGFzZXRWaWV3ZXJDb21wb25lbnQge1xuICBnZW9ncmFwaHkgPSBBcnJheTxSZWdpb25hbERhdGFzZXQ+KCk7XG4gIF9zZWxlY3Rpb24gPSAnQWxsJztcbiAgYk9iajpzdHJpbmcgPSAnJztcblxuICBmaWxlU2VsZWN0aW9uKHM6c3RyaW5nKXtcbiAgICB0aGlzLl9zZWxlY3Rpb24gPSBzO1xuICAgIHRoaXMuYk9iaiA9IHM7XG4gIH1cbiAgb25Eb3dubG9hZENsaWNrKCl7XG4gICAgYWxlcnQoXCJZb3VyIGRvd25sb2FkIHdpbGwgc3RhcnQgc2hvcnRseS4uLiBpbiB0aGVvcnlcIik7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
