import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsPopupComponent } from './cards-popup.component';

describe('CardsPopupComponent', () => {
  let component: CardsPopupComponent;
  let fixture: ComponentFixture<CardsPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
