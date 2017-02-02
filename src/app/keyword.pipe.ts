import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyword'
})
export class KeywordPipe implements PipeTransform {

  transform(input: any, keyword: string): any {
    if (keyword != ""){
      var keywordLow = keyword.toLowerCase();
      var output = [];
      for (var i=0; i<input.length; i++) {
        if (input[i].bill) {
          var stringToCompare = (input[i].description + input[i].question + input[i].bill.title + input[i].bill.latest_action).toLowerCase();
          if(stringToCompare.includes(keywordLow)) {
            output.push(input[i]);
          }
        } else {
          var stringToCompare = (input[i].description + input[i].question).toLowerCase();
          if(stringToCompare.includes(keywordLow)) {
            output.push(input[i]);
          }
        }
      }
      if(output.length === 0){
        console.log("No matches");
        return input;
      } else {
        return output;
      }
    } else {
      return input;
    }
  }

}
