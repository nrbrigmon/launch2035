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
      // console.log(chosenFileType);
      if (chosenFileType == 'All') {
        return items;
      } else {
        return items.filter(item =>
          {
            let fileType = item.Type;
            //  item.Type.slice(item.link.length-3,item.link.length);
            if (chosenFileType == 'Table'){
              console.log('or...');
              return fileType === chosenFileType || fileType === 'Report';
            } else {
              return fileType === chosenFileType;
            }
          }
        );
      }
  }
}
