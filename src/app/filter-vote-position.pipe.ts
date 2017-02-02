import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterVotePosition'
})
export class FilterVotePositionPipe implements PipeTransform {

  transform(input: any, choice: string): any {
    var output= [];

    if (choice != "") {
      for (var i=0; i<input.length; i++){
        if(input[i].position === choice) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
