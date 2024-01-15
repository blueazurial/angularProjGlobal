import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConvert'
})
export class TempConvertPipe implements PipeTransform {

  transform(value: number, args: string): string | undefined {
    let temp: number;

    if(value && !isNaN(value)) {
      if(args === 'C') {
        temp = (value - 32) / 1.8;
        return temp.toFixed(2);
      } 
      if (args === 'F') {
        temp = (value * 1.8) + 32;
        return temp.toFixed(2);
      }
    }
    return;
  }

}