/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LegislatorService } from './legislator.service';

describe('LegislatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LegislatorService]
    });
  });

  it('should ...', inject([LegislatorService], (service: LegislatorService) => {
    expect(service).toBeTruthy();
  }));
});
