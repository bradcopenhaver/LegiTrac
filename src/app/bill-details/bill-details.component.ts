import { Component, OnInit } from '@angular/core';
import { LegislatorService } from "../legislator.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css'],
  providers: [LegislatorService]
})
export class BillDetailsComponent implements OnInit {
  bill;
  recent;

  constructor(private route: ActivatedRoute, private legislatorService: LegislatorService) { }

  ngOnInit() {
    this.route.params.forEach(params => {
      this.bill = this.getBill(params['billId']);
      this.getRecentBills()
    });
  }

  getBill(billId) {
    this.legislatorService.getBill(billId).subscribe(data => this.bill = data);
  }
  getRecentBills() {
    this.legislatorService.getRecentBills().subscribe(data => this.recent = data)
  }
}
