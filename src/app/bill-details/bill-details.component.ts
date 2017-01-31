import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {BillService} from '../bill.service';

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css'],
  providers: [BillService]
})
export class BillDetailsComponent implements OnInit {
  billId;
  billToDisplay;

  constructor(private billService: BillService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((urlParams) => {
      this.billId = urlParams['billId'];
    });
    //this.billToDisplay = this.billService.getBillById(this.billId);
  }

}
