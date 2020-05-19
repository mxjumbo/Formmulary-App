import { Pipe, PipeTransform } from '@angular/core';
import { Drug } from '../models/drug';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  transform(drugList: Drug[], drug: string, column: string): Drug[] {
    if (drug === '') {
      return drugList;
    }

    drug = drug.toLowerCase();

    return drugList.filter(item  => {
      return item[column].toLowerCase().includes(drug);
    })
     
  }

}
