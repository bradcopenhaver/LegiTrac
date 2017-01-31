import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-legislator-search-location',
  templateUrl: './legislator-search-location.component.html',
  styleUrls: ['./legislator-search-location.component.css']
})
export class LegislatorSearchLocationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  searchZip(zipInput: string) {
    this.router.navigate(['legislator-results', zipInput]);
  }
}
