import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getBillId'
})
export class GetBillIdPipe implements PipeTransform {

  transform(billName: string, args?: any): any {
    return billName.toLowerCase().replace(/[. ]/g, "");
  }

}
