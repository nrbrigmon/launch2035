import {Injectable} from '@angular/core';
import {RegionalDataset} from './dataset.schema';

@Injectable()
export class DatasetService {

  // constructor(private _http: Http) {}
  // getDataByGeography(): Observable<RegionalDataset>{
  //     console.log('getting json?');
  //     return this._http.get('/app/json/MOCK_DATA_1.json').map(response => response.json());
  // }

  getDataByGeography(s:string){
    if (s === 'reg'){
      return regional_dataset;
    } else if (s === 'lim') {
      return limestone_dataset;
    } else if (s === 'mor') {
      return morgan_dataset;
    } else if (s === 'mad') {
      return madison_dataset;
    }
  }
}


let regional_dataset: Array<RegionalDataset> = [
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
let limestone_dataset: Array<RegionalDataset> = [
  {
    "Geo": "TBD",
    "Name": "TBD",
    "Description": "TBD",
    "Type": "All",
    "Link": "TBD",
    "Year": "2016"
  }];
  let morgan_dataset: Array<RegionalDataset> = [
    {
      "Geo": "TBD",
      "Name": "TBD",
      "Description": "TBD",
      "Type": "All",
      "Link": "TBD",
      "Year": "2016"
    }];
let madison_dataset: Array<RegionalDataset> =[
  {
    "Geo": "TBD",
    "Name": "TBD",
    "Description": "TBD",
    "Type": "All",
    "Link": "TBD",
    "Year": "2016"
  }];
