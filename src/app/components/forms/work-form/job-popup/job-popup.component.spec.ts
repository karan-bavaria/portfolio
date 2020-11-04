import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPopupComponent } from './job-popup.component';

describe('JobPopupComponent', () => {
  let component: JobPopupComponent;
  let fixture: ComponentFixture<JobPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
