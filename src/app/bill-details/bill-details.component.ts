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
  routeParams = [];

  constructor(private route: ActivatedRoute, private legislatorService: LegislatorService) { }

  ngOnInit() {
    this.route.params.forEach(params => {
      var routeParams = params['billId'].split("-")
      this.bill = this.getBill(routeParams[0], routeParams[1]);
      this.getRecentBills()
    });
  }

  getBill(billId, congress) {
    this.legislatorService.getBill(billId, congress).subscribe(data => this.bill = data[0]);
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
  legDetailLink(uri: string){
    let output;
    try{
      output = "legislators/" + uri.slice(-12, -5);
    } catch(e) {
      output = "";
    }
    return output;
  }
}
