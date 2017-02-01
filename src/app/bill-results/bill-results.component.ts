import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { LegislatorService } from "../legislator.service";

@Component({
  selector: 'app-bill-results',
  templateUrl: './bill-results.component.html',
  styleUrls: ['./bill-results.component.scss'],
  providers: [LegislatorService]
})
export class BillResultsComponent implements OnInit {
  query: string;
  bills: Object;


  constructor(private route: ActivatedRoute, private router: Router, private legislatorService: LegislatorService) { }

  ngOnInit() {
    this.route.params.forEach(params => {
      this.query = params['query'];
      console.log(this.query);
      this.legislatorService.searchBills(this.query).subscribe(data => this.bills = data);
    });
  }
  goToDetailPage(billId) {
    this.router.navigate(['bills', billId])
  }

}
