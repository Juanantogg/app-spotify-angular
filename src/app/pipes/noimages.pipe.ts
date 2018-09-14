import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimages'
})
export class NoimagesPipe implements PipeTransform {

  transform(value: any): String {

    if (value.length > 0) {
      return value[0]['url'];
    } else {
      return 'assets/img/noimage.png';
    }

  }

}
