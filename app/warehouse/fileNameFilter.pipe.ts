import {Pipe} from '@angular/core';
import {PipeTransform} from '@angular/core';
import {RegionalDataset} from './dataset.schema';

@Pipe({
  name:'fileNamePipe'
})

export class FileNamePipe implements PipeTransform {
  transform(items:any, args:string[]) {
      console.log('filtering by input...');
      console.log(args);
        if (!args[0]){
          return items;
        } else {
          let resultArray = [];
          for (let item of items) {
            console.log(item);
            if (item.Name.match('^.*' + args + '.*$')){
              resultArray.push(item);
            }
          }
          return resultArray;
        }
    }

}
