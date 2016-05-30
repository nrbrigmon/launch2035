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
    "Description": "Google Earth KML representing the cartographic boundaries of all US Census Places in the three county area. Contains GEOID so may be used to join with significant Census data.",
    "Type": "Shp",
    "Link": "http://ec2-52-7-5-52.compute-1.amazonaws.com:80/geoserver/wms/kml?layers=alabama:TriCountyCensusPlaces&mode=download",
    "Year": "2016"
  },
  {
    "Geo": "Reg",
    "Name": "MPO TAZ Layer Regional",
    "Description": "Google Earth KML representing the cartographic boundaries of all Transportation Analysis Zones in the the Huntsville and Decatur MPOs. The layer contains data for population, school enrollment, and employment for years 2010 and 2040.",
    "Type": "Shp",
    "Link": "http://ec2-52-7-5-52.compute-1.amazonaws.com:80/geoserver/wms/kml?layers=alabama:MPO_TAZ_05162016_WGS1984&mode=download",
    "Year": "2016"
  },
  // {
  //   "Geo": "Reg",
  //   "Name": "Huntsville MPO TAZ",
  //   "Description": "TBD",
  //   "Type": "Shp",
  //   "Link": "http://ec2-52-7-5-52.compute-1.amazonaws.com:80/geoserver/wms/kml?layers=alabama:MPO_TAZ_05162016_WGS1984&env=param:value&mode=download",
  //   "Year": "2016"
  // },
  // {
  //   "Geo": "Reg",
  //   "Name": "Decatur MPO TAZ",
  //   "Description": "TBD",
  //   "Type": "Shp",
  //   "Link": "http://ec2-52-7-5-52.compute-1.amazonaws.com:80/geoserver/wms/kml?layers=alabama:MPO_TAZ_05162016_WGS1984&env=param:value&mode=download",
  //   "Year": "2016"
  // },
  {
    "Geo": "Reg",
    "Name": "Watersheds",
    "Description": "Google Earth KML representing the cartographic boundaries of all subwatersheds found in the Wheeler Lake watershed which covers all three counties in Northern Alabama.",
    "Type": "Shp",
    "Link": "http://ec2-52-7-5-52.compute-1.amazonaws.com:80/geoserver/wms/kml?layers=alabama:Northern_AL_Watersheds_05162016&mode=download",
    "Year": "2016"
  },
  {
    "Geo": "Reg",
    "Name": "Ecoregions",
    "Description": "Google Earth KML representing the cartographic boundaries of all ecoregions spanning all three counties in Northern Alabama.",
    "Type": "Shp",
    "Link": "http://ec2-52-7-5-52.compute-1.amazonaws.com:80/geoserver/wms/kml?layers=alabama:Regional_Ecoregions&mode=download",
    "Year": "2016"
  },
  {
    "Geo": "Reg",
    "Name": "US Census Places/Cities",
    "Description": "CSV Tabular file of all US Census Places in the three county area. Contains GEOID so may be used to join with significant Census data.",
    "Type": "Table",
    "Link": "http://ec2-52-7-5-52.compute-1.amazonaws.com:80/geoserver/wfs?SERVICE=wfs&VERSION=1.0.0&REQUEST=getfeature&TYPENAME=alabama:TriCountyCensusPlaces&outputformat=csv",
    "Year": "2016"
  },
  {
    "Geo": "Reg",
    "Name": "MPO TAZ Layer Regional",
    "Description": "CSV Tabular file of all Transportation Analysis Zones in the the Huntsville and Decatur MPOs. The layer contains data for population, school enrollment, and employment for years 2010 and 2040.",
    "Type": "Table",
    "Link": "http://ec2-52-7-5-52.compute-1.amazonaws.com:80/geoserver/wfs?SERVICE=wfs&VERSION=1.0.0&REQUEST=getfeature&TYPENAME=alabama:MPO_TAZ_05162016_WGS1984&outputformat=csv",
    "Year": "2016"
  },
  // {
  //   "Geo": "Reg",
  //   "Name": "Huntsville MPO TAZ",
  //   "Description": "TBD",
  //   "Type": "Table",
  //   "Link": "",
  //   "Year": "2016"
  // },
  // {
  //   "Geo": "Reg",
  //   "Name": "Decatur MPO TAZ",
  //   "Description": "TBD",
  //   "Type": "Table",
  //   "Link": "",
  //   "Year": "2016"
  // },
  {
    "Geo": "Reg",
    "Name": "Watersheds",
    "Description": "CSV Tabular file of all subwatersheds found in the Wheeler Lake watershed which covers all three counties in Northern Alabama.",
    "Type": "Table",
    "Link": "http://ec2-52-7-5-52.compute-1.amazonaws.com:80/geoserver/wfs?SERVICE=wfs&VERSION=1.0.0&REQUEST=getfeature&TYPENAME=alabama:Northern_AL_Watersheds_05162016&outputformat=csv",
    "Year": "2016"
  },
  {
    "Geo": "Reg",
    "Name": "Ecoregions",
    "Description": "CSV Tabular file of all ecoregions spanning all three counties in Northern Alabama.",
    "Type": "Table",
    "Link": "http://ec2-52-7-5-52.compute-1.amazonaws.com:80/geoserver/wfs?SERVICE=wfs&VERSION=1.0.0&REQUEST=getfeature&TYPENAME=alabama:Regional_Ecoregions&outputformat=csv",
    "Year": "2016"
  },
  {
    "Geo": "Reg",
    "Name": "Huntsville Downtown Master Plan Update",
    "Description": "This document was designed to provide concrete, specific, implementable strategies for putting the Master Plan’s recommendations in place. It consists of four separate sections: the Master Plan, Implementation Strategies, Opportunity Sites, and Downtown Liveliness Strategies.",
    "Type": "Report",
    "Link": "https://drive.google.com/uc?export=download&id=0ByvsZKaRY1-9eFBvdHBGNlZRYjg",
    "Year": "2006"
  },
  {
    "Geo": "Reg",
    "Name": "Huntsville Land Use By Zoning",
    "Description": "A PDF map of the City of Huntsville showing Land Use Zoning Classifications with major and arterial roadway infrastructure.",
    "Type": "Map",
    "Link": "https://drive.google.com/uc?export=download&id=0ByvsZKaRY1-9ODUzX0ZKV3REbHc",
    "Year": "2015"
  },
  {
    "Geo": "Reg",
    "Name": "Huntsville Downtown Proposed Zoning Map",
    "Description": "A PDF file showing the proposed zoning for Downtown Huntsville during 2005. This map shows CAD lines for building footprints as well as roadway infrastructure.",
    "Type": "Map",
    "Link": "https://drive.google.com/uc?export=download&id=0ByvsZKaRY1-9SUZRSGdhUXJtb2c",
    "Year": "2005"
  },
  {
    "Geo": "Reg",
    "Name": "Huntsville Area Transportation Study",
    "Description": "The Year 2040 Transportation Plan (Huntsville Area Transportation Study) is a vision of the future transportation needs of the Huntsville Metropolitan area. It was designed to serve as a decision guide for major transportation improvements in the Huntsville urbanized area over a 25 year planning horizon, with an emphasis upon the next 3-5 years.",
    "Type": "Report",
    "Link": "https://drive.google.com/uc?export=download&id=0ByvsZKaRY1-9eU1yVi0tSTZDWkU",
    "Year": "2016"
  },
  {
    "Geo": "Reg",
    "Name": "City of Madison Growth Plan",
    "Description": "The Madison Growth Plan sets forth a collective vision for the future of the City. It was funded by the City Council, guided by the urban planning firm Urban Collage, and informed by the property owners and residents of the City. It lays out goals and strategies for Madison’s future for years to come.",
    "Type": "Report",
    "Link": "https://drive.google.com/uc?export=download&id=0ByvsZKaRY1-9WmZNa1FBRk16VUE",
    "Year": "--"
  },
  {
    "Geo": "Reg",
    "Name": "City of Madison Zoning Map",
    "Description": "PDF Zoning Map showing a wide range of codes and descriptions for the City of Madison. It includes major and arterial roadways, rail lines, and a quartile grid.",
    "Type": "Map",
    "Link": "https://drive.google.com/uc?export=download&id=0ByvsZKaRY1-9UnZvRF96dldjTGc",
    "Year": "--"
  },
  {
    "Geo": "Reg",
    "Name": "Athens Future Land Use Development Plan",
    "Description": "This document presents a strategy for development and a land use framework to be implemented over the next 10 to 20 years. The Strategic Development and Future Land Use sections are accompanied by various illustrations that will lay out the broad development and land use pattern the community seeks to achieve over the life of the plan. Findings as they relate to the community profile and the public participation program can be found in the appendix.",
    "Type": "Report",
    "Link": "https://drive.google.com/uc?export=download&id=0ByvsZKaRY1-9aG03MWkzMHFPeGM",
    "Year": "2013"
  },
  {
    "Geo": "Reg",
    "Name": "Falkville Zoning Map",
    "Description": "PDF Zoning map spanning the City of Falkville. It shows major roadways and arterials, rail lines, and a layer for the 100 year floodplain.",
    "Type": "Map",
    "Link": "https://drive.google.com/uc?export=download&id=0ByvsZKaRY1-9ZTJLckRYRkhoWmc",
    "Year": "2008"
  },
  {
    "Geo": "Reg",
    "Name": "Athens City-wide Strategic Development Plan",
    "Description": "PDF Map showing the predominant zones of development like 'suburbs', 'recreation', 'industrial', and 'neighborhood center' throughout the city limits as well as a transect of the City of Athens.",
    "Type": "Map",
    "Link": "https://drive.google.com/uc?export=download&id=00ByvsZKaRY1-9bEx0ZjVQTjg0aUk",
    "Year": "2013"
  },
  {
    "Geo": "Reg",
    "Name": "Athens City Center Strategic Development Plan",
    "Description": "PDF Map describing in detail particular zones of development in the city center like 'downtown', 'institutional', 'urban neighborhood', and 'priority parks' throughout the city limits as well as a transect of the area.",
    "Type": "Map",
    "Link": "https://drive.google.com/uc?export=download&id=0ByvsZKaRY1-9YkowaWg5Y0hyeGc",
    "Year": "2013"
  },
  {
    "Geo": "Reg",
    "Name": "Athens City-wide Future Land Use Plan",
    "Description": "A future land use map showing the prescribed zones of land use across the City of Athens.",
    "Type": "Map",
    "Link": "https://drive.google.com/uc?export=download&id=0ByvsZKaRY1-9M25sNEFQZTRXeDA",
    "Year": "2013"
  },
  {
    "Geo": "Reg",
    "Name": "Athens City-wide Current Land Use Map",
    "Description": "A future land use map showing the current zones of land use across the City of Athens.",
    "Type": "Map",
    "Link": "https://drive.google.com/uc?export=download&id=0ByvsZKaRY1-9RGI4cUVISWpfMDQ",
    "Year": "2013"
  },
  {
    "Geo": "Reg",
    "Name": "Athens City Center Future Land Use Plan",
    "Description": "A future land use map showing the prescribed zones of land use in the center of Athens.",
    "Type": "Map",
    "Link": "https://drive.google.com/uc?export=download&id=0ByvsZKaRY1-9YkI2emg3MXV0a2M",
    "Year": "2013"
  },
  {
    "Geo": "Reg",
    "Name": "Huntsville 2040 Trans Plan MPO Map",
    "Description": "A large PDF map from the Huntsville Area Transportation Study showing the span of the Urban Area's coverage as well as the various cities found within the study area.",
    "Type": "Map",
    "Link": "https://drive.google.com/uc?export=download&id=0ByvsZKaRY1-9QjZKLTAtTW5PT2M",
    "Year": "2016"
  }
];
let limestone_dataset: Array<RegionalDataset> = [
  {
    "Geo": "Reg",
    "Name": "...",
    "Description": "Coming Soon...",
    "Type": "Map",
    "Link": "",
    "Year": "..."
  },{
    "Geo": "Reg",
    "Name": "...",
    "Description": "Coming Soon...",
    "Type": "Report",
    "Link": "",
    "Year": "..."
  },{
    "Geo": "Reg",
    "Name": "...",
    "Description": "Coming Soon...",
    "Type": "Table",
    "Link": "",
    "Year": "..."
  },{
    "Geo": "Reg",
    "Name": "...",
    "Description": "Coming Soon...",
    "Type": "Shp",
    "Link": "",
    "Year": "..."
  }];
  let morgan_dataset: Array<RegionalDataset> = [
    {
      "Geo": "Reg",
      "Name": "...",
      "Description": "Coming Soon...",
      "Type": "Map",
      "Link": "",
      "Year": "..."
    },{
      "Geo": "Reg",
      "Name": "...",
      "Description": "Coming Soon...",
      "Type": "Report",
      "Link": "",
      "Year": "..."
    },{
      "Geo": "Reg",
      "Name": "...",
      "Description": "Coming Soon...",
      "Type": "Table",
      "Link": "",
      "Year": "..."
    },{
      "Geo": "Reg",
      "Name": "...",
      "Description": "Coming Soon...",
      "Type": "Shp",
      "Link": "",
      "Year": "..."
    }];
let madison_dataset: Array<RegionalDataset> =[
  {
    "Geo": "Reg",
    "Name": "...",
    "Description": "Coming Soon...",
    "Type": "Map",
    "Link": "",
    "Year": "..."
  },{
    "Geo": "Reg",
    "Name": "...",
    "Description": "Coming Soon...",
    "Type": "Report",
    "Link": "",
    "Year": "..."
  },{
    "Geo": "Reg",
    "Name": "...",
    "Description": "Coming Soon...",
    "Type": "Table",
    "Link": "",
    "Year": "..."
  },{
    "Geo": "Reg",
    "Name": "...",
    "Description": "Coming Soon...",
    "Type": "Shp",
    "Link": "",
    "Year": "..."
  }];
