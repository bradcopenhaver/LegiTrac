import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LegislatorService } from "../legislator.service";

@Component({
  selector: 'app-bill-search-topic',
  templateUrl: './bill-search-topic.component.html',
  styleUrls: ['./bill-search-topic.component.scss'],
  providers: [LegislatorService]
})
export class BillSearchTopicComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  searchBill(inputTopic) {
    this.router.navigate(['bills/search', inputTopic]);
  }
}
