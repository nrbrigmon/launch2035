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
                    "Description": "TBD",
                    "Type": "Shp",
                    "Link": "",
                    "Year": "2016"
                },
                {
                    "Geo": "Reg",
                    "Name": "MPO TAZ Layer Regional",
                    "Description": "TBD",
                    "Type": "Shp",
                    "Link": "",
                    "Year": "2016"
                },
                {
                    "Geo": "Reg",
                    "Name": "Huntsville MPO TAZ",
                    "Description": "TBD",
                    "Type": "Shp",
                    "Link": "",
                    "Year": "2016"
                },
                {
                    "Geo": "Reg",
                    "Name": "Decatur MPO TAZ",
                    "Description": "TBD",
                    "Type": "Shp",
                    "Link": "",
                    "Year": "2016"
                },
                {
                    "Geo": "Reg",
                    "Name": "Watersheds",
                    "Description": "TBD",
                    "Type": "Shp",
                    "Link": "",
                    "Year": "2016"
                },
                {
                    "Geo": "Reg",
                    "Name": "Ecoregions",
                    "Description": "TBD",
                    "Type": "Shp",
                    "Link": "",
                    "Year": "2016"
                },
                {
                    "Geo": "Reg",
                    "Name": "US Census Places/Cities",
                    "Description": "TBD",
                    "Type": "Table",
                    "Link": "",
                    "Year": "2016"
                },
                {
                    "Geo": "Reg",
                    "Name": "MPO TAZ Layer Regional",
                    "Description": "TBD",
                    "Type": "Table",
                    "Link": "",
                    "Year": "2016"
                },
                {
                    "Geo": "Reg",
                    "Name": "Huntsville MPO TAZ",
                    "Description": "TBD",
                    "Type": "Table",
                    "Link": "",
                    "Year": "2016"
                },
                {
                    "Geo": "Reg",
                    "Name": "Decatur MPO TAZ",
                    "Description": "TBD",
                    "Type": "Table",
                    "Link": "",
                    "Year": "2016"
                },
                {
                    "Geo": "Reg",
                    "Name": "Watersheds",
                    "Description": "TBD",
                    "Type": "Table",
                    "Link": "",
                    "Year": "2016"
                },
                {
                    "Geo": "Reg",
                    "Name": "Ecoregions",
                    "Description": "TBD",
                    "Type": "Table",
                    "Link": "",
                    "Year": "2016"
                },
                {
                    "Geo": "Reg",
                    "Name": "Huntsville Downtown Master Plan",
                    "Description": "TBD",
                    "Type": "Report",
                    "Link": "",
                    "Year": "2006"
                },
                {
                    "Geo": "Reg",
                    "Name": "Huntsville Land Use By Zoning",
                    "Description": "TBD",
                    "Type": "Report",
                    "Link": "",
                    "Year": "2015"
                },
                {
                    "Geo": "Reg",
                    "Name": "Huntsville Downtown Proposed Zoning Map",
                    "Description": "TBD",
                    "Type": "Map",
                    "Link": "",
                    "Year": "2005"
                },
                {
                    "Geo": "Reg",
                    "Name": "Huntsville Area Transportation Study",
                    "Description": "TBD",
                    "Type": "Report",
                    "Link": "",
                    "Year": "2016"
                },
                {
                    "Geo": "Reg",
                    "Name": "City of Madison Growth Plan",
                    "Description": "TBD",
                    "Type": "Report",
                    "Link": "",
                    "Year": "--"
                },
                {
                    "Geo": "Reg",
                    "Name": "City of Madison Zoning Map",
                    "Description": "TBD",
                    "Type": "Map",
                    "Link": "",
                    "Year": "--"
                },
                {
                    "Geo": "Reg",
                    "Name": "Athens Future Land Use Development Plan",
                    "Description": "TBD",
                    "Type": "Report",
                    "Link": "",
                    "Year": "2013"
                },
                {
                    "Geo": "Reg",
                    "Name": "Falkville Zoning Map",
                    "Description": "TBD",
                    "Type": "Map",
                    "Link": "",
                    "Year": "2008"
                },
                {
                    "Geo": "Reg",
                    "Name": "Athens Citywide Strategic Development Plan",
                    "Description": "TBD",
                    "Type": "Map",
                    "Link": "",
                    "Year": "2013"
                },
                {
                    "Geo": "Reg",
                    "Name": "Athens City Center Strategic Development Plan",
                    "Description": "TBD",
                    "Type": "Map",
                    "Link": "",
                    "Year": "2013"
                },
                {
                    "Geo": "Reg",
                    "Name": "Athens Ctiywide Future Land Use Plan",
                    "Description": "TBD",
                    "Type": "Map",
                    "Link": "",
                    "Year": "2013"
                },
                {
                    "Geo": "Reg",
                    "Name": "Athens Citywide Current Land Use Map",
                    "Description": "TBD",
                    "Type": "Map",
                    "Link": "",
                    "Year": "2013"
                },
                {
                    "Geo": "Reg",
                    "Name": "Athens Ciy Center Future Land Use Plan",
                    "Description": "TBD",
                    "Type": "Map",
                    "Link": "",
                    "Year": "2013"
                },
                {
                    "Geo": "Reg",
                    "Name": "Huntsville 2040 Trans Plan MPO Map",
                    "Description": "TBD",
                    "Type": "Map",
                    "Link": "",
                    "Year": "2016"
                }
            ];
            limestone_dataset = [
                {
                    "Geo": "TBD",
                    "Name": "TBD",
                    "Description": "TBD",
                    "Type": "Report",
                    "Link": "TBD",
                    "Year": "2016"
                }];
            morgan_dataset = [
                {
                    "Geo": "TBD",
                    "Name": "TBD",
                    "Description": "TBD",
                    "Type": "Report",
                    "Link": "TBD",
                    "Year": "2016"
                }];
            madison_dataset = [
                {
                    "Geo": "TBD",
                    "Name": "TBD",
                    "Description": "TBD",
                    "Type": "Report",
                    "Link": "TBD",
                    "Year": "2016"
                }];
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhcmVob3VzZS9kYXRhc2V0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozt3QkEwQkksZ0JBQWdCLEVBa05oQixpQkFBaUIsRUFTZixjQUFjLEVBU2hCLGVBQWU7Ozs7Ozs7WUExUG5CO2dCQUFBO2dCQW1CQSxDQUFDO2dCQWpCQyxzQ0FBc0M7Z0JBQ3RDLHFEQUFxRDtnQkFDckQsb0NBQW9DO2dCQUNwQyw0RkFBNEY7Z0JBQzVGLElBQUk7Z0JBRUosMkNBQWtCLEdBQWxCLFVBQW1CLENBQVE7b0JBQ3pCLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQSxDQUFDO3dCQUNmLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDMUIsQ0FBQztvQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ3ZCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztvQkFDM0IsQ0FBQztvQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ3ZCLE1BQU0sQ0FBQyxjQUFjLENBQUM7b0JBQ3hCLENBQUM7b0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUN2QixNQUFNLENBQUMsZUFBZSxDQUFDO29CQUN6QixDQUFDO2dCQUNILENBQUM7Z0JBbkJIO29CQUFDLGlCQUFVLEVBQUU7O2tDQUFBO2dCQW9CYixxQkFBQztZQUFELENBbkJBLEFBbUJDLElBQUE7WUFuQkQsMkNBbUJDLENBQUE7WUFHRyxnQkFBZ0IsR0FBMkI7Z0JBQzdDO29CQUNFLEtBQUssRUFBRSxLQUFLO29CQUNaLE1BQU0sRUFBRSx5QkFBeUI7b0JBQ2pDLGFBQWEsRUFBRSxLQUFLO29CQUNwQixNQUFNLEVBQUUsS0FBSztvQkFDYixNQUFNLEVBQUUsRUFBRTtvQkFDVixN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QztvQkFDRSxLQUFLLEVBQUUsS0FBSztvQkFDWixNQUFNLEVBQUUsS0FBSztvQkFDYixhQUFhLEVBQUUsS0FBSztvQkFDcEIsTUFBTSxFQUFFLFFBQVE7b0JBQ2hCLE1BQU0sRUFBRSxLQUFLO29CQUNiLE1BQU0sRUFBRSxNQUFNO2lCQUNmLENBQUMsQ0FBQztZQUNDLGNBQWMsR0FBMkI7Z0JBQzNDO29CQUNFLEtBQUssRUFBRSxLQUFLO29CQUNaLE1BQU0sRUFBRSxLQUFLO29CQUNiLGFBQWEsRUFBRSxLQUFLO29CQUNwQixNQUFNLEVBQUUsUUFBUTtvQkFDaEIsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsTUFBTSxFQUFFLE1BQU07aUJBQ2YsQ0FBQyxDQUFDO1lBQ0gsZUFBZSxHQUEwQjtnQkFDM0M7b0JBQ0UsS0FBSyxFQUFFLEtBQUs7b0JBQ1osTUFBTSxFQUFFLEtBQUs7b0JBQ2IsYUFBYSxFQUFFLEtBQUs7b0JBQ3BCLE1BQU0sRUFBRSxRQUFRO29CQUNoQixNQUFNLEVBQUUsS0FBSztvQkFDYixNQUFNLEVBQUUsTUFBTTtpQkFDZixDQUFDLENBQUMiLCJmaWxlIjoid2FyZWhvdXNlL2RhdGFzZXQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlZ2lvbmFsRGF0YXNldH0gZnJvbSAnLi9kYXRhc2V0LnNjaGVtYSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhc2V0U2VydmljZSB7XG5cbiAgLy8gY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge31cbiAgLy8gZ2V0RGF0YUJ5R2VvZ3JhcGh5KCk6IE9ic2VydmFibGU8UmVnaW9uYWxEYXRhc2V0PntcbiAgLy8gICAgIGNvbnNvbGUubG9nKCdnZXR0aW5nIGpzb24/Jyk7XG4gIC8vICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoJy9hcHAvanNvbi9NT0NLX0RBVEFfMS5qc29uJykubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gIC8vIH1cblxuICBnZXREYXRhQnlHZW9ncmFwaHkoczpzdHJpbmcpe1xuICAgIGlmIChzID09PSAncmVnJyl7XG4gICAgICByZXR1cm4gcmVnaW9uYWxfZGF0YXNldDtcbiAgICB9IGVsc2UgaWYgKHMgPT09ICdsaW0nKSB7XG4gICAgICByZXR1cm4gbGltZXN0b25lX2RhdGFzZXQ7XG4gICAgfSBlbHNlIGlmIChzID09PSAnbW9yJykge1xuICAgICAgcmV0dXJuIG1vcmdhbl9kYXRhc2V0O1xuICAgIH0gZWxzZSBpZiAocyA9PT0gJ21hZCcpIHtcbiAgICAgIHJldHVybiBtYWRpc29uX2RhdGFzZXQ7XG4gICAgfVxuICB9XG59XG5cblxubGV0IHJlZ2lvbmFsX2RhdGFzZXQ6IEFycmF5PFJlZ2lvbmFsRGF0YXNldD4gPSBbXG4gIHtcbiAgICBcIkdlb1wiOiBcIlJlZ1wiLFxuICAgIFwiTmFtZVwiOiBcIlVTIENlbnN1cyBQbGFjZXMvQ2l0aWVzXCIsXG4gICAgXCJEZXNjcmlwdGlvblwiOiBcIlRCRFwiLFxuICAgIFwiVHlwZVwiOiBcIlNocFwiLFxuICAgIFwiTGlua1wiOiBcIlwiLFxuICAgIFwiWWVhclwiOiBcIjIwMTZcIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJNUE8gVEFaIExheWVyIFJlZ2lvbmFsXCIsXG4gICAgXCJEZXNjcmlwdGlvblwiOiBcIlRCRFwiLFxuICAgIFwiVHlwZVwiOiBcIlNocFwiLFxuICAgIFwiTGlua1wiOiBcIlwiLFxuICAgIFwiWWVhclwiOiBcIjIwMTZcIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJIdW50c3ZpbGxlIE1QTyBUQVpcIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiVEJEXCIsXG4gICAgXCJUeXBlXCI6IFwiU2hwXCIsXG4gICAgXCJMaW5rXCI6IFwiXCIsXG4gICAgXCJZZWFyXCI6IFwiMjAxNlwiXG4gIH0sXG4gIHtcbiAgICBcIkdlb1wiOiBcIlJlZ1wiLFxuICAgIFwiTmFtZVwiOiBcIkRlY2F0dXIgTVBPIFRBWlwiLFxuICAgIFwiRGVzY3JpcHRpb25cIjogXCJUQkRcIixcbiAgICBcIlR5cGVcIjogXCJTaHBcIixcbiAgICBcIkxpbmtcIjogXCJcIixcbiAgICBcIlllYXJcIjogXCIyMDE2XCJcbiAgfSxcbiAge1xuICAgIFwiR2VvXCI6IFwiUmVnXCIsXG4gICAgXCJOYW1lXCI6IFwiV2F0ZXJzaGVkc1wiLFxuICAgIFwiRGVzY3JpcHRpb25cIjogXCJUQkRcIixcbiAgICBcIlR5cGVcIjogXCJTaHBcIixcbiAgICBcIkxpbmtcIjogXCJcIixcbiAgICBcIlllYXJcIjogXCIyMDE2XCJcbiAgfSxcbiAge1xuICAgIFwiR2VvXCI6IFwiUmVnXCIsXG4gICAgXCJOYW1lXCI6IFwiRWNvcmVnaW9uc1wiLFxuICAgIFwiRGVzY3JpcHRpb25cIjogXCJUQkRcIixcbiAgICBcIlR5cGVcIjogXCJTaHBcIixcbiAgICBcIkxpbmtcIjogXCJcIixcbiAgICBcIlllYXJcIjogXCIyMDE2XCJcbiAgfSxcbiAge1xuICAgIFwiR2VvXCI6IFwiUmVnXCIsXG4gICAgXCJOYW1lXCI6IFwiVVMgQ2Vuc3VzIFBsYWNlcy9DaXRpZXNcIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiVEJEXCIsXG4gICAgXCJUeXBlXCI6IFwiVGFibGVcIixcbiAgICBcIkxpbmtcIjogXCJcIixcbiAgICBcIlllYXJcIjogXCIyMDE2XCJcbiAgfSxcbiAge1xuICAgIFwiR2VvXCI6IFwiUmVnXCIsXG4gICAgXCJOYW1lXCI6IFwiTVBPIFRBWiBMYXllciBSZWdpb25hbFwiLFxuICAgIFwiRGVzY3JpcHRpb25cIjogXCJUQkRcIixcbiAgICBcIlR5cGVcIjogXCJUYWJsZVwiLFxuICAgIFwiTGlua1wiOiBcIlwiLFxuICAgIFwiWWVhclwiOiBcIjIwMTZcIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJIdW50c3ZpbGxlIE1QTyBUQVpcIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiVEJEXCIsXG4gICAgXCJUeXBlXCI6IFwiVGFibGVcIixcbiAgICBcIkxpbmtcIjogXCJcIixcbiAgICBcIlllYXJcIjogXCIyMDE2XCJcbiAgfSxcbiAge1xuICAgIFwiR2VvXCI6IFwiUmVnXCIsXG4gICAgXCJOYW1lXCI6IFwiRGVjYXR1ciBNUE8gVEFaXCIsXG4gICAgXCJEZXNjcmlwdGlvblwiOiBcIlRCRFwiLFxuICAgIFwiVHlwZVwiOiBcIlRhYmxlXCIsXG4gICAgXCJMaW5rXCI6IFwiXCIsXG4gICAgXCJZZWFyXCI6IFwiMjAxNlwiXG4gIH0sXG4gIHtcbiAgICBcIkdlb1wiOiBcIlJlZ1wiLFxuICAgIFwiTmFtZVwiOiBcIldhdGVyc2hlZHNcIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiVEJEXCIsXG4gICAgXCJUeXBlXCI6IFwiVGFibGVcIixcbiAgICBcIkxpbmtcIjogXCJcIixcbiAgICBcIlllYXJcIjogXCIyMDE2XCJcbiAgfSxcbiAge1xuICAgIFwiR2VvXCI6IFwiUmVnXCIsXG4gICAgXCJOYW1lXCI6IFwiRWNvcmVnaW9uc1wiLFxuICAgIFwiRGVzY3JpcHRpb25cIjogXCJUQkRcIixcbiAgICBcIlR5cGVcIjogXCJUYWJsZVwiLFxuICAgIFwiTGlua1wiOiBcIlwiLFxuICAgIFwiWWVhclwiOiBcIjIwMTZcIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJIdW50c3ZpbGxlIERvd250b3duIE1hc3RlciBQbGFuXCIsXG4gICAgXCJEZXNjcmlwdGlvblwiOiBcIlRCRFwiLFxuICAgIFwiVHlwZVwiOiBcIlJlcG9ydFwiLFxuICAgIFwiTGlua1wiOiBcIlwiLFxuICAgIFwiWWVhclwiOiBcIjIwMDZcIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJIdW50c3ZpbGxlIExhbmQgVXNlIEJ5IFpvbmluZ1wiLFxuICAgIFwiRGVzY3JpcHRpb25cIjogXCJUQkRcIixcbiAgICBcIlR5cGVcIjogXCJSZXBvcnRcIixcbiAgICBcIkxpbmtcIjogXCJcIixcbiAgICBcIlllYXJcIjogXCIyMDE1XCJcbiAgfSxcbiAge1xuICAgIFwiR2VvXCI6IFwiUmVnXCIsXG4gICAgXCJOYW1lXCI6IFwiSHVudHN2aWxsZSBEb3dudG93biBQcm9wb3NlZCBab25pbmcgTWFwXCIsXG4gICAgXCJEZXNjcmlwdGlvblwiOiBcIlRCRFwiLFxuICAgIFwiVHlwZVwiOiBcIk1hcFwiLFxuICAgIFwiTGlua1wiOiBcIlwiLFxuICAgIFwiWWVhclwiOiBcIjIwMDVcIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJIdW50c3ZpbGxlIEFyZWEgVHJhbnNwb3J0YXRpb24gU3R1ZHlcIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiVEJEXCIsXG4gICAgXCJUeXBlXCI6IFwiUmVwb3J0XCIsXG4gICAgXCJMaW5rXCI6IFwiXCIsXG4gICAgXCJZZWFyXCI6IFwiMjAxNlwiXG4gIH0sXG4gIHtcbiAgICBcIkdlb1wiOiBcIlJlZ1wiLFxuICAgIFwiTmFtZVwiOiBcIkNpdHkgb2YgTWFkaXNvbiBHcm93dGggUGxhblwiLFxuICAgIFwiRGVzY3JpcHRpb25cIjogXCJUQkRcIixcbiAgICBcIlR5cGVcIjogXCJSZXBvcnRcIixcbiAgICBcIkxpbmtcIjogXCJcIixcbiAgICBcIlllYXJcIjogXCItLVwiXG4gIH0sXG4gIHtcbiAgICBcIkdlb1wiOiBcIlJlZ1wiLFxuICAgIFwiTmFtZVwiOiBcIkNpdHkgb2YgTWFkaXNvbiBab25pbmcgTWFwXCIsXG4gICAgXCJEZXNjcmlwdGlvblwiOiBcIlRCRFwiLFxuICAgIFwiVHlwZVwiOiBcIk1hcFwiLFxuICAgIFwiTGlua1wiOiBcIlwiLFxuICAgIFwiWWVhclwiOiBcIi0tXCJcbiAgfSxcbiAge1xuICAgIFwiR2VvXCI6IFwiUmVnXCIsXG4gICAgXCJOYW1lXCI6IFwiQXRoZW5zIEZ1dHVyZSBMYW5kIFVzZSBEZXZlbG9wbWVudCBQbGFuXCIsXG4gICAgXCJEZXNjcmlwdGlvblwiOiBcIlRCRFwiLFxuICAgIFwiVHlwZVwiOiBcIlJlcG9ydFwiLFxuICAgIFwiTGlua1wiOiBcIlwiLFxuICAgIFwiWWVhclwiOiBcIjIwMTNcIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJGYWxrdmlsbGUgWm9uaW5nIE1hcFwiLFxuICAgIFwiRGVzY3JpcHRpb25cIjogXCJUQkRcIixcbiAgICBcIlR5cGVcIjogXCJNYXBcIixcbiAgICBcIkxpbmtcIjogXCJcIixcbiAgICBcIlllYXJcIjogXCIyMDA4XCJcbiAgfSxcbiAge1xuICAgIFwiR2VvXCI6IFwiUmVnXCIsXG4gICAgXCJOYW1lXCI6IFwiQXRoZW5zIENpdHl3aWRlIFN0cmF0ZWdpYyBEZXZlbG9wbWVudCBQbGFuXCIsXG4gICAgXCJEZXNjcmlwdGlvblwiOiBcIlRCRFwiLFxuICAgIFwiVHlwZVwiOiBcIk1hcFwiLFxuICAgIFwiTGlua1wiOiBcIlwiLFxuICAgIFwiWWVhclwiOiBcIjIwMTNcIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJBdGhlbnMgQ2l0eSBDZW50ZXIgU3RyYXRlZ2ljIERldmVsb3BtZW50IFBsYW5cIixcbiAgICBcIkRlc2NyaXB0aW9uXCI6IFwiVEJEXCIsXG4gICAgXCJUeXBlXCI6IFwiTWFwXCIsXG4gICAgXCJMaW5rXCI6IFwiXCIsXG4gICAgXCJZZWFyXCI6IFwiMjAxM1wiXG4gIH0sXG4gIHtcbiAgICBcIkdlb1wiOiBcIlJlZ1wiLFxuICAgIFwiTmFtZVwiOiBcIkF0aGVucyBDdGl5d2lkZSBGdXR1cmUgTGFuZCBVc2UgUGxhblwiLFxuICAgIFwiRGVzY3JpcHRpb25cIjogXCJUQkRcIixcbiAgICBcIlR5cGVcIjogXCJNYXBcIixcbiAgICBcIkxpbmtcIjogXCJcIixcbiAgICBcIlllYXJcIjogXCIyMDEzXCJcbiAgfSxcbiAge1xuICAgIFwiR2VvXCI6IFwiUmVnXCIsXG4gICAgXCJOYW1lXCI6IFwiQXRoZW5zIENpdHl3aWRlIEN1cnJlbnQgTGFuZCBVc2UgTWFwXCIsXG4gICAgXCJEZXNjcmlwdGlvblwiOiBcIlRCRFwiLFxuICAgIFwiVHlwZVwiOiBcIk1hcFwiLFxuICAgIFwiTGlua1wiOiBcIlwiLFxuICAgIFwiWWVhclwiOiBcIjIwMTNcIlxuICB9LFxuICB7XG4gICAgXCJHZW9cIjogXCJSZWdcIixcbiAgICBcIk5hbWVcIjogXCJBdGhlbnMgQ2l5IENlbnRlciBGdXR1cmUgTGFuZCBVc2UgUGxhblwiLFxuICAgIFwiRGVzY3JpcHRpb25cIjogXCJUQkRcIixcbiAgICBcIlR5cGVcIjogXCJNYXBcIixcbiAgICBcIkxpbmtcIjogXCJcIixcbiAgICBcIlllYXJcIjogXCIyMDEzXCJcbiAgfSxcbiAge1xuICAgIFwiR2VvXCI6IFwiUmVnXCIsXG4gICAgXCJOYW1lXCI6IFwiSHVudHN2aWxsZSAyMDQwIFRyYW5zIFBsYW4gTVBPIE1hcFwiLFxuICAgIFwiRGVzY3JpcHRpb25cIjogXCJUQkRcIixcbiAgICBcIlR5cGVcIjogXCJNYXBcIixcbiAgICBcIkxpbmtcIjogXCJcIixcbiAgICBcIlllYXJcIjogXCIyMDE2XCJcbiAgfVxuXTtcbmxldCBsaW1lc3RvbmVfZGF0YXNldDogQXJyYXk8UmVnaW9uYWxEYXRhc2V0PiA9IFtcbiAge1xuICAgIFwiR2VvXCI6IFwiVEJEXCIsXG4gICAgXCJOYW1lXCI6IFwiVEJEXCIsXG4gICAgXCJEZXNjcmlwdGlvblwiOiBcIlRCRFwiLFxuICAgIFwiVHlwZVwiOiBcIlJlcG9ydFwiLFxuICAgIFwiTGlua1wiOiBcIlRCRFwiLFxuICAgIFwiWWVhclwiOiBcIjIwMTZcIlxuICB9XTtcbiAgbGV0IG1vcmdhbl9kYXRhc2V0OiBBcnJheTxSZWdpb25hbERhdGFzZXQ+ID0gW1xuICAgIHtcbiAgICAgIFwiR2VvXCI6IFwiVEJEXCIsXG4gICAgICBcIk5hbWVcIjogXCJUQkRcIixcbiAgICAgIFwiRGVzY3JpcHRpb25cIjogXCJUQkRcIixcbiAgICAgIFwiVHlwZVwiOiBcIlJlcG9ydFwiLFxuICAgICAgXCJMaW5rXCI6IFwiVEJEXCIsXG4gICAgICBcIlllYXJcIjogXCIyMDE2XCJcbiAgICB9XTtcbmxldCBtYWRpc29uX2RhdGFzZXQ6IEFycmF5PFJlZ2lvbmFsRGF0YXNldD4gPVtcbiAge1xuICAgIFwiR2VvXCI6IFwiVEJEXCIsXG4gICAgXCJOYW1lXCI6IFwiVEJEXCIsXG4gICAgXCJEZXNjcmlwdGlvblwiOiBcIlRCRFwiLFxuICAgIFwiVHlwZVwiOiBcIlJlcG9ydFwiLFxuICAgIFwiTGlua1wiOiBcIlRCRFwiLFxuICAgIFwiWWVhclwiOiBcIjIwMTZcIlxuICB9XTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
