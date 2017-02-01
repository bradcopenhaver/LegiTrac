import { Component, OnInit } from '@angular/core';
import {LegislatorService} from '../legislator.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  providers: [LegislatorService]
})
export class WelcomeComponent implements OnInit {
  billsArray;

  constructor(private legislatorService: LegislatorService) { }

  ngOnInit() {
    this.legislatorService.getRecentBills().subscribe(billsReturned => this.billsArray = billsReturned);
  }

}
