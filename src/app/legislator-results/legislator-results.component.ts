import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {LegislatorService} from '../legislator.service';
import { CapitalizePipe } from "../capitalize.pipe";

@Component({
  selector: 'app-legislator-results',
  templateUrl: './legislator-results.component.html',
  styleUrls: ['./legislator-results.component.scss'],
  providers: [LegislatorService]
})
export class LegislatorResultsComponent implements OnInit {
  zipInput: string;
  legislators;

  constructor(private route: ActivatedRoute, private legislatorService: LegislatorService, private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((urlParams) => {
      this.zipInput = urlParams['zipCode'];
      //Don't forget the async pipe when displaying this data in the template.
      this.legislatorService.getLegislatorsByZipCode(this.zipInput).subscribe(data => this.legislators = data);
    });
  }

  goToLegislatorDetail(memberId: string) {
    this.router.navigate(['legislators', memberId]);
  }

  getParty(party) {
    return party === "R" ? "rep" : party === "D" ? 'dem' : "";
  }

}
