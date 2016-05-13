import {Component} from '@angular/core';
import {DatasetViewerComponent} from './dataset-viewer.component';
import {DatasetService} from './dataset.service';
import {RegionalDataset} from './dataset.schema';
import {MyHighMapsComponent} from './highmaps.component';

@Component({
  templateUrl: './dev/warehouse/warehouse.html',
  directives: [DatasetViewerComponent, MyHighMapsComponent],
  providers: [DatasetService],
  styleUrls:['./dev/warehouse/warehouse.css']
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
