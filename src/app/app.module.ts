import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ApiRequestComponent } from './api-request/api-request.component';
import { LegislatorSearchLocationComponent } from './legislator-search-location/legislator-search-location.component';
import { BillSearchTopicComponent } from './bill-search-topic/bill-search-topic.component';
import { BillResultsComponent } from './bill-results/bill-results.component';
import { LegislatorResultsComponent } from './legislator-results/legislator-results.component';
import { BillDetailsComponent } from './bill-details/bill-details.component';
import { LegislatorDetailsComponent } from './legislator-details/legislator-details.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    ApiRequestComponent,
    LegislatorSearchLocationComponent,
    BillSearchTopicComponent,
    BillResultsComponent,
    LegislatorResultsComponent,
    BillDetailsComponent,
    LegislatorDetailsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
