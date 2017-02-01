import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { LegislatorService } from "../legislator.service";

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.scss'],
  providers: [LegislatorService]
})
export class BillDetailsComponent implements OnInit {
  billId: number;
  bill;
  recent;
  actionShowing: string = "hidden";

  constructor(private route: ActivatedRoute, private legislatorService: LegislatorService) { }

  ngOnInit() {
    this.route.params.forEach(params => {
      this.bill = this.getBill(params['billId']);
      this.getRecentBills()
    });
  }

  getBill(billId) {
    this.legislatorService.getBill(billId).subscribe(data => this.bill = data[0]);
  }
  getRecentBills() {
    this.legislatorService.getRecentBills().subscribe(data => this.recent = data)
  }
  toggleActions() {
    if (this.actionShowing === "hidden") {
      this.actionShowing = "";
    } else {
      this.actionShowing = "hidden";
    }
  }
}
