import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegislatorSearchLocationComponent } from './legislator-search-location/legislator-search-location.component';
import { BillSearchTopicComponent } from './bill-search-topic/bill-search-topic.component';
import { BillResultsComponent } from './bill-results/bill-results.component';
import { LegislatorResultsComponent } from './legislator-results/legislator-results.component';
import { BillDetailsComponent } from './bill-details/bill-details.component';
import { LegislatorDetailsComponent } from './legislator-details/legislator-details.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [   {
    path: '',
    component: WelcomeComponent
  }, {
    path: 'legislators/:legislatorId',
    component: LegislatorDetailsComponent
  }, {
    path: 'bills/:billId',
    component: BillDetailsComponent
  },
  {
    path: 'legislators/search/:zipCode',
    component: LegislatorResultsComponent
  },
  {
    path: 'bills/search/:query',
    component: BillResultsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
