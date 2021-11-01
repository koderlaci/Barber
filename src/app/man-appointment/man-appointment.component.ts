import { Component, OnInit } from '@angular/core';
import { BarberServiceType } from '../barber-service-type';

@Component({
  selector: 'app-man-appointment',
  templateUrl: './man-appointment.component.html',
  styleUrls: ['./man-appointment.component.scss']
})
export class ManAppointmentComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
  }
  haircutSimple = new BarberServiceType("Haircut (Simple)", 10, 30);
  haircutComplex = new BarberServiceType("Haircut (Complex)", 20, 60);
  beardTrim = new BarberServiceType("Beard trim", 10, 30);
  beardShave = new BarberServiceType("Beard shave", 15, 30);
}
