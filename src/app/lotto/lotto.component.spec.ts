/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LottoComponent } from './lotto.component';

describe('LottoComponent', () => {
  let component: LottoComponent;
  let fixture: ComponentFixture<LottoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LottoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
