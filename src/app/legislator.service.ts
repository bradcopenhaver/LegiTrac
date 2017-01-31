import { Injectable } from '@angular/core';

@Injectable()
export class LegislatorService {

  constructor() { }

  getLegislatorsByZip(zipInput) {
    //input is a zip code. use whoismyrep API to get names, then use our Firebase
    //database to get member IDs for each name. Return string of IDs concatted and
    //separated by +
  }

  getLegislatorById(memberId) {

  }
}
