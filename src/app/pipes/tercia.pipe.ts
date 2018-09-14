import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tercia'
})
export class TerciaPipe implements PipeTransform {

  transform(value: Number): String {
    const valueString = String(value).split('').reverse();
    const newValue: String[] = [];

    valueString.forEach((item, index) => {
      newValue.unshift(item);
      if (index > 0 && (index + 1) % 3 === 0) {
        newValue.unshift(', ');
      }
    });

    if (newValue[0] === ', ') {
      newValue.shift();
    }

    return newValue.join('');
  }

}
