import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManAppointmentComponent } from './man-appointment.component';

describe('ManAppointmentComponent', () => {
  let component: ManAppointmentComponent;
  let fixture: ComponentFixture<ManAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
