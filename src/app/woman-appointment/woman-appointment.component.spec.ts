import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomanAppointmentComponent } from './woman-appointment.component';

describe('WomanAppointmentComponent', () => {
  let component: WomanAppointmentComponent;
  let fixture: ComponentFixture<WomanAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomanAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomanAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
