import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {BillService} from '../bill.service';

@Component({
  selector: 'app-bill-results',
  templateUrl: './bill-results.component.html',
  styleUrls: ['./bill-results.component.css'],
  providers: [BillService]
})
export class BillResultsComponent implements OnInit {

  constructor(private billService: BillService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
