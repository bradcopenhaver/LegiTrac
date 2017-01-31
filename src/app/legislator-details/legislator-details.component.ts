import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {LegislatorService} from '../legislator.service';

@Component({
  selector: 'app-legislator-details',
  templateUrl: './legislator-details.component.html',
  styleUrls: ['./legislator-details.component.scss'],
  providers: [LegislatorService]
})
export class LegislatorDetailsComponent implements OnInit {
  legislatorId: string;
  legislator: any;
  voteHistory: any;

  constructor(private route: ActivatedRoute, private legislatorService: LegislatorService) { }

  ngOnInit() {
    this.route.params.forEach(params => {
      this.legislatorId = params['legislatorId'];
      this.getVoteHistory(this.legislatorId);
      this.getLegislator(this.legislatorId);
    });
  }

  getVoteHistory(legislatorId) {
    this.legislatorService.getVoteHistory(legislatorId).subscribe(data => this.voteHistory = data);
  }

  getLegislator(legislatorId) {
    this.legislatorService.getLegislator(legislatorId).subscribe(data => this.legislator = data[0]);
  }


}
