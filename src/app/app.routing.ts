import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegislatorSearchLocationComponent } from './legislator-search-location/legislator-search-location.component';
import { BillSearchTopicComponent } from './bill-search-topic/bill-search-topic.component';
import { BillResultsComponent } from './bill-results/bill-results.component';
import { LegislatorResultsComponent } from './legislator-results/legislator-results.component';
import { BillDetailsComponent } from './bill-details/bill-details.component';
import { LegislatorDetailsComponent } from './legislator-details/legislator-details.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [   {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'legislator-results/:idString',
    component: LegislatorResultsComponent
  },
  {
    path: 'legislator-details/:memberId',
    component: LegislatorDetailsComponent
  },
  {
    path: 'bill-details/:billId',
    component: BillDetailsComponent
  },
  {
    path: 'bill-results/:idString',
    component: BillResultsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
