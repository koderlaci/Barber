import { Component, OnInit } from '@angular/core';
import { BarberServiceType } from '../barber-service-type';

@Component({
  selector: 'app-woman-appointment',
  templateUrl: './woman-appointment.component.html',
  styleUrls: ['./woman-appointment.component.scss']
})
export class WomanAppointmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  haircutSimple = new BarberServiceType("Haircut (Simple)", 10, 30);
  haircutComplex = new BarberServiceType("Haircut (Complex)", 20, 60);
  hairWash = new BarberServiceType("Hair Wash", 10, 30);
  hairColoring = new BarberServiceType("Hair Coloring", 15, 30);
}
