import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsPopupComponent } from './icons-popup.component';

describe('IconsPopupComponent', () => {
  let component: IconsPopupComponent;
  let fixture: ComponentFixture<IconsPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
