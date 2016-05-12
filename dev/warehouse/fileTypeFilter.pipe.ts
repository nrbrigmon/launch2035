import {Pipe} from '@angular/core';
import {PipeTransform} from '@angular/core';
import {RegionalDataset} from './dataset.schema';

@Pipe({
  name:'fileTypePipe'
})

export class FileTypePipe implements PipeTransform {
  transform(items:any, args:string) {
      let chosenFileType = args;

      // console.log(fileType);
      console.log(chosenFileType);
      if (chosenFileType == 'all') {
        return items;
      } else {
        return items.filter(item =>
          {
            let fileType = item.link.slice(item.link.length-3,item.link.length);
            return fileType === chosenFileType;
          }
        );
      }
  }
}
