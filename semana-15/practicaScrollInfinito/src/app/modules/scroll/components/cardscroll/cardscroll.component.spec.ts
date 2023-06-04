import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardscrollComponent } from './cardscroll.component';

describe('CardscrollComponent', () => {
  let component: CardscrollComponent;
  let fixture: ComponentFixture<CardscrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardscrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
