import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName',
  pure: false
})
export class UserlistPipe implements PipeTransform {

  transform(items: Array<any>, filterVal: string, prop: string): any {
    return filterVal ?
      items.filter(item => item[prop].toLowerCase().indexOf(filterVal.toLowerCase()) !== -1) : items;
  }
}
