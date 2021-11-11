import { Component, OnInit } from '@angular/core';
import { BarberServiceType } from '../barber-service-type';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  CreateBarberService(name: string, price: number, time: number){
    var tempService = new BarberServiceType(name, price, time);
  }

}
