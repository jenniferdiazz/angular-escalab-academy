import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(value: any, ...params:any[]): any {
    let trimed : any = value.replace(" ", "").trim();
    if(params[0] == 'lowercase'){
      trimed = trimed.toLowerCase();
    }
    console.log('params value pipe trim, -->', params);
    console.log('original value pipe trim, -->', value);
    console.log('arguments pipe trim, -->', trimed);
    return trimed;
  }

}
