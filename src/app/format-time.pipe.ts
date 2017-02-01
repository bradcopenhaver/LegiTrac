import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {

  transform(value: string) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var output = [];
    if (value != null){
      var inputArray = value.split(" ");
      var dateArray = inputArray[0].split("-")
      output.push(months[parseInt(dateArray[1])-1]);
      output.push(dateArray[2]);
      output.push(parseInt(dateArray[0]));
      var newDate = output.join(" ");
      return newDate;
    } else {
      return value;
    }
  }

}
