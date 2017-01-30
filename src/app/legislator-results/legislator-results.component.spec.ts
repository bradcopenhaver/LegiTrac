/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LegislatorResultsComponent } from './legislator-results.component';

describe('LegislatorResultsComponent', () => {
  let component: LegislatorResultsComponent;
  let fixture: ComponentFixture<LegislatorResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegislatorResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegislatorResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
