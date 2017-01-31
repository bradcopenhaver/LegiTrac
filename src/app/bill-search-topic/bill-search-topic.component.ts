import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BillService} from '../bill.service';

@Component({
  selector: 'app-bill-search-topic',
  templateUrl: './bill-search-topic.component.html',
  styleUrls: ['./bill-search-topic.component.css'],
  providers: [BillService]
})
export class BillSearchTopicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  searchBillCommittee(selectedCommittee) {
    
  }
}
