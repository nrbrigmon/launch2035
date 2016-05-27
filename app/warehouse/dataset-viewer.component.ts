import {Component} from '@angular/core';
import {RegionalDataset} from './dataset.schema';
import {FileTypePipe} from './fileTypeFilter.pipe';
import {FileNamePipe} from './fileNameFilter.pipe';

@Component({
  selector:'dataset-viewer-component',
  styleUrls: ['./warehouse/warehouse.css'],
  templateUrl: './warehouse/warehouse-viewer.html',
  inputs: ['geography', 'searchInitiated'],
  pipes: [FileNamePipe, FileTypePipe]
})

export class DatasetViewerComponent {
  geography = Array<RegionalDataset>();
  _selection = 'All';
  bObj:string = '';

  fileSelection(s:string){
    this._selection = s;
    this.bObj = s;
  }
  onDownloadClick(){
    alert("Your download will start shortly... in theory");
  }
}