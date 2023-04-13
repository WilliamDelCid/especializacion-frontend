/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardNekoComponent } from './CardNeko.component';

describe('CardNekoComponent', () => {
  let component: CardNekoComponent;
  let fixture: ComponentFixture<CardNekoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardNekoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNekoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
