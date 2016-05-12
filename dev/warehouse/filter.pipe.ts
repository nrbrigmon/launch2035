import {Pipe} from '@angular/core';
import {PipeTransform} from '@angular/core';
import {RegionalDataset} from './dataset.schema';

@Pipe({
  name:'fileTypePipe'
}) 

export class FileTypePipe implements PipeTransform {
  transform(items:any, args:string[]) {
        let chosenFileType = args[0];
        if (chosenFileType == 'all') {
          return items;
        } else {
          return items.filter(item =>
            {
              return item.fileType === chosenFileType;
            }
          );
        }
    }
  // transform(value: RegionalDataset[], args:string[]):any{
  //   console.log('filtering...');
  //     if (value.length === 0 ){
  //       return value;
  //     }
  //
  //     let resultArray = [];
  //     for (let item of value) {
  //       if (item.name.match('^.*' + args[0] + '.*$')){
  //         resultArray.push(item);
  //       }
  //     }
  //     console.log(resultArray);
  //     return resultArray;
  // }
}
