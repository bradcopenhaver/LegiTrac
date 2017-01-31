import { Component, OnInit } from '@angular/core';
import {LegislatorService} from '../legislator.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-legislator-search-location',
  templateUrl: './legislator-search-location.component.html',
  styleUrls: ['./legislator-search-location.component.css'],
  providers: [LegislatorService]
})
export class LegislatorSearchLocationComponent implements OnInit {

  constructor(private legislatorService: LegislatorService, private router: Router) { }

  ngOnInit() {
  }

  searchZip(zipInput: string) {
    var stringOfMemberIds; // = this.legislatorService.getLegislatorsByZip(zipInput);
    this.router.navigate(['legislator-results', stringOfMemberIds]);
  }
}
