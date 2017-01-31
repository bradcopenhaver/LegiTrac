import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {LegislatorService} from '../legislator.service';

@Component({
  selector: 'app-legislator-results',
  templateUrl: './legislator-results.component.html',
  styleUrls: ['./legislator-results.component.css']
})
export class LegislatorResultsComponent implements OnInit {
  stringOfMemberIds: string;
  arrayOfMemberData = [];

  constructor(private route: ActivatedRoute, private legislatorService: LegislatorService) { }

  ngOnInit() {
    this.route.params.forEach((urlParams) => {
      this.stringOfMemberIds = urlParams['ids'];
    });
    var idArray = this.stringOfMemberIds.split("+");
    //Don't forget the async pipe when displaying this data in the template.
    idArray.forEach(id => {
      this.arrayOfMemberData.push(/*this.legislatorService.getLegislatorById(id)*/);
    })
  }

}
