import { Component, OnInit } from '@angular/core';
import { LegislatorService } from "../legislator.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-legislator-details',
  templateUrl: './legislator-details.component.html',
  styleUrls: ['./legislator-details.component.css'],
  providers: [LegislatorService]
})
export class LegislatorDetailsComponent implements OnInit {
  legislatorId: string;
  legislator: string;
  voteHistory: any;

  constructor(private route: ActivatedRoute, private legislatorService: LegislatorService) {
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
    this.legislatorService.getLegislator(legislatorId).subscribe(data => this.legislator = data);
  }

  ngOnInit() {
  }

}
