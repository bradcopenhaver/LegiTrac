/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BillSearchTopicComponent } from './bill-search-topic.component';

describe('BillSearchTopicComponent', () => {
  let component: BillSearchTopicComponent;
  let fixture: ComponentFixture<BillSearchTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillSearchTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillSearchTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
