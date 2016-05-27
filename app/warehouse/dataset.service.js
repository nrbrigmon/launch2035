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
var DatasetService = (function () {
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
exports.DatasetService = DatasetService;
var regional_dataset = [
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
var limestone_dataset = [
    {
        "Geo": "TBD",
        "Name": "TBD",
        "Description": "TBD",
        "Type": "All",
        "Link": "TBD",
        "Year": "2016"
    }];
var morgan_dataset = [
    {
        "Geo": "TBD",
        "Name": "TBD",
        "Description": "TBD",
        "Type": "All",
        "Link": "TBD",
        "Year": "2016"
    }];
var madison_dataset = [
    {
        "Geo": "TBD",
        "Name": "TBD",
        "Description": "TBD",
        "Type": "All",
        "Link": "TBD",
        "Year": "2016"
    }];
//# sourceMappingURL=dataset.service.js.map