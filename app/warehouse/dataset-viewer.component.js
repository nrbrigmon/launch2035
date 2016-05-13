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
                    this._selection = s;
                    this.bObj = s;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhcmVob3VzZS9kYXRhc2V0LXZpZXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFBQTtvQkFDRSxjQUFTLEdBQUcsS0FBSyxFQUFtQixDQUFDO29CQUNyQyxlQUFVLEdBQUcsS0FBSyxDQUFDO29CQUNuQixTQUFJLEdBQVUsRUFBRSxDQUFDO2dCQU9uQixDQUFDO2dCQUxDLDhDQUFhLEdBQWIsVUFBYyxDQUFRO29CQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztvQkFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLENBQUM7Z0JBaEJIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFDLDBCQUEwQjt3QkFDbkMsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7d0JBQzVDLFdBQVcsRUFBRSx1Q0FBdUM7d0JBQ3BELE1BQU0sRUFBRSxDQUFDLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQzt3QkFDeEMsS0FBSyxFQUFFLENBQUMsa0NBQVksRUFBRSxrQ0FBWSxDQUFDO3FCQUNwQyxDQUFDOzswQ0FBQTtnQkFZRiw2QkFBQztZQUFELENBVkEsQUFVQyxJQUFBO1lBVkQsMkRBVUMsQ0FBQSIsImZpbGUiOiJ3YXJlaG91c2UvZGF0YXNldC12aWV3ZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSZWdpb25hbERhdGFzZXR9IGZyb20gJy4vZGF0YXNldC5zY2hlbWEnO1xuaW1wb3J0IHtGaWxlVHlwZVBpcGV9IGZyb20gJy4vZmlsZVR5cGVGaWx0ZXIucGlwZSc7XG5pbXBvcnQge0ZpbGVOYW1lUGlwZX0gZnJvbSAnLi9maWxlTmFtZUZpbHRlci5waXBlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOidkYXRhc2V0LXZpZXdlci1jb21wb25lbnQnLFxuICBzdHlsZVVybHM6IFsnLi9kZXYvd2FyZWhvdXNlL3dhcmVob3VzZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2Rldi93YXJlaG91c2Uvd2FyZWhvdXNlLXZpZXdlci5odG1sJyxcbiAgaW5wdXRzOiBbJ2dlb2dyYXBoeScsICdzZWFyY2hJbml0aWF0ZWQnXSxcbiAgcGlwZXM6IFtGaWxlTmFtZVBpcGUsIEZpbGVUeXBlUGlwZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXRhc2V0Vmlld2VyQ29tcG9uZW50IHtcbiAgZ2VvZ3JhcGh5ID0gQXJyYXk8UmVnaW9uYWxEYXRhc2V0PigpO1xuICBfc2VsZWN0aW9uID0gJ2FsbCc7XG4gIGJPYmo6c3RyaW5nID0gJyc7XG5cbiAgZmlsZVNlbGVjdGlvbihzOnN0cmluZyl7XG4gICAgdGhpcy5fc2VsZWN0aW9uID0gcztcbiAgICB0aGlzLmJPYmogPSBzO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
