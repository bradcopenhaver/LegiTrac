import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBills'
})
export class FilterBillsPipe implements PipeTransform {

  transform(input: any, choice: any): any {
    var output = [];
    if (choice === "Bills") {
      for (var i=0; i<input.length; i++ ) {
        if (input[i].bill.number != null) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
