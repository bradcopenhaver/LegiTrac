import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, Jsonp } from "@angular/http";
import { apiKey } from './apiKey';
import { Observable } from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class LegislatorService {
  headers: Headers = new Headers({'X-API-Key': apiKey});
  options: RequestOptions;

  constructor(private http: Http, private jsonp: Jsonp) {
    this.options = new RequestOptions({headers: this.headers});
  }

  getVoteHistory(memberId) {
    return this.proPublicaRequest(`https://api.propublica.org/congress/v1/members/${memberId}/votes.json`);
  }

  getLegislator(memberId) {
    return this.proPublicaRequest(`https://api.propublica.org/congress/v1/members/${memberId}.json`);
  }

  getBill(billId, congress = 115) {
    return this.proPublicaRequest(`https://api.propublica.org/congress/v1/${congress}/bills/${billId}.json`)
  }

  getRecentBills(type = 'introduced', chamber = 'senate', congress = '115') {
    return this.proPublicaRequest(`https://api.propublica.org/congress/v1/${congress}/${chamber}/bills/${type}.json`)
  }

  getLegislatorsByZipCode(zipCode) {
    return this.jsonp.get(`https://congress.api.sunlightfoundation.com/legislators/locate?zip=${zipCode}&callback=JSONP_CALLBACK`)
      .map(LegislatorService.extractData)
      .catch(LegislatorService.handleError)
  }

  searchBills(query) {
    return this.jsonp.get(`https://congress.api.sunlightfoundation.com/bills/search?query=${query}&callback=JSONP_CALLBACK`)
      .map(LegislatorService.extractData)
      .catch(LegislatorService.handleError)
  }


  // HTTP Helper Functions
  proPublicaRequest(url) {
    return this.http.get(url, this.options)
      .map(LegislatorService.extractData)
      .catch(LegislatorService.handleError)
  }

  static extractData(res: Response) {
    let body;
    try{
      body = res.json();
    } catch(e) {
      body = JSON.parse(res.text().replace(/&quot;/g, "\""));
    }
    return body.results || { };
  }
  static handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
