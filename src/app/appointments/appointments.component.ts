import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  constructor() {
    this.woman = false;
    this.man = false;
  }

  ngOnInit(): void {
    
  }

  woman: boolean;
  man: boolean;

  womanClicked(){
    this.woman = !this.woman;
  }

  manClicked(){
    this.man = !this.man;
  }

}
