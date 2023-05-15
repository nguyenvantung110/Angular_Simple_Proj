import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    if(!value) return null;
    if(!args) return value;
    return value.filter(f => f.Name.toLowerCase().includes(args.toLowerCase()));
  }

}
