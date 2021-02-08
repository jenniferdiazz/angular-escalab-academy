import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(value: any): any {
    let trimed : any = value.replace(" ", "").trim();
    console.log('arguments pipe trim, -->', trimed)
    return trimed;
  }

}
