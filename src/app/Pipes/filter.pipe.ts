import { Pipe, PipeTransform } from '@angular/core';
import { Users } from '../users';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString:string){
    if (value.length === 0 || filterString == '') {
      return value;
    }
    const users = [];
    for (const users of value) {
      if (users['name'] === filterString){
        users.push(users);
      }
    }
    return Users;
  }
}