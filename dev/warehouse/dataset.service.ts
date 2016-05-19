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
let limestone_dataset: Array<RegionalDataset> = [
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
let morgan_dataset: Array<RegionalDataset> =[
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
let madison_dataset: Array<RegionalDataset> =[
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
