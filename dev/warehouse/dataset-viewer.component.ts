import {Component} from '@angular/core';
import {RegionalDataset} from './dataset.schema';
import {FileTypePipe} from './fileTypeFilter.pipe';
import {FileNamePipe} from './fileNameFilter.pipe';

@Component({
  selector:'dataset-viewer-component',
  styleUrls: ['./dev/warehouse/warehouse.css'],
  templateUrl: './dev/warehouse/warehouse-viewer.html',
  inputs: ['geography'],
  pipes: [FileNamePipe, FileTypePipe]
})

export class DatasetViewerComponent {
  geography = Array<RegionalDataset>();
  _selection = 'all';
  bObj:string = '';

  fileSelection(s:string){
    console.log(s);
    this._selection = s;
    this.bObj = s;
  }

}
