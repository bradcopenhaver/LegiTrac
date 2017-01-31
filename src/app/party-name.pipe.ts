import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'partyName'
})
export class PartyNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let party = '';
    switch(value) {
      case 'D': party = 'Democratic'; break;
      case 'R': party = 'Republican'; break;
      case 'I': party = 'Independent'; break;
      default: party = value;
    }
    return party;
  }

}
