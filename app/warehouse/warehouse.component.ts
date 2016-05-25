import {Component} from '@angular/core';
import {DatasetViewerComponent} from './dataset-viewer.component';
import {DatasetService} from './dataset.service';
import {RegionalDataset} from './dataset.schema';

import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'warehouse/warehouse.html',
  directives: [DatasetViewerComponent],
  providers: [DatasetService],
  styleUrls:['warehouse/warehouse.css']
})

export class WarehouseComponent {
  selectedGeography: Array<RegionalDataset>;
  cObj:string = '';
  searchInitiated: boolean = false;

  constructor(private _datasetService : DatasetService){ }

  onGeoSelect(geography:string){
    this.searchInitiated = true;
    this.cObj = geography;
    this.selectedGeography = this._datasetService.getDataByGeography(geography);
    // console.log(this.selectedGeography);
  }

}
