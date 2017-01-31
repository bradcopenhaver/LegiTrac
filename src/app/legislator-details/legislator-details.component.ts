import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {LegislatorService} from '../legislator.service';

@Component({
  selector: 'app-legislator-details',
  templateUrl: './legislator-details.component.html',
  styleUrls: ['./legislator-details.component.css'],
  providers: [LegislatorService]
})
export class LegislatorDetailsComponent implements OnInit {
  memberId: string;
  memberToDisplay;
  constructor(private legislatorService: LegislatorService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((urlParams) => {
      this.memberId = urlParams['memberId'];
    });
    this.memberToDisplay = this.legislatorService.getLegislatorById(this.memberId);
  }

}
