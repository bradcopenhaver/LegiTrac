/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LegislatorSearchLocationComponent } from './legislator-search-location.component';

describe('LegislatorSearchLocationComponent', () => {
  let component: LegislatorSearchLocationComponent;
  let fixture: ComponentFixture<LegislatorSearchLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegislatorSearchLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegislatorSearchLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
