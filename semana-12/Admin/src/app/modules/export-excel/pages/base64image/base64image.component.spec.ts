import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Base64imageComponent } from './base64image.component';

describe('Base64imageComponent', () => {
  let component: Base64imageComponent;
  let fixture: ComponentFixture<Base64imageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Base64imageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Base64imageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
