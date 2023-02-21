import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tomingo',
})
export class TomingoPipe implements PipeTransform {
  transform(ADDate: Date): Date {
    let mingoDate: any = '';
    if (ADDate) {
      mingoDate = new Date(ADDate);
      mingoDate.setFullYear(mingoDate.getFullYear() - 1911);
    }
    return mingoDate;
  }
}
