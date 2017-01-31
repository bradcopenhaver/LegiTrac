import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {LegislatorService} from '../legislator.service';

@Component({
  selector: 'app-legislator-results',
  templateUrl: './legislator-results.component.html',
  styleUrls: ['./legislator-results.component.css'],
  providers: [LegislatorService]
})
export class LegislatorResultsComponent implements OnInit {
  zipInput: string;
  arrayOfMemberData;

  constructor(private route: ActivatedRoute, private legislatorService: LegislatorService) { }

  ngOnInit() {
    this.route.params.forEach((urlParams) => {
      this.zipInput = urlParams['zipInput'];
    });
    //Don't forget the async pipe when displaying this data in the template.
    this.arrayOfMemberData = this.legislatorService.getLegislatorsByZip(this.zipInput);

  }

}
