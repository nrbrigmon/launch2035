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
    var DatasetService, regional_dataset, limestone_dataset, morgan_dataset, madison_dataset;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DatasetService = (function () {
                function DatasetService() {
                }
                // constructor(private _http: Http) {}
                // getDataByGeography(): Observable<RegionalDataset>{
                //     console.log('getting json?');
                //     return this._http.get('/app/json/MOCK_DATA_1.json').map(response => response.json());
                // }
                DatasetService.prototype.getDataByGeography = function (s) {
                    if (s === 'reg') {
                        return regional_dataset;
                    }
                    else if (s === 'lim') {
                        return limestone_dataset;
                    }
                    else if (s === 'mor') {
                        return morgan_dataset;
                    }
                    else if (s === 'mad') {
                        return madison_dataset;
                    }
                };
                DatasetService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DatasetService);
                return DatasetService;
            }());
            exports_1("DatasetService", DatasetService);
            regional_dataset = [
                {
                    "Geo": "Reg",
                    "Name": "US Census Places/Cities",
                    "Description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                    "Type": "shp",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "MPO TAZ Layer Regional",
                    "Description": "Nunc scelerisque dolor in purus ullamcorper, eget venenatis enim pulvinar.",
                    "Type": "shp",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Huntsville MPO TAZ",
                    "Description": "Proin faucibus vulputate felis quis placerat. Etiam quis tincidunt felis.",
                    "Type": "shp",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Decatur MPO TAZ",
                    "Description": "Nam sit amet nisi nec sapien mollis malesuada blandit nec lacus.",
                    "Type": "shp",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Watersheds",
                    "Description": "Etiam tempor ullamcorper sollicitudin. Vestibulum a mauris in augue condimentum vehicula.",
                    "Type": "shp",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Ecoregions",
                    "Description": "Nullam finibus a massa eget tincidunt.  Phasellus auctor tempor pharetra.",
                    "Type": "shp",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "US Census Places/Cities",
                    "Description": "Sed feugiat enim enim, quis ultrices velit malesuada sed. Suspendisse potenti.",
                    "Type": "table",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "MPO TAZ Layer Regional",
                    "Description": "In aliquam orci non turpis pellentesque cursus. Vivamus pulvinar volutpat mauris sit amet ultrices.",
                    "Type": "table",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Huntsville MPO TAZ",
                    "Description": "Nam fringilla accumsan rutrum. Fusce tincidunt pretium ante, id tincidunt lorem. Nam sollicitudin nisl nunc, ac mattis ante tristique hendrerit.",
                    "Type": "table",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Decatur MPO TAZ",
                    "Description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                    "Type": "table",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Watersheds",
                    "Description": "Nunc scelerisque dolor in purus ullamcorper, eget venenatis enim pulvinar.",
                    "Type": "table",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Ecoregions",
                    "Description": "Proin faucibus vulputate felis quis placerat. Etiam quis tincidunt felis.",
                    "Type": "table",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Huntsville Downtown Master Plan",
                    "Description": "Nam sit amet nisi nec sapien mollis malesuada blandit nec lacus.",
                    "Type": "report",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Huntsville Land Use By Zoning 2015",
                    "Description": "Etiam tempor ullamcorper sollicitudin. Vestibulum a mauris in augue condimentum vehicula.",
                    "Type": "report",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Huntsville Downtown Proposed Zoning Map 2005",
                    "Description": "Nullam finibus a massa eget tincidunt.  Phasellus auctor tempor pharetra.",
                    "Type": "report",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Huntsville Area Transportation Study",
                    "Description": "Sed feugiat enim enim, quis ultrices velit malesuada sed. Suspendisse potenti.",
                    "Type": "report",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "City of Madison Growth Plan",
                    "Description": "In aliquam orci non turpis pellentesque cursus. Vivamus pulvinar volutpat mauris sit amet ultrices.",
                    "Type": "report",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "City of Madison Zoning Map",
                    "Description": "Nam fringilla accumsan rutrum. Fusce tincidunt pretium ante, id tincidunt lorem. Nam sollicitudin nisl nunc, ac mattis ante tristique hendrerit.",
                    "Type": "report",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Athens Future Land Use Development Plan",
                    "Description": "In aliquam orci non turpis pellentesque cursus. Vivamus pulvinar volutpat mauris sit amet ultrices.",
                    "Type": "report",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Falkville Zoning Map",
                    "Description": "Nam fringilla accumsan rutrum. Fusce tincidunt pretium ante, id tincidunt lorem. Nam sollicitudin nisl nunc, ac mattis ante tristique hendrerit.",
                    "Type": "report",
                    "Link": "<a target='_blank' href=''>Download</a>"
                }
            ];
            limestone_dataset = [
                {
                    "Geo": "Reg",
                    "Name": "US Census Places/Cities",
                    "Description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                    "Type": "shp",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "MPO TAZ Layer Regional",
                    "Description": "Nunc scelerisque dolor in purus ullamcorper, eget venenatis enim pulvinar.",
                    "Type": "shp",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Huntsville MPO TAZ",
                    "Description": "Proin faucibus vulputate felis quis placerat. Etiam quis tincidunt felis.",
                    "Type": "shp",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Decatur MPO TAZ",
                    "Description": "Nam sit amet nisi nec sapien mollis malesuada blandit nec lacus.",
                    "Type": "shp",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Watersheds",
                    "Description": "Etiam tempor ullamcorper sollicitudin. Vestibulum a mauris in augue condimentum vehicula.",
                    "Type": "shp",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Ecoregions",
                    "Description": "Nullam finibus a massa eget tincidunt.  Phasellus auctor tempor pharetra.",
                    "Type": "shp",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "US Census Places/Cities",
                    "Description": "Sed feugiat enim enim, quis ultrices velit malesuada sed. Suspendisse potenti.",
                    "Type": "table",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "MPO TAZ Layer Regional",
                    "Description": "In aliquam orci non turpis pellentesque cursus. Vivamus pulvinar volutpat mauris sit amet ultrices.",
                    "Type": "table",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Huntsville MPO TAZ",
                    "Description": "Nam fringilla accumsan rutrum. Fusce tincidunt pretium ante, id tincidunt lorem. Nam sollicitudin nisl nunc, ac mattis ante tristique hendrerit.",
                    "Type": "table",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Decatur MPO TAZ",
                    "Description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                    "Type": "table",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Watersheds",
                    "Description": "Nunc scelerisque dolor in purus ullamcorper, eget venenatis enim pulvinar.",
                    "Type": "table",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Ecoregions",
                    "Description": "Proin faucibus vulputate felis quis placerat. Etiam quis tincidunt felis.",
                    "Type": "table",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Huntsville Downtown Master Plan",
                    "Description": "Nam sit amet nisi nec sapien mollis malesuada blandit nec lacus.",
                    "Type": "report",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Huntsville Land Use By Zoning 2015",
                    "Description": "Etiam tempor ullamcorper sollicitudin. Vestibulum a mauris in augue condimentum vehicula.",
                    "Type": "report",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Huntsville Downtown Proposed Zoning Map 2005",
                    "Description": "Nullam finibus a massa eget tincidunt.  Phasellus auctor tempor pharetra.",
                    "Type": "report",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Huntsville Area Transportation Study",
                    "Description": "Sed feugiat enim enim, quis ultrices velit malesuada sed. Suspendisse potenti.",
                    "Type": "report",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "City of Madison Growth Plan",
                    "Description": "In aliquam orci non turpis pellentesque cursus. Vivamus pulvinar volutpat mauris sit amet ultrices.",
                    "Type": "report",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "City of Madison Zoning Map",
                    "Description": "Nam fringilla accumsan rutrum. Fusce tincidunt pretium ante, id tincidunt lorem. Nam sollicitudin nisl nunc, ac mattis ante tristique hendrerit.",
                    "Type": "report",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Athens Future Land Use Development Plan",
                    "Description": "In aliquam orci non turpis pellentesque cursus. Vivamus pulvinar volutpat mauris sit amet ultrices.",
                    "Type": "report",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Falkville Zoning Map",
                    "Description": "Nam fringilla accumsan rutrum. Fusce tincidunt pretium ante, id tincidunt lorem. Nam sollicitudin nisl nunc, ac mattis ante tristique hendrerit.",
                    "Type": "report",
                    "Link": "<a target='_blank' href=''>Download</a>"
                }
            ];
            morgan_dataset = [
                {
                    "Geo": "Reg",
                    "Name": "US Census Places/Cities",
                    "Description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                    "Type": "shp",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "MPO TAZ Layer Regional",
                    "Description": "Nunc scelerisque dolor in purus ullamcorper, eget venenatis enim pulvinar.",
                    "Type": "shp",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Huntsville MPO TAZ",
                    "Description": "Proin faucibus vulputate felis quis placerat. Etiam quis tincidunt felis.",
                    "Type": "shp",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Decatur MPO TAZ",
                    "Description": "Nam sit amet nisi nec sapien mollis malesuada blandit nec lacus.",
                    "Type": "shp",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Watersheds",
                    "Description": "Etiam tempor ullamcorper sollicitudin. Vestibulum a mauris in augue condimentum vehicula.",
                    "Type": "shp",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Ecoregions",
                    "Description": "Nullam finibus a massa eget tincidunt.  Phasellus auctor tempor pharetra.",
                    "Type": "shp",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "US Census Places/Cities",
                    "Description": "Sed feugiat enim enim, quis ultrices velit malesuada sed. Suspendisse potenti.",
                    "Type": "table",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "MPO TAZ Layer Regional",
                    "Description": "In aliquam orci non turpis pellentesque cursus. Vivamus pulvinar volutpat mauris sit amet ultrices.",
                    "Type": "table",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Huntsville MPO TAZ",
                    "Description": "Nam fringilla accumsan rutrum. Fusce tincidunt pretium ante, id tincidunt lorem. Nam sollicitudin nisl nunc, ac mattis ante tristique hendrerit.",
                    "Type": "table",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Decatur MPO TAZ",
                    "Description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                    "Type": "table",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Watersheds",
                    "Description": "Nunc scelerisque dolor in purus ullamcorper, eget venenatis enim pulvinar.",
                    "Type": "table",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Ecoregions",
                    "Description": "Proin faucibus vulputate felis quis placerat. Etiam quis tincidunt felis.",
                    "Type": "table",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Huntsville Downtown Master Plan",
                    "Description": "Nam sit amet nisi nec sapien mollis malesuada blandit nec lacus.",
                    "Type": "report",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Huntsville Land Use By Zoning 2015",
                    "Description": "Etiam tempor ullamcorper sollicitudin. Vestibulum a mauris in augue condimentum vehicula.",
                    "Type": "report",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Huntsville Downtown Proposed Zoning Map 2005",
                    "Description": "Nullam finibus a massa eget tincidunt.  Phasellus auctor tempor pharetra.",
                    "Type": "report",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Huntsville Area Transportation Study",
                    "Description": "Sed feugiat enim enim, quis ultrices velit malesuada sed. Suspendisse potenti.",
                    "Type": "report",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "City of Madison Growth Plan",
                    "Description": "In aliquam orci non turpis pellentesque cursus. Vivamus pulvinar volutpat mauris sit amet ultrices.",
                    "Type": "report",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "City of Madison Zoning Map",
                    "Description": "Nam fringilla accumsan rutrum. Fusce tincidunt pretium ante, id tincidunt lorem. Nam sollicitudin nisl nunc, ac mattis ante tristique hendrerit.",
                    "Type": "report",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Athens Future Land Use Development Plan",
                    "Description": "In aliquam orci non turpis pellentesque cursus. Vivamus pulvinar volutpat mauris sit amet ultrices.",
                    "Type": "report",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Falkville Zoning Map",
                    "Description": "Nam fringilla accumsan rutrum. Fusce tincidunt pretium ante, id tincidunt lorem. Nam sollicitudin nisl nunc, ac mattis ante tristique hendrerit.",
                    "Type": "report",
                    "Link": "<a target='_blank' href=''>Download</a>"
                }
            ];
            madison_dataset = [
                {
                    "Geo": "Reg",
                    "Name": "US Census Places/Cities",
                    "Description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                    "Type": "shp",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "MPO TAZ Layer Regional",
                    "Description": "Nunc scelerisque dolor in purus ullamcorper, eget venenatis enim pulvinar.",
                    "Type": "shp",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Huntsville MPO TAZ",
                    "Description": "Proin faucibus vulputate felis quis placerat. Etiam quis tincidunt felis.",
                    "Type": "shp",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Decatur MPO TAZ",
                    "Description": "Nam sit amet nisi nec sapien mollis malesuada blandit nec lacus.",
                    "Type": "shp",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Watersheds",
                    "Description": "Etiam tempor ullamcorper sollicitudin. Vestibulum a mauris in augue condimentum vehicula.",
                    "Type": "shp",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Ecoregions",
                    "Description": "Nullam finibus a massa eget tincidunt.  Phasellus auctor tempor pharetra.",
                    "Type": "shp",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "US Census Places/Cities",
                    "Description": "Sed feugiat enim enim, quis ultrices velit malesuada sed. Suspendisse potenti.",
                    "Type": "table",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "MPO TAZ Layer Regional",
                    "Description": "In aliquam orci non turpis pellentesque cursus. Vivamus pulvinar volutpat mauris sit amet ultrices.",
                    "Type": "table",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Huntsville MPO TAZ",
                    "Description": "Nam fringilla accumsan rutrum. Fusce tincidunt pretium ante, id tincidunt lorem. Nam sollicitudin nisl nunc, ac mattis ante tristique hendrerit.",
                    "Type": "table",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Decatur MPO TAZ",
                    "Description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                    "Type": "table",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Watersheds",
                    "Description": "Nunc scelerisque dolor in purus ullamcorper, eget venenatis enim pulvinar.",
                    "Type": "table",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Ecoregions",
                    "Description": "Proin faucibus vulputate felis quis placerat. Etiam quis tincidunt felis.",
                    "Type": "table",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Huntsville Downtown Master Plan",
                    "Description": "Nam sit amet nisi nec sapien mollis malesuada blandit nec lacus.",
                    "Type": "report",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Huntsville Land Use By Zoning 2015",
                    "Description": "Etiam tempor ullamcorper sollicitudin. Vestibulum a mauris in augue condimentum vehicula.",
                    "Type": "report",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Huntsville Downtown Proposed Zoning Map 2005",
                    "Description": "Nullam finibus a massa eget tincidunt.  Phasellus auctor tempor pharetra.",
                    "Type": "report",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Huntsville Area Transportation Study",
                    "Description": "Sed feugiat enim enim, quis ultrices velit malesuada sed. Suspendisse potenti.",
                    "Type": "report",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "City of Madison Growth Plan",
                    "Description": "In aliquam orci non turpis pellentesque cursus. Vivamus pulvinar volutpat mauris sit amet ultrices.",
                    "Type": "report",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "City of Madison Zoning Map",
                    "Description": "Nam fringilla accumsan rutrum. Fusce tincidunt pretium ante, id tincidunt lorem. Nam sollicitudin nisl nunc, ac mattis ante tristique hendrerit.",
                    "Type": "report",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Athens Future Land Use Development Plan",
                    "Description": "In aliquam orci non turpis pellentesque cursus. Vivamus pulvinar volutpat mauris sit amet ultrices.",
                    "Type": "report",
                    "Link": "<a target='_blank' href=''>Download</a>"
                },
                {
                    "Geo": "Reg",
                    "Name": "Falkville Zoning Map",
                    "Description": "Nam fringilla accumsan rutrum. Fusce tincidunt pretium ante, id tincidunt lorem. Nam sollicitudin nisl nunc, ac mattis ante tristique hendrerit.",
                    "Type": "report",
                    "Link": "<a target='_blank' href=''>Download</a>"
                }
            ];
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhcmVob3VzZS9kYXRhc2V0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozt3QkEwQkksZ0JBQWdCLEVBOEloQixpQkFBaUIsRUE4SWpCLGNBQWMsRUE4SWQsZUFBZTs7Ozs7OztZQWhjbkI7Z0JBQUE7Z0JBbUJBLENBQUM7Z0JBakJDLHNDQUFzQztnQkFDdEMscURBQXFEO2dCQUNyRCxvQ0FBb0M7Z0JBQ3BDLDRGQUE0RjtnQkFDNUYsSUFBSTtnQkFFSiwyQ0FBa0IsR0FBbEIsVUFBbUIsQ0FBUTtvQkFDekIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFBLENBQUM7d0JBQ2YsTUFBTSxDQUFDLGdCQUFnQixDQUFDO29CQUMxQixDQUFDO29CQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQzt3QkFDdkIsTUFBTSxDQUFDLGlCQUFpQixDQUFDO29CQUMzQixDQUFDO29CQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQzt3QkFDdkIsTUFBTSxDQUFDLGNBQWMsQ0FBQztvQkFDeEIsQ0FBQztvQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ3ZCLE1BQU0sQ0FBQyxlQUFlLENBQUM7b0JBQ3pCLENBQUM7Z0JBQ0gsQ0FBQztnQkFuQkg7b0JBQUMsaUJBQVUsRUFBRTs7a0NBQUE7Z0JBb0JiLHFCQUFDO1lBQUQsQ0FuQkEsQUFtQkMsSUFBQTtZQW5CRCwyQ0FtQkMsQ0FBQTtZQUdHLGdCQUFnQixHQUEyQjtnQkFDN0M7b0JBQ0UsS0FBSyxFQUFFLEtBQUs7b0JBQ1osTUFBTSxFQUFFLHlCQUF5QjtvQkFDakMsYUFBYSxFQUFFLDZGQUE2RjtvQkFDNUcsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsTUFBTSxFQUFFLHlDQUF5Qztp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RSx5Q0FBeUM7aUJBQ2xEO2dCQUNEO29CQUNFLEtBQUssRUFBRSxLQUFLO29CQUNaLE1BQU0sRUFBRSxzQkFBc0I7b0JBQzlCLGFBQWEsRUFBRSxrSkFBa0o7b0JBQ2pLLE1BQU0sRUFBRSxRQUFRO29CQUNoQixNQUFNLEVBQUUseUNBQXlDO2lCQUNsRDthQUNGLENBQUMiLCJmaWxlIjoid2FyZWhvdXNlL2RhdGFzZXQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlZ2lvbmFsRGF0YXNldH0gZnJvbSAnLi9kYXRhc2V0LnNjaGVtYSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhc2V0U2VydmljZSB7XG5cbiAgLy8gY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge31cbiAgLy8gZ2V0RGF0YUJ5R2VvZ3JhcGh5KCk6IE9ic2VydmFibGU8UmVnaW9uYWxEYXRhc2V0PntcbiAgLy8gICAgIGNvbnNvbGUubG9nKCdnZXR0aW5nIGpzb24/Jyk7XG4gIC8vICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoJy9hcHAvanNvbi9NT0NLX0RBVEFfMS5qc29uJykubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gIC8vIH1cblxuICBnZXREYXRhQnlHZW9ncmFwaHkoczpzdHJpbmcpe1xuICAgIGlmIChzID09PSAncmVnJyl7XG4gICAgICByZXR1cm4gcmVnaW9uYWxfZGF0YXNldDtcbiAgICB9IGVsc2UgaWYgKHMgPT09ICdsaW0nKSB7XG4gICAgICByZXR1cm4gbGltZXN0b25lX2RhdGFzZXQ7XG4gICAgfSBlbHNlIGlmIChzID09PSAnbW9yJykge1xuICAgICAgcmV0dXJuIG1vcmdhbl9kYXRhc2V0O1xuICAgIH0gZWxzZSBpZiAocyA9PT0gJ21hZCcpIHtcbiAgICAgIHJldHVybiBtYWRpc29uX2RhdGFzZXQ7XG4gICAgfVxuICB9XG59XG5cblxubGV0IHJlZ2lvbmFsX2RhdGFzZXQ6IEFycmF5PFJlZ2lvbmFsRGF0YXNldD4gPSBbXG4gIHtcbiAgICBcIkdlb1wiOiBcIlJlZ1wiLFxuICAgIFwiTmFtZVwiOiBcIlVTIENlbnN1cyBQbGFjZXMvQ2l0aWVzXCIsXG4gICAgXCJEZXNjcmlwdGlvblwiOiBcIkNsYXNzIGFwdGVudCB0YWNpdGkgc29jaW9zcXUgYWQgbGl0b3JhIHRvcnF1ZW50IHBlciBjb251YmlhIG5vc3RyYSwgcGVyIGluY2VwdG9zIGhpbWVuYWVvcy5cIixcbiAgICBcIlR5cGVcIjogXCJzaHBcIixcbiAgICBcIkxpbmtcIjogXCI8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0nJz5Eb3dubG9hZDwvYT5cIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJNUE8gVEFaIExheWVyIFJlZ2lvbmFsXCIsXG4gICAgXCJEZXNjcmlwdGlvblwiOiBcIk51bmMgc2NlbGVyaXNxdWUgZG9sb3IgaW4gcHVydXMgdWxsYW1jb3JwZXIsIGVnZXQgdmVuZW5hdGlzIGVuaW0gcHVsdmluYXIuXCIsXG4gICAgXCJUeXBlXCI6IFwic2hwXCIsXG4gICAgXCJMaW5rXCI6IFwiPGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9Jyc+RG93bmxvYWQ8L2E+XCJcbiAgfSxcbiAge1xuICAgIFwiR2VvXCI6IFwiUmVnXCIsXG4gICAgXCJOYW1lXCI6IFwiSHVudHN2aWxsZSBNUE8gVEFaXCIsXG4gICAgXCJEZXNjcmlwdGlvblwiOiBcIlByb2luIGZhdWNpYnVzIHZ1bHB1dGF0ZSBmZWxpcyBxdWlzIHBsYWNlcmF0LiBFdGlhbSBxdWlzIHRpbmNpZHVudCBmZWxpcy5cIixcbiAgICBcIlR5cGVcIjogXCJzaHBcIixcbiAgICBcIkxpbmtcIjogXCI8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0nJz5Eb3dubG9hZDwvYT5cIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJEZWNhdHVyIE1QTyBUQVpcIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiTmFtIHNpdCBhbWV0IG5pc2kgbmVjIHNhcGllbiBtb2xsaXMgbWFsZXN1YWRhIGJsYW5kaXQgbmVjIGxhY3VzLlwiLFxuICAgIFwiVHlwZVwiOiBcInNocFwiLFxuICAgIFwiTGlua1wiOiBcIjxhIHRhcmdldD0nX2JsYW5rJyBocmVmPScnPkRvd25sb2FkPC9hPlwiXG4gIH0sXG4gIHtcbiAgICBcIkdlb1wiOiBcIlJlZ1wiLFxuICAgIFwiTmFtZVwiOiBcIldhdGVyc2hlZHNcIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiRXRpYW0gdGVtcG9yIHVsbGFtY29ycGVyIHNvbGxpY2l0dWRpbi4gVmVzdGlidWx1bSBhIG1hdXJpcyBpbiBhdWd1ZSBjb25kaW1lbnR1bSB2ZWhpY3VsYS5cIixcbiAgICBcIlR5cGVcIjogXCJzaHBcIixcbiAgICBcIkxpbmtcIjogXCI8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0nJz5Eb3dubG9hZDwvYT5cIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJFY29yZWdpb25zXCIsXG4gICAgXCJEZXNjcmlwdGlvblwiOiBcIk51bGxhbSBmaW5pYnVzIGEgbWFzc2EgZWdldCB0aW5jaWR1bnQuICBQaGFzZWxsdXMgYXVjdG9yIHRlbXBvciBwaGFyZXRyYS5cIixcbiAgICBcIlR5cGVcIjogXCJzaHBcIixcbiAgICBcIkxpbmtcIjogXCI8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0nJz5Eb3dubG9hZDwvYT5cIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJVUyBDZW5zdXMgUGxhY2VzL0NpdGllc1wiLFxuICAgIFwiRGVzY3JpcHRpb25cIjogXCJTZWQgZmV1Z2lhdCBlbmltIGVuaW0sIHF1aXMgdWx0cmljZXMgdmVsaXQgbWFsZXN1YWRhIHNlZC4gU3VzcGVuZGlzc2UgcG90ZW50aS5cIixcbiAgICBcIlR5cGVcIjogXCJ0YWJsZVwiLFxuICAgIFwiTGlua1wiOiBcIjxhIHRhcmdldD0nX2JsYW5rJyBocmVmPScnPkRvd25sb2FkPC9hPlwiXG4gIH0sXG4gIHtcbiAgICBcIkdlb1wiOiBcIlJlZ1wiLFxuICAgIFwiTmFtZVwiOiBcIk1QTyBUQVogTGF5ZXIgUmVnaW9uYWxcIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiSW4gYWxpcXVhbSBvcmNpIG5vbiB0dXJwaXMgcGVsbGVudGVzcXVlIGN1cnN1cy4gVml2YW11cyBwdWx2aW5hciB2b2x1dHBhdCBtYXVyaXMgc2l0IGFtZXQgdWx0cmljZXMuXCIsXG4gICAgXCJUeXBlXCI6IFwidGFibGVcIixcbiAgICBcIkxpbmtcIjogXCI8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0nJz5Eb3dubG9hZDwvYT5cIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJIdW50c3ZpbGxlIE1QTyBUQVpcIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiTmFtIGZyaW5naWxsYSBhY2N1bXNhbiBydXRydW0uIEZ1c2NlIHRpbmNpZHVudCBwcmV0aXVtIGFudGUsIGlkIHRpbmNpZHVudCBsb3JlbS4gTmFtIHNvbGxpY2l0dWRpbiBuaXNsIG51bmMsIGFjIG1hdHRpcyBhbnRlIHRyaXN0aXF1ZSBoZW5kcmVyaXQuXCIsXG4gICAgXCJUeXBlXCI6IFwidGFibGVcIixcbiAgICBcIkxpbmtcIjogXCI8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0nJz5Eb3dubG9hZDwvYT5cIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJEZWNhdHVyIE1QTyBUQVpcIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiQ2xhc3MgYXB0ZW50IHRhY2l0aSBzb2Npb3NxdSBhZCBsaXRvcmEgdG9ycXVlbnQgcGVyIGNvbnViaWEgbm9zdHJhLCBwZXIgaW5jZXB0b3MgaGltZW5hZW9zLlwiLFxuICAgIFwiVHlwZVwiOiBcInRhYmxlXCIsXG4gICAgXCJMaW5rXCI6IFwiPGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9Jyc+RG93bmxvYWQ8L2E+XCJcbiAgfSxcbiAge1xuICAgIFwiR2VvXCI6IFwiUmVnXCIsXG4gICAgXCJOYW1lXCI6IFwiV2F0ZXJzaGVkc1wiLFxuICAgIFwiRGVzY3JpcHRpb25cIjogXCJOdW5jIHNjZWxlcmlzcXVlIGRvbG9yIGluIHB1cnVzIHVsbGFtY29ycGVyLCBlZ2V0IHZlbmVuYXRpcyBlbmltIHB1bHZpbmFyLlwiLFxuICAgIFwiVHlwZVwiOiBcInRhYmxlXCIsXG4gICAgXCJMaW5rXCI6IFwiPGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9Jyc+RG93bmxvYWQ8L2E+XCJcbiAgfSxcbiAge1xuICAgIFwiR2VvXCI6IFwiUmVnXCIsXG4gICAgXCJOYW1lXCI6IFwiRWNvcmVnaW9uc1wiLFxuICAgIFwiRGVzY3JpcHRpb25cIjogXCJQcm9pbiBmYXVjaWJ1cyB2dWxwdXRhdGUgZmVsaXMgcXVpcyBwbGFjZXJhdC4gRXRpYW0gcXVpcyB0aW5jaWR1bnQgZmVsaXMuXCIsXG4gICAgXCJUeXBlXCI6IFwidGFibGVcIixcbiAgICBcIkxpbmtcIjogXCI8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0nJz5Eb3dubG9hZDwvYT5cIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJIdW50c3ZpbGxlIERvd250b3duIE1hc3RlciBQbGFuXCIsXG4gICAgXCJEZXNjcmlwdGlvblwiOiBcIk5hbSBzaXQgYW1ldCBuaXNpIG5lYyBzYXBpZW4gbW9sbGlzIG1hbGVzdWFkYSBibGFuZGl0IG5lYyBsYWN1cy5cIixcbiAgICBcIlR5cGVcIjogXCJyZXBvcnRcIixcbiAgICBcIkxpbmtcIjogXCI8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0nJz5Eb3dubG9hZDwvYT5cIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJIdW50c3ZpbGxlIExhbmQgVXNlIEJ5IFpvbmluZyAyMDE1XCIsXG4gICAgXCJEZXNjcmlwdGlvblwiOiBcIkV0aWFtIHRlbXBvciB1bGxhbWNvcnBlciBzb2xsaWNpdHVkaW4uIFZlc3RpYnVsdW0gYSBtYXVyaXMgaW4gYXVndWUgY29uZGltZW50dW0gdmVoaWN1bGEuXCIsXG4gICAgXCJUeXBlXCI6IFwicmVwb3J0XCIsXG4gICAgXCJMaW5rXCI6IFwiPGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9Jyc+RG93bmxvYWQ8L2E+XCJcbiAgfSxcbiAge1xuICAgIFwiR2VvXCI6IFwiUmVnXCIsXG4gICAgXCJOYW1lXCI6IFwiSHVudHN2aWxsZSBEb3dudG93biBQcm9wb3NlZCBab25pbmcgTWFwIDIwMDVcIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiTnVsbGFtIGZpbmlidXMgYSBtYXNzYSBlZ2V0IHRpbmNpZHVudC4gIFBoYXNlbGx1cyBhdWN0b3IgdGVtcG9yIHBoYXJldHJhLlwiLFxuICAgIFwiVHlwZVwiOiBcInJlcG9ydFwiLFxuICAgIFwiTGlua1wiOiBcIjxhIHRhcmdldD0nX2JsYW5rJyBocmVmPScnPkRvd25sb2FkPC9hPlwiXG4gIH0sXG4gIHtcbiAgICBcIkdlb1wiOiBcIlJlZ1wiLFxuICAgIFwiTmFtZVwiOiBcIkh1bnRzdmlsbGUgQXJlYSBUcmFuc3BvcnRhdGlvbiBTdHVkeVwiLFxuICAgIFwiRGVzY3JpcHRpb25cIjogXCJTZWQgZmV1Z2lhdCBlbmltIGVuaW0sIHF1aXMgdWx0cmljZXMgdmVsaXQgbWFsZXN1YWRhIHNlZC4gU3VzcGVuZGlzc2UgcG90ZW50aS5cIixcbiAgICBcIlR5cGVcIjogXCJyZXBvcnRcIixcbiAgICBcIkxpbmtcIjogXCI8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0nJz5Eb3dubG9hZDwvYT5cIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJDaXR5IG9mIE1hZGlzb24gR3Jvd3RoIFBsYW5cIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiSW4gYWxpcXVhbSBvcmNpIG5vbiB0dXJwaXMgcGVsbGVudGVzcXVlIGN1cnN1cy4gVml2YW11cyBwdWx2aW5hciB2b2x1dHBhdCBtYXVyaXMgc2l0IGFtZXQgdWx0cmljZXMuXCIsXG4gICAgXCJUeXBlXCI6IFwicmVwb3J0XCIsXG4gICAgXCJMaW5rXCI6IFwiPGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9Jyc+RG93bmxvYWQ8L2E+XCJcbiAgfSxcbiAge1xuICAgIFwiR2VvXCI6IFwiUmVnXCIsXG4gICAgXCJOYW1lXCI6IFwiQ2l0eSBvZiBNYWRpc29uIFpvbmluZyBNYXBcIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiTmFtIGZyaW5naWxsYSBhY2N1bXNhbiBydXRydW0uIEZ1c2NlIHRpbmNpZHVudCBwcmV0aXVtIGFudGUsIGlkIHRpbmNpZHVudCBsb3JlbS4gTmFtIHNvbGxpY2l0dWRpbiBuaXNsIG51bmMsIGFjIG1hdHRpcyBhbnRlIHRyaXN0aXF1ZSBoZW5kcmVyaXQuXCIsXG4gICAgXCJUeXBlXCI6IFwicmVwb3J0XCIsXG4gICAgXCJMaW5rXCI6IFwiPGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9Jyc+RG93bmxvYWQ8L2E+XCJcbiAgfSxcbiAge1xuICAgIFwiR2VvXCI6IFwiUmVnXCIsXG4gICAgXCJOYW1lXCI6IFwiQXRoZW5zIEZ1dHVyZSBMYW5kIFVzZSBEZXZlbG9wbWVudCBQbGFuXCIsXG4gICAgXCJEZXNjcmlwdGlvblwiOiBcIkluIGFsaXF1YW0gb3JjaSBub24gdHVycGlzIHBlbGxlbnRlc3F1ZSBjdXJzdXMuIFZpdmFtdXMgcHVsdmluYXIgdm9sdXRwYXQgbWF1cmlzIHNpdCBhbWV0IHVsdHJpY2VzLlwiLFxuICAgIFwiVHlwZVwiOiBcInJlcG9ydFwiLFxuICAgIFwiTGlua1wiOiBcIjxhIHRhcmdldD0nX2JsYW5rJyBocmVmPScnPkRvd25sb2FkPC9hPlwiXG4gIH0sXG4gIHtcbiAgICBcIkdlb1wiOiBcIlJlZ1wiLFxuICAgIFwiTmFtZVwiOiBcIkZhbGt2aWxsZSBab25pbmcgTWFwXCIsXG4gICAgXCJEZXNjcmlwdGlvblwiOiBcIk5hbSBmcmluZ2lsbGEgYWNjdW1zYW4gcnV0cnVtLiBGdXNjZSB0aW5jaWR1bnQgcHJldGl1bSBhbnRlLCBpZCB0aW5jaWR1bnQgbG9yZW0uIE5hbSBzb2xsaWNpdHVkaW4gbmlzbCBudW5jLCBhYyBtYXR0aXMgYW50ZSB0cmlzdGlxdWUgaGVuZHJlcml0LlwiLFxuICAgIFwiVHlwZVwiOiBcInJlcG9ydFwiLFxuICAgIFwiTGlua1wiOiBcIjxhIHRhcmdldD0nX2JsYW5rJyBocmVmPScnPkRvd25sb2FkPC9hPlwiXG4gIH1cbl07XG5sZXQgbGltZXN0b25lX2RhdGFzZXQ6IEFycmF5PFJlZ2lvbmFsRGF0YXNldD4gPSBbXG4gIHtcbiAgICBcIkdlb1wiOiBcIlJlZ1wiLFxuICAgIFwiTmFtZVwiOiBcIlVTIENlbnN1cyBQbGFjZXMvQ2l0aWVzXCIsXG4gICAgXCJEZXNjcmlwdGlvblwiOiBcIkNsYXNzIGFwdGVudCB0YWNpdGkgc29jaW9zcXUgYWQgbGl0b3JhIHRvcnF1ZW50IHBlciBjb251YmlhIG5vc3RyYSwgcGVyIGluY2VwdG9zIGhpbWVuYWVvcy5cIixcbiAgICBcIlR5cGVcIjogXCJzaHBcIixcbiAgICBcIkxpbmtcIjogXCI8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0nJz5Eb3dubG9hZDwvYT5cIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJNUE8gVEFaIExheWVyIFJlZ2lvbmFsXCIsXG4gICAgXCJEZXNjcmlwdGlvblwiOiBcIk51bmMgc2NlbGVyaXNxdWUgZG9sb3IgaW4gcHVydXMgdWxsYW1jb3JwZXIsIGVnZXQgdmVuZW5hdGlzIGVuaW0gcHVsdmluYXIuXCIsXG4gICAgXCJUeXBlXCI6IFwic2hwXCIsXG4gICAgXCJMaW5rXCI6IFwiPGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9Jyc+RG93bmxvYWQ8L2E+XCJcbiAgfSxcbiAge1xuICAgIFwiR2VvXCI6IFwiUmVnXCIsXG4gICAgXCJOYW1lXCI6IFwiSHVudHN2aWxsZSBNUE8gVEFaXCIsXG4gICAgXCJEZXNjcmlwdGlvblwiOiBcIlByb2luIGZhdWNpYnVzIHZ1bHB1dGF0ZSBmZWxpcyBxdWlzIHBsYWNlcmF0LiBFdGlhbSBxdWlzIHRpbmNpZHVudCBmZWxpcy5cIixcbiAgICBcIlR5cGVcIjogXCJzaHBcIixcbiAgICBcIkxpbmtcIjogXCI8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0nJz5Eb3dubG9hZDwvYT5cIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJEZWNhdHVyIE1QTyBUQVpcIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiTmFtIHNpdCBhbWV0IG5pc2kgbmVjIHNhcGllbiBtb2xsaXMgbWFsZXN1YWRhIGJsYW5kaXQgbmVjIGxhY3VzLlwiLFxuICAgIFwiVHlwZVwiOiBcInNocFwiLFxuICAgIFwiTGlua1wiOiBcIjxhIHRhcmdldD0nX2JsYW5rJyBocmVmPScnPkRvd25sb2FkPC9hPlwiXG4gIH0sXG4gIHtcbiAgICBcIkdlb1wiOiBcIlJlZ1wiLFxuICAgIFwiTmFtZVwiOiBcIldhdGVyc2hlZHNcIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiRXRpYW0gdGVtcG9yIHVsbGFtY29ycGVyIHNvbGxpY2l0dWRpbi4gVmVzdGlidWx1bSBhIG1hdXJpcyBpbiBhdWd1ZSBjb25kaW1lbnR1bSB2ZWhpY3VsYS5cIixcbiAgICBcIlR5cGVcIjogXCJzaHBcIixcbiAgICBcIkxpbmtcIjogXCI8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0nJz5Eb3dubG9hZDwvYT5cIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJFY29yZWdpb25zXCIsXG4gICAgXCJEZXNjcmlwdGlvblwiOiBcIk51bGxhbSBmaW5pYnVzIGEgbWFzc2EgZWdldCB0aW5jaWR1bnQuICBQaGFzZWxsdXMgYXVjdG9yIHRlbXBvciBwaGFyZXRyYS5cIixcbiAgICBcIlR5cGVcIjogXCJzaHBcIixcbiAgICBcIkxpbmtcIjogXCI8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0nJz5Eb3dubG9hZDwvYT5cIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJVUyBDZW5zdXMgUGxhY2VzL0NpdGllc1wiLFxuICAgIFwiRGVzY3JpcHRpb25cIjogXCJTZWQgZmV1Z2lhdCBlbmltIGVuaW0sIHF1aXMgdWx0cmljZXMgdmVsaXQgbWFsZXN1YWRhIHNlZC4gU3VzcGVuZGlzc2UgcG90ZW50aS5cIixcbiAgICBcIlR5cGVcIjogXCJ0YWJsZVwiLFxuICAgIFwiTGlua1wiOiBcIjxhIHRhcmdldD0nX2JsYW5rJyBocmVmPScnPkRvd25sb2FkPC9hPlwiXG4gIH0sXG4gIHtcbiAgICBcIkdlb1wiOiBcIlJlZ1wiLFxuICAgIFwiTmFtZVwiOiBcIk1QTyBUQVogTGF5ZXIgUmVnaW9uYWxcIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiSW4gYWxpcXVhbSBvcmNpIG5vbiB0dXJwaXMgcGVsbGVudGVzcXVlIGN1cnN1cy4gVml2YW11cyBwdWx2aW5hciB2b2x1dHBhdCBtYXVyaXMgc2l0IGFtZXQgdWx0cmljZXMuXCIsXG4gICAgXCJUeXBlXCI6IFwidGFibGVcIixcbiAgICBcIkxpbmtcIjogXCI8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0nJz5Eb3dubG9hZDwvYT5cIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJIdW50c3ZpbGxlIE1QTyBUQVpcIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiTmFtIGZyaW5naWxsYSBhY2N1bXNhbiBydXRydW0uIEZ1c2NlIHRpbmNpZHVudCBwcmV0aXVtIGFudGUsIGlkIHRpbmNpZHVudCBsb3JlbS4gTmFtIHNvbGxpY2l0dWRpbiBuaXNsIG51bmMsIGFjIG1hdHRpcyBhbnRlIHRyaXN0aXF1ZSBoZW5kcmVyaXQuXCIsXG4gICAgXCJUeXBlXCI6IFwidGFibGVcIixcbiAgICBcIkxpbmtcIjogXCI8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0nJz5Eb3dubG9hZDwvYT5cIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJEZWNhdHVyIE1QTyBUQVpcIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiQ2xhc3MgYXB0ZW50IHRhY2l0aSBzb2Npb3NxdSBhZCBsaXRvcmEgdG9ycXVlbnQgcGVyIGNvbnViaWEgbm9zdHJhLCBwZXIgaW5jZXB0b3MgaGltZW5hZW9zLlwiLFxuICAgIFwiVHlwZVwiOiBcInRhYmxlXCIsXG4gICAgXCJMaW5rXCI6IFwiPGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9Jyc+RG93bmxvYWQ8L2E+XCJcbiAgfSxcbiAge1xuICAgIFwiR2VvXCI6IFwiUmVnXCIsXG4gICAgXCJOYW1lXCI6IFwiV2F0ZXJzaGVkc1wiLFxuICAgIFwiRGVzY3JpcHRpb25cIjogXCJOdW5jIHNjZWxlcmlzcXVlIGRvbG9yIGluIHB1cnVzIHVsbGFtY29ycGVyLCBlZ2V0IHZlbmVuYXRpcyBlbmltIHB1bHZpbmFyLlwiLFxuICAgIFwiVHlwZVwiOiBcInRhYmxlXCIsXG4gICAgXCJMaW5rXCI6IFwiPGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9Jyc+RG93bmxvYWQ8L2E+XCJcbiAgfSxcbiAge1xuICAgIFwiR2VvXCI6IFwiUmVnXCIsXG4gICAgXCJOYW1lXCI6IFwiRWNvcmVnaW9uc1wiLFxuICAgIFwiRGVzY3JpcHRpb25cIjogXCJQcm9pbiBmYXVjaWJ1cyB2dWxwdXRhdGUgZmVsaXMgcXVpcyBwbGFjZXJhdC4gRXRpYW0gcXVpcyB0aW5jaWR1bnQgZmVsaXMuXCIsXG4gICAgXCJUeXBlXCI6IFwidGFibGVcIixcbiAgICBcIkxpbmtcIjogXCI8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0nJz5Eb3dubG9hZDwvYT5cIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJIdW50c3ZpbGxlIERvd250b3duIE1hc3RlciBQbGFuXCIsXG4gICAgXCJEZXNjcmlwdGlvblwiOiBcIk5hbSBzaXQgYW1ldCBuaXNpIG5lYyBzYXBpZW4gbW9sbGlzIG1hbGVzdWFkYSBibGFuZGl0IG5lYyBsYWN1cy5cIixcbiAgICBcIlR5cGVcIjogXCJyZXBvcnRcIixcbiAgICBcIkxpbmtcIjogXCI8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0nJz5Eb3dubG9hZDwvYT5cIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJIdW50c3ZpbGxlIExhbmQgVXNlIEJ5IFpvbmluZyAyMDE1XCIsXG4gICAgXCJEZXNjcmlwdGlvblwiOiBcIkV0aWFtIHRlbXBvciB1bGxhbWNvcnBlciBzb2xsaWNpdHVkaW4uIFZlc3RpYnVsdW0gYSBtYXVyaXMgaW4gYXVndWUgY29uZGltZW50dW0gdmVoaWN1bGEuXCIsXG4gICAgXCJUeXBlXCI6IFwicmVwb3J0XCIsXG4gICAgXCJMaW5rXCI6IFwiPGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9Jyc+RG93bmxvYWQ8L2E+XCJcbiAgfSxcbiAge1xuICAgIFwiR2VvXCI6IFwiUmVnXCIsXG4gICAgXCJOYW1lXCI6IFwiSHVudHN2aWxsZSBEb3dudG93biBQcm9wb3NlZCBab25pbmcgTWFwIDIwMDVcIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiTnVsbGFtIGZpbmlidXMgYSBtYXNzYSBlZ2V0IHRpbmNpZHVudC4gIFBoYXNlbGx1cyBhdWN0b3IgdGVtcG9yIHBoYXJldHJhLlwiLFxuICAgIFwiVHlwZVwiOiBcInJlcG9ydFwiLFxuICAgIFwiTGlua1wiOiBcIjxhIHRhcmdldD0nX2JsYW5rJyBocmVmPScnPkRvd25sb2FkPC9hPlwiXG4gIH0sXG4gIHtcbiAgICBcIkdlb1wiOiBcIlJlZ1wiLFxuICAgIFwiTmFtZVwiOiBcIkh1bnRzdmlsbGUgQXJlYSBUcmFuc3BvcnRhdGlvbiBTdHVkeVwiLFxuICAgIFwiRGVzY3JpcHRpb25cIjogXCJTZWQgZmV1Z2lhdCBlbmltIGVuaW0sIHF1aXMgdWx0cmljZXMgdmVsaXQgbWFsZXN1YWRhIHNlZC4gU3VzcGVuZGlzc2UgcG90ZW50aS5cIixcbiAgICBcIlR5cGVcIjogXCJyZXBvcnRcIixcbiAgICBcIkxpbmtcIjogXCI8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0nJz5Eb3dubG9hZDwvYT5cIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJDaXR5IG9mIE1hZGlzb24gR3Jvd3RoIFBsYW5cIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiSW4gYWxpcXVhbSBvcmNpIG5vbiB0dXJwaXMgcGVsbGVudGVzcXVlIGN1cnN1cy4gVml2YW11cyBwdWx2aW5hciB2b2x1dHBhdCBtYXVyaXMgc2l0IGFtZXQgdWx0cmljZXMuXCIsXG4gICAgXCJUeXBlXCI6IFwicmVwb3J0XCIsXG4gICAgXCJMaW5rXCI6IFwiPGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9Jyc+RG93bmxvYWQ8L2E+XCJcbiAgfSxcbiAge1xuICAgIFwiR2VvXCI6IFwiUmVnXCIsXG4gICAgXCJOYW1lXCI6IFwiQ2l0eSBvZiBNYWRpc29uIFpvbmluZyBNYXBcIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiTmFtIGZyaW5naWxsYSBhY2N1bXNhbiBydXRydW0uIEZ1c2NlIHRpbmNpZHVudCBwcmV0aXVtIGFudGUsIGlkIHRpbmNpZHVudCBsb3JlbS4gTmFtIHNvbGxpY2l0dWRpbiBuaXNsIG51bmMsIGFjIG1hdHRpcyBhbnRlIHRyaXN0aXF1ZSBoZW5kcmVyaXQuXCIsXG4gICAgXCJUeXBlXCI6IFwicmVwb3J0XCIsXG4gICAgXCJMaW5rXCI6IFwiPGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9Jyc+RG93bmxvYWQ8L2E+XCJcbiAgfSxcbiAge1xuICAgIFwiR2VvXCI6IFwiUmVnXCIsXG4gICAgXCJOYW1lXCI6IFwiQXRoZW5zIEZ1dHVyZSBMYW5kIFVzZSBEZXZlbG9wbWVudCBQbGFuXCIsXG4gICAgXCJEZXNjcmlwdGlvblwiOiBcIkluIGFsaXF1YW0gb3JjaSBub24gdHVycGlzIHBlbGxlbnRlc3F1ZSBjdXJzdXMuIFZpdmFtdXMgcHVsdmluYXIgdm9sdXRwYXQgbWF1cmlzIHNpdCBhbWV0IHVsdHJpY2VzLlwiLFxuICAgIFwiVHlwZVwiOiBcInJlcG9ydFwiLFxuICAgIFwiTGlua1wiOiBcIjxhIHRhcmdldD0nX2JsYW5rJyBocmVmPScnPkRvd25sb2FkPC9hPlwiXG4gIH0sXG4gIHtcbiAgICBcIkdlb1wiOiBcIlJlZ1wiLFxuICAgIFwiTmFtZVwiOiBcIkZhbGt2aWxsZSBab25pbmcgTWFwXCIsXG4gICAgXCJEZXNjcmlwdGlvblwiOiBcIk5hbSBmcmluZ2lsbGEgYWNjdW1zYW4gcnV0cnVtLiBGdXNjZSB0aW5jaWR1bnQgcHJldGl1bSBhbnRlLCBpZCB0aW5jaWR1bnQgbG9yZW0uIE5hbSBzb2xsaWNpdHVkaW4gbmlzbCBudW5jLCBhYyBtYXR0aXMgYW50ZSB0cmlzdGlxdWUgaGVuZHJlcml0LlwiLFxuICAgIFwiVHlwZVwiOiBcInJlcG9ydFwiLFxuICAgIFwiTGlua1wiOiBcIjxhIHRhcmdldD0nX2JsYW5rJyBocmVmPScnPkRvd25sb2FkPC9hPlwiXG4gIH1cbl07XG5sZXQgbW9yZ2FuX2RhdGFzZXQ6IEFycmF5PFJlZ2lvbmFsRGF0YXNldD4gPVtcbiAge1xuICAgIFwiR2VvXCI6IFwiUmVnXCIsXG4gICAgXCJOYW1lXCI6IFwiVVMgQ2Vuc3VzIFBsYWNlcy9DaXRpZXNcIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiQ2xhc3MgYXB0ZW50IHRhY2l0aSBzb2Npb3NxdSBhZCBsaXRvcmEgdG9ycXVlbnQgcGVyIGNvbnViaWEgbm9zdHJhLCBwZXIgaW5jZXB0b3MgaGltZW5hZW9zLlwiLFxuICAgIFwiVHlwZVwiOiBcInNocFwiLFxuICAgIFwiTGlua1wiOiBcIjxhIHRhcmdldD0nX2JsYW5rJyBocmVmPScnPkRvd25sb2FkPC9hPlwiXG4gIH0sXG4gIHtcbiAgICBcIkdlb1wiOiBcIlJlZ1wiLFxuICAgIFwiTmFtZVwiOiBcIk1QTyBUQVogTGF5ZXIgUmVnaW9uYWxcIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiTnVuYyBzY2VsZXJpc3F1ZSBkb2xvciBpbiBwdXJ1cyB1bGxhbWNvcnBlciwgZWdldCB2ZW5lbmF0aXMgZW5pbSBwdWx2aW5hci5cIixcbiAgICBcIlR5cGVcIjogXCJzaHBcIixcbiAgICBcIkxpbmtcIjogXCI8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0nJz5Eb3dubG9hZDwvYT5cIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJIdW50c3ZpbGxlIE1QTyBUQVpcIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiUHJvaW4gZmF1Y2lidXMgdnVscHV0YXRlIGZlbGlzIHF1aXMgcGxhY2VyYXQuIEV0aWFtIHF1aXMgdGluY2lkdW50IGZlbGlzLlwiLFxuICAgIFwiVHlwZVwiOiBcInNocFwiLFxuICAgIFwiTGlua1wiOiBcIjxhIHRhcmdldD0nX2JsYW5rJyBocmVmPScnPkRvd25sb2FkPC9hPlwiXG4gIH0sXG4gIHtcbiAgICBcIkdlb1wiOiBcIlJlZ1wiLFxuICAgIFwiTmFtZVwiOiBcIkRlY2F0dXIgTVBPIFRBWlwiLFxuICAgIFwiRGVzY3JpcHRpb25cIjogXCJOYW0gc2l0IGFtZXQgbmlzaSBuZWMgc2FwaWVuIG1vbGxpcyBtYWxlc3VhZGEgYmxhbmRpdCBuZWMgbGFjdXMuXCIsXG4gICAgXCJUeXBlXCI6IFwic2hwXCIsXG4gICAgXCJMaW5rXCI6IFwiPGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9Jyc+RG93bmxvYWQ8L2E+XCJcbiAgfSxcbiAge1xuICAgIFwiR2VvXCI6IFwiUmVnXCIsXG4gICAgXCJOYW1lXCI6IFwiV2F0ZXJzaGVkc1wiLFxuICAgIFwiRGVzY3JpcHRpb25cIjogXCJFdGlhbSB0ZW1wb3IgdWxsYW1jb3JwZXIgc29sbGljaXR1ZGluLiBWZXN0aWJ1bHVtIGEgbWF1cmlzIGluIGF1Z3VlIGNvbmRpbWVudHVtIHZlaGljdWxhLlwiLFxuICAgIFwiVHlwZVwiOiBcInNocFwiLFxuICAgIFwiTGlua1wiOiBcIjxhIHRhcmdldD0nX2JsYW5rJyBocmVmPScnPkRvd25sb2FkPC9hPlwiXG4gIH0sXG4gIHtcbiAgICBcIkdlb1wiOiBcIlJlZ1wiLFxuICAgIFwiTmFtZVwiOiBcIkVjb3JlZ2lvbnNcIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiTnVsbGFtIGZpbmlidXMgYSBtYXNzYSBlZ2V0IHRpbmNpZHVudC4gIFBoYXNlbGx1cyBhdWN0b3IgdGVtcG9yIHBoYXJldHJhLlwiLFxuICAgIFwiVHlwZVwiOiBcInNocFwiLFxuICAgIFwiTGlua1wiOiBcIjxhIHRhcmdldD0nX2JsYW5rJyBocmVmPScnPkRvd25sb2FkPC9hPlwiXG4gIH0sXG4gIHtcbiAgICBcIkdlb1wiOiBcIlJlZ1wiLFxuICAgIFwiTmFtZVwiOiBcIlVTIENlbnN1cyBQbGFjZXMvQ2l0aWVzXCIsXG4gICAgXCJEZXNjcmlwdGlvblwiOiBcIlNlZCBmZXVnaWF0IGVuaW0gZW5pbSwgcXVpcyB1bHRyaWNlcyB2ZWxpdCBtYWxlc3VhZGEgc2VkLiBTdXNwZW5kaXNzZSBwb3RlbnRpLlwiLFxuICAgIFwiVHlwZVwiOiBcInRhYmxlXCIsXG4gICAgXCJMaW5rXCI6IFwiPGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9Jyc+RG93bmxvYWQ8L2E+XCJcbiAgfSxcbiAge1xuICAgIFwiR2VvXCI6IFwiUmVnXCIsXG4gICAgXCJOYW1lXCI6IFwiTVBPIFRBWiBMYXllciBSZWdpb25hbFwiLFxuICAgIFwiRGVzY3JpcHRpb25cIjogXCJJbiBhbGlxdWFtIG9yY2kgbm9uIHR1cnBpcyBwZWxsZW50ZXNxdWUgY3Vyc3VzLiBWaXZhbXVzIHB1bHZpbmFyIHZvbHV0cGF0IG1hdXJpcyBzaXQgYW1ldCB1bHRyaWNlcy5cIixcbiAgICBcIlR5cGVcIjogXCJ0YWJsZVwiLFxuICAgIFwiTGlua1wiOiBcIjxhIHRhcmdldD0nX2JsYW5rJyBocmVmPScnPkRvd25sb2FkPC9hPlwiXG4gIH0sXG4gIHtcbiAgICBcIkdlb1wiOiBcIlJlZ1wiLFxuICAgIFwiTmFtZVwiOiBcIkh1bnRzdmlsbGUgTVBPIFRBWlwiLFxuICAgIFwiRGVzY3JpcHRpb25cIjogXCJOYW0gZnJpbmdpbGxhIGFjY3Vtc2FuIHJ1dHJ1bS4gRnVzY2UgdGluY2lkdW50IHByZXRpdW0gYW50ZSwgaWQgdGluY2lkdW50IGxvcmVtLiBOYW0gc29sbGljaXR1ZGluIG5pc2wgbnVuYywgYWMgbWF0dGlzIGFudGUgdHJpc3RpcXVlIGhlbmRyZXJpdC5cIixcbiAgICBcIlR5cGVcIjogXCJ0YWJsZVwiLFxuICAgIFwiTGlua1wiOiBcIjxhIHRhcmdldD0nX2JsYW5rJyBocmVmPScnPkRvd25sb2FkPC9hPlwiXG4gIH0sXG4gIHtcbiAgICBcIkdlb1wiOiBcIlJlZ1wiLFxuICAgIFwiTmFtZVwiOiBcIkRlY2F0dXIgTVBPIFRBWlwiLFxuICAgIFwiRGVzY3JpcHRpb25cIjogXCJDbGFzcyBhcHRlbnQgdGFjaXRpIHNvY2lvc3F1IGFkIGxpdG9yYSB0b3JxdWVudCBwZXIgY29udWJpYSBub3N0cmEsIHBlciBpbmNlcHRvcyBoaW1lbmFlb3MuXCIsXG4gICAgXCJUeXBlXCI6IFwidGFibGVcIixcbiAgICBcIkxpbmtcIjogXCI8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0nJz5Eb3dubG9hZDwvYT5cIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJXYXRlcnNoZWRzXCIsXG4gICAgXCJEZXNjcmlwdGlvblwiOiBcIk51bmMgc2NlbGVyaXNxdWUgZG9sb3IgaW4gcHVydXMgdWxsYW1jb3JwZXIsIGVnZXQgdmVuZW5hdGlzIGVuaW0gcHVsdmluYXIuXCIsXG4gICAgXCJUeXBlXCI6IFwidGFibGVcIixcbiAgICBcIkxpbmtcIjogXCI8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0nJz5Eb3dubG9hZDwvYT5cIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJFY29yZWdpb25zXCIsXG4gICAgXCJEZXNjcmlwdGlvblwiOiBcIlByb2luIGZhdWNpYnVzIHZ1bHB1dGF0ZSBmZWxpcyBxdWlzIHBsYWNlcmF0LiBFdGlhbSBxdWlzIHRpbmNpZHVudCBmZWxpcy5cIixcbiAgICBcIlR5cGVcIjogXCJ0YWJsZVwiLFxuICAgIFwiTGlua1wiOiBcIjxhIHRhcmdldD0nX2JsYW5rJyBocmVmPScnPkRvd25sb2FkPC9hPlwiXG4gIH0sXG4gIHtcbiAgICBcIkdlb1wiOiBcIlJlZ1wiLFxuICAgIFwiTmFtZVwiOiBcIkh1bnRzdmlsbGUgRG93bnRvd24gTWFzdGVyIFBsYW5cIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiTmFtIHNpdCBhbWV0IG5pc2kgbmVjIHNhcGllbiBtb2xsaXMgbWFsZXN1YWRhIGJsYW5kaXQgbmVjIGxhY3VzLlwiLFxuICAgIFwiVHlwZVwiOiBcInJlcG9ydFwiLFxuICAgIFwiTGlua1wiOiBcIjxhIHRhcmdldD0nX2JsYW5rJyBocmVmPScnPkRvd25sb2FkPC9hPlwiXG4gIH0sXG4gIHtcbiAgICBcIkdlb1wiOiBcIlJlZ1wiLFxuICAgIFwiTmFtZVwiOiBcIkh1bnRzdmlsbGUgTGFuZCBVc2UgQnkgWm9uaW5nIDIwMTVcIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiRXRpYW0gdGVtcG9yIHVsbGFtY29ycGVyIHNvbGxpY2l0dWRpbi4gVmVzdGlidWx1bSBhIG1hdXJpcyBpbiBhdWd1ZSBjb25kaW1lbnR1bSB2ZWhpY3VsYS5cIixcbiAgICBcIlR5cGVcIjogXCJyZXBvcnRcIixcbiAgICBcIkxpbmtcIjogXCI8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0nJz5Eb3dubG9hZDwvYT5cIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJIdW50c3ZpbGxlIERvd250b3duIFByb3Bvc2VkIFpvbmluZyBNYXAgMjAwNVwiLFxuICAgIFwiRGVzY3JpcHRpb25cIjogXCJOdWxsYW0gZmluaWJ1cyBhIG1hc3NhIGVnZXQgdGluY2lkdW50LiAgUGhhc2VsbHVzIGF1Y3RvciB0ZW1wb3IgcGhhcmV0cmEuXCIsXG4gICAgXCJUeXBlXCI6IFwicmVwb3J0XCIsXG4gICAgXCJMaW5rXCI6IFwiPGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9Jyc+RG93bmxvYWQ8L2E+XCJcbiAgfSxcbiAge1xuICAgIFwiR2VvXCI6IFwiUmVnXCIsXG4gICAgXCJOYW1lXCI6IFwiSHVudHN2aWxsZSBBcmVhIFRyYW5zcG9ydGF0aW9uIFN0dWR5XCIsXG4gICAgXCJEZXNjcmlwdGlvblwiOiBcIlNlZCBmZXVnaWF0IGVuaW0gZW5pbSwgcXVpcyB1bHRyaWNlcyB2ZWxpdCBtYWxlc3VhZGEgc2VkLiBTdXNwZW5kaXNzZSBwb3RlbnRpLlwiLFxuICAgIFwiVHlwZVwiOiBcInJlcG9ydFwiLFxuICAgIFwiTGlua1wiOiBcIjxhIHRhcmdldD0nX2JsYW5rJyBocmVmPScnPkRvd25sb2FkPC9hPlwiXG4gIH0sXG4gIHtcbiAgICBcIkdlb1wiOiBcIlJlZ1wiLFxuICAgIFwiTmFtZVwiOiBcIkNpdHkgb2YgTWFkaXNvbiBHcm93dGggUGxhblwiLFxuICAgIFwiRGVzY3JpcHRpb25cIjogXCJJbiBhbGlxdWFtIG9yY2kgbm9uIHR1cnBpcyBwZWxsZW50ZXNxdWUgY3Vyc3VzLiBWaXZhbXVzIHB1bHZpbmFyIHZvbHV0cGF0IG1hdXJpcyBzaXQgYW1ldCB1bHRyaWNlcy5cIixcbiAgICBcIlR5cGVcIjogXCJyZXBvcnRcIixcbiAgICBcIkxpbmtcIjogXCI8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0nJz5Eb3dubG9hZDwvYT5cIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJDaXR5IG9mIE1hZGlzb24gWm9uaW5nIE1hcFwiLFxuICAgIFwiRGVzY3JpcHRpb25cIjogXCJOYW0gZnJpbmdpbGxhIGFjY3Vtc2FuIHJ1dHJ1bS4gRnVzY2UgdGluY2lkdW50IHByZXRpdW0gYW50ZSwgaWQgdGluY2lkdW50IGxvcmVtLiBOYW0gc29sbGljaXR1ZGluIG5pc2wgbnVuYywgYWMgbWF0dGlzIGFudGUgdHJpc3RpcXVlIGhlbmRyZXJpdC5cIixcbiAgICBcIlR5cGVcIjogXCJyZXBvcnRcIixcbiAgICBcIkxpbmtcIjogXCI8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0nJz5Eb3dubG9hZDwvYT5cIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJBdGhlbnMgRnV0dXJlIExhbmQgVXNlIERldmVsb3BtZW50IFBsYW5cIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiSW4gYWxpcXVhbSBvcmNpIG5vbiB0dXJwaXMgcGVsbGVudGVzcXVlIGN1cnN1cy4gVml2YW11cyBwdWx2aW5hciB2b2x1dHBhdCBtYXVyaXMgc2l0IGFtZXQgdWx0cmljZXMuXCIsXG4gICAgXCJUeXBlXCI6IFwicmVwb3J0XCIsXG4gICAgXCJMaW5rXCI6IFwiPGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9Jyc+RG93bmxvYWQ8L2E+XCJcbiAgfSxcbiAge1xuICAgIFwiR2VvXCI6IFwiUmVnXCIsXG4gICAgXCJOYW1lXCI6IFwiRmFsa3ZpbGxlIFpvbmluZyBNYXBcIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiTmFtIGZyaW5naWxsYSBhY2N1bXNhbiBydXRydW0uIEZ1c2NlIHRpbmNpZHVudCBwcmV0aXVtIGFudGUsIGlkIHRpbmNpZHVudCBsb3JlbS4gTmFtIHNvbGxpY2l0dWRpbiBuaXNsIG51bmMsIGFjIG1hdHRpcyBhbnRlIHRyaXN0aXF1ZSBoZW5kcmVyaXQuXCIsXG4gICAgXCJUeXBlXCI6IFwicmVwb3J0XCIsXG4gICAgXCJMaW5rXCI6IFwiPGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9Jyc+RG93bmxvYWQ8L2E+XCJcbiAgfVxuXTtcbmxldCBtYWRpc29uX2RhdGFzZXQ6IEFycmF5PFJlZ2lvbmFsRGF0YXNldD4gPVtcbiAge1xuICAgIFwiR2VvXCI6IFwiUmVnXCIsXG4gICAgXCJOYW1lXCI6IFwiVVMgQ2Vuc3VzIFBsYWNlcy9DaXRpZXNcIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiQ2xhc3MgYXB0ZW50IHRhY2l0aSBzb2Npb3NxdSBhZCBsaXRvcmEgdG9ycXVlbnQgcGVyIGNvbnViaWEgbm9zdHJhLCBwZXIgaW5jZXB0b3MgaGltZW5hZW9zLlwiLFxuICAgIFwiVHlwZVwiOiBcInNocFwiLFxuICAgIFwiTGlua1wiOiBcIjxhIHRhcmdldD0nX2JsYW5rJyBocmVmPScnPkRvd25sb2FkPC9hPlwiXG4gIH0sXG4gIHtcbiAgICBcIkdlb1wiOiBcIlJlZ1wiLFxuICAgIFwiTmFtZVwiOiBcIk1QTyBUQVogTGF5ZXIgUmVnaW9uYWxcIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiTnVuYyBzY2VsZXJpc3F1ZSBkb2xvciBpbiBwdXJ1cyB1bGxhbWNvcnBlciwgZWdldCB2ZW5lbmF0aXMgZW5pbSBwdWx2aW5hci5cIixcbiAgICBcIlR5cGVcIjogXCJzaHBcIixcbiAgICBcIkxpbmtcIjogXCI8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0nJz5Eb3dubG9hZDwvYT5cIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJIdW50c3ZpbGxlIE1QTyBUQVpcIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiUHJvaW4gZmF1Y2lidXMgdnVscHV0YXRlIGZlbGlzIHF1aXMgcGxhY2VyYXQuIEV0aWFtIHF1aXMgdGluY2lkdW50IGZlbGlzLlwiLFxuICAgIFwiVHlwZVwiOiBcInNocFwiLFxuICAgIFwiTGlua1wiOiBcIjxhIHRhcmdldD0nX2JsYW5rJyBocmVmPScnPkRvd25sb2FkPC9hPlwiXG4gIH0sXG4gIHtcbiAgICBcIkdlb1wiOiBcIlJlZ1wiLFxuICAgIFwiTmFtZVwiOiBcIkRlY2F0dXIgTVBPIFRBWlwiLFxuICAgIFwiRGVzY3JpcHRpb25cIjogXCJOYW0gc2l0IGFtZXQgbmlzaSBuZWMgc2FwaWVuIG1vbGxpcyBtYWxlc3VhZGEgYmxhbmRpdCBuZWMgbGFjdXMuXCIsXG4gICAgXCJUeXBlXCI6IFwic2hwXCIsXG4gICAgXCJMaW5rXCI6IFwiPGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9Jyc+RG93bmxvYWQ8L2E+XCJcbiAgfSxcbiAge1xuICAgIFwiR2VvXCI6IFwiUmVnXCIsXG4gICAgXCJOYW1lXCI6IFwiV2F0ZXJzaGVkc1wiLFxuICAgIFwiRGVzY3JpcHRpb25cIjogXCJFdGlhbSB0ZW1wb3IgdWxsYW1jb3JwZXIgc29sbGljaXR1ZGluLiBWZXN0aWJ1bHVtIGEgbWF1cmlzIGluIGF1Z3VlIGNvbmRpbWVudHVtIHZlaGljdWxhLlwiLFxuICAgIFwiVHlwZVwiOiBcInNocFwiLFxuICAgIFwiTGlua1wiOiBcIjxhIHRhcmdldD0nX2JsYW5rJyBocmVmPScnPkRvd25sb2FkPC9hPlwiXG4gIH0sXG4gIHtcbiAgICBcIkdlb1wiOiBcIlJlZ1wiLFxuICAgIFwiTmFtZVwiOiBcIkVjb3JlZ2lvbnNcIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiTnVsbGFtIGZpbmlidXMgYSBtYXNzYSBlZ2V0IHRpbmNpZHVudC4gIFBoYXNlbGx1cyBhdWN0b3IgdGVtcG9yIHBoYXJldHJhLlwiLFxuICAgIFwiVHlwZVwiOiBcInNocFwiLFxuICAgIFwiTGlua1wiOiBcIjxhIHRhcmdldD0nX2JsYW5rJyBocmVmPScnPkRvd25sb2FkPC9hPlwiXG4gIH0sXG4gIHtcbiAgICBcIkdlb1wiOiBcIlJlZ1wiLFxuICAgIFwiTmFtZVwiOiBcIlVTIENlbnN1cyBQbGFjZXMvQ2l0aWVzXCIsXG4gICAgXCJEZXNjcmlwdGlvblwiOiBcIlNlZCBmZXVnaWF0IGVuaW0gZW5pbSwgcXVpcyB1bHRyaWNlcyB2ZWxpdCBtYWxlc3VhZGEgc2VkLiBTdXNwZW5kaXNzZSBwb3RlbnRpLlwiLFxuICAgIFwiVHlwZVwiOiBcInRhYmxlXCIsXG4gICAgXCJMaW5rXCI6IFwiPGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9Jyc+RG93bmxvYWQ8L2E+XCJcbiAgfSxcbiAge1xuICAgIFwiR2VvXCI6IFwiUmVnXCIsXG4gICAgXCJOYW1lXCI6IFwiTVBPIFRBWiBMYXllciBSZWdpb25hbFwiLFxuICAgIFwiRGVzY3JpcHRpb25cIjogXCJJbiBhbGlxdWFtIG9yY2kgbm9uIHR1cnBpcyBwZWxsZW50ZXNxdWUgY3Vyc3VzLiBWaXZhbXVzIHB1bHZpbmFyIHZvbHV0cGF0IG1hdXJpcyBzaXQgYW1ldCB1bHRyaWNlcy5cIixcbiAgICBcIlR5cGVcIjogXCJ0YWJsZVwiLFxuICAgIFwiTGlua1wiOiBcIjxhIHRhcmdldD0nX2JsYW5rJyBocmVmPScnPkRvd25sb2FkPC9hPlwiXG4gIH0sXG4gIHtcbiAgICBcIkdlb1wiOiBcIlJlZ1wiLFxuICAgIFwiTmFtZVwiOiBcIkh1bnRzdmlsbGUgTVBPIFRBWlwiLFxuICAgIFwiRGVzY3JpcHRpb25cIjogXCJOYW0gZnJpbmdpbGxhIGFjY3Vtc2FuIHJ1dHJ1bS4gRnVzY2UgdGluY2lkdW50IHByZXRpdW0gYW50ZSwgaWQgdGluY2lkdW50IGxvcmVtLiBOYW0gc29sbGljaXR1ZGluIG5pc2wgbnVuYywgYWMgbWF0dGlzIGFudGUgdHJpc3RpcXVlIGhlbmRyZXJpdC5cIixcbiAgICBcIlR5cGVcIjogXCJ0YWJsZVwiLFxuICAgIFwiTGlua1wiOiBcIjxhIHRhcmdldD0nX2JsYW5rJyBocmVmPScnPkRvd25sb2FkPC9hPlwiXG4gIH0sXG4gIHtcbiAgICBcIkdlb1wiOiBcIlJlZ1wiLFxuICAgIFwiTmFtZVwiOiBcIkRlY2F0dXIgTVBPIFRBWlwiLFxuICAgIFwiRGVzY3JpcHRpb25cIjogXCJDbGFzcyBhcHRlbnQgdGFjaXRpIHNvY2lvc3F1IGFkIGxpdG9yYSB0b3JxdWVudCBwZXIgY29udWJpYSBub3N0cmEsIHBlciBpbmNlcHRvcyBoaW1lbmFlb3MuXCIsXG4gICAgXCJUeXBlXCI6IFwidGFibGVcIixcbiAgICBcIkxpbmtcIjogXCI8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0nJz5Eb3dubG9hZDwvYT5cIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJXYXRlcnNoZWRzXCIsXG4gICAgXCJEZXNjcmlwdGlvblwiOiBcIk51bmMgc2NlbGVyaXNxdWUgZG9sb3IgaW4gcHVydXMgdWxsYW1jb3JwZXIsIGVnZXQgdmVuZW5hdGlzIGVuaW0gcHVsdmluYXIuXCIsXG4gICAgXCJUeXBlXCI6IFwidGFibGVcIixcbiAgICBcIkxpbmtcIjogXCI8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0nJz5Eb3dubG9hZDwvYT5cIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJFY29yZWdpb25zXCIsXG4gICAgXCJEZXNjcmlwdGlvblwiOiBcIlByb2luIGZhdWNpYnVzIHZ1bHB1dGF0ZSBmZWxpcyBxdWlzIHBsYWNlcmF0LiBFdGlhbSBxdWlzIHRpbmNpZHVudCBmZWxpcy5cIixcbiAgICBcIlR5cGVcIjogXCJ0YWJsZVwiLFxuICAgIFwiTGlua1wiOiBcIjxhIHRhcmdldD0nX2JsYW5rJyBocmVmPScnPkRvd25sb2FkPC9hPlwiXG4gIH0sXG4gIHtcbiAgICBcIkdlb1wiOiBcIlJlZ1wiLFxuICAgIFwiTmFtZVwiOiBcIkh1bnRzdmlsbGUgRG93bnRvd24gTWFzdGVyIFBsYW5cIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiTmFtIHNpdCBhbWV0IG5pc2kgbmVjIHNhcGllbiBtb2xsaXMgbWFsZXN1YWRhIGJsYW5kaXQgbmVjIGxhY3VzLlwiLFxuICAgIFwiVHlwZVwiOiBcInJlcG9ydFwiLFxuICAgIFwiTGlua1wiOiBcIjxhIHRhcmdldD0nX2JsYW5rJyBocmVmPScnPkRvd25sb2FkPC9hPlwiXG4gIH0sXG4gIHtcbiAgICBcIkdlb1wiOiBcIlJlZ1wiLFxuICAgIFwiTmFtZVwiOiBcIkh1bnRzdmlsbGUgTGFuZCBVc2UgQnkgWm9uaW5nIDIwMTVcIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiRXRpYW0gdGVtcG9yIHVsbGFtY29ycGVyIHNvbGxpY2l0dWRpbi4gVmVzdGlidWx1bSBhIG1hdXJpcyBpbiBhdWd1ZSBjb25kaW1lbnR1bSB2ZWhpY3VsYS5cIixcbiAgICBcIlR5cGVcIjogXCJyZXBvcnRcIixcbiAgICBcIkxpbmtcIjogXCI8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0nJz5Eb3dubG9hZDwvYT5cIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJIdW50c3ZpbGxlIERvd250b3duIFByb3Bvc2VkIFpvbmluZyBNYXAgMjAwNVwiLFxuICAgIFwiRGVzY3JpcHRpb25cIjogXCJOdWxsYW0gZmluaWJ1cyBhIG1hc3NhIGVnZXQgdGluY2lkdW50LiAgUGhhc2VsbHVzIGF1Y3RvciB0ZW1wb3IgcGhhcmV0cmEuXCIsXG4gICAgXCJUeXBlXCI6IFwicmVwb3J0XCIsXG4gICAgXCJMaW5rXCI6IFwiPGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9Jyc+RG93bmxvYWQ8L2E+XCJcbiAgfSxcbiAge1xuICAgIFwiR2VvXCI6IFwiUmVnXCIsXG4gICAgXCJOYW1lXCI6IFwiSHVudHN2aWxsZSBBcmVhIFRyYW5zcG9ydGF0aW9uIFN0dWR5XCIsXG4gICAgXCJEZXNjcmlwdGlvblwiOiBcIlNlZCBmZXVnaWF0IGVuaW0gZW5pbSwgcXVpcyB1bHRyaWNlcyB2ZWxpdCBtYWxlc3VhZGEgc2VkLiBTdXNwZW5kaXNzZSBwb3RlbnRpLlwiLFxuICAgIFwiVHlwZVwiOiBcInJlcG9ydFwiLFxuICAgIFwiTGlua1wiOiBcIjxhIHRhcmdldD0nX2JsYW5rJyBocmVmPScnPkRvd25sb2FkPC9hPlwiXG4gIH0sXG4gIHtcbiAgICBcIkdlb1wiOiBcIlJlZ1wiLFxuICAgIFwiTmFtZVwiOiBcIkNpdHkgb2YgTWFkaXNvbiBHcm93dGggUGxhblwiLFxuICAgIFwiRGVzY3JpcHRpb25cIjogXCJJbiBhbGlxdWFtIG9yY2kgbm9uIHR1cnBpcyBwZWxsZW50ZXNxdWUgY3Vyc3VzLiBWaXZhbXVzIHB1bHZpbmFyIHZvbHV0cGF0IG1hdXJpcyBzaXQgYW1ldCB1bHRyaWNlcy5cIixcbiAgICBcIlR5cGVcIjogXCJyZXBvcnRcIixcbiAgICBcIkxpbmtcIjogXCI8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0nJz5Eb3dubG9hZDwvYT5cIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJDaXR5IG9mIE1hZGlzb24gWm9uaW5nIE1hcFwiLFxuICAgIFwiRGVzY3JpcHRpb25cIjogXCJOYW0gZnJpbmdpbGxhIGFjY3Vtc2FuIHJ1dHJ1bS4gRnVzY2UgdGluY2lkdW50IHByZXRpdW0gYW50ZSwgaWQgdGluY2lkdW50IGxvcmVtLiBOYW0gc29sbGljaXR1ZGluIG5pc2wgbnVuYywgYWMgbWF0dGlzIGFudGUgdHJpc3RpcXVlIGhlbmRyZXJpdC5cIixcbiAgICBcIlR5cGVcIjogXCJyZXBvcnRcIixcbiAgICBcIkxpbmtcIjogXCI8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0nJz5Eb3dubG9hZDwvYT5cIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJBdGhlbnMgRnV0dXJlIExhbmQgVXNlIERldmVsb3BtZW50IFBsYW5cIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiSW4gYWxpcXVhbSBvcmNpIG5vbiB0dXJwaXMgcGVsbGVudGVzcXVlIGN1cnN1cy4gVml2YW11cyBwdWx2aW5hciB2b2x1dHBhdCBtYXVyaXMgc2l0IGFtZXQgdWx0cmljZXMuXCIsXG4gICAgXCJUeXBlXCI6IFwicmVwb3J0XCIsXG4gICAgXCJMaW5rXCI6IFwiPGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9Jyc+RG93bmxvYWQ8L2E+XCJcbiAgfSxcbiAge1xuICAgIFwiR2VvXCI6IFwiUmVnXCIsXG4gICAgXCJOYW1lXCI6IFwiRmFsa3ZpbGxlIFpvbmluZyBNYXBcIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiTmFtIGZyaW5naWxsYSBhY2N1bXNhbiBydXRydW0uIEZ1c2NlIHRpbmNpZHVudCBwcmV0aXVtIGFudGUsIGlkIHRpbmNpZHVudCBsb3JlbS4gTmFtIHNvbGxpY2l0dWRpbiBuaXNsIG51bmMsIGFjIG1hdHRpcyBhbnRlIHRyaXN0aXF1ZSBoZW5kcmVyaXQuXCIsXG4gICAgXCJUeXBlXCI6IFwicmVwb3J0XCIsXG4gICAgXCJMaW5rXCI6IFwiPGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9Jyc+RG93bmxvYWQ8L2E+XCJcbiAgfVxuXTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
