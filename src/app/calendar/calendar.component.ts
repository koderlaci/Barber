import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  constructor() {
   }

  ngOnInit(): void {
    
  }

  selected = new Date();
  isClicked = false;

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  }

  public dates:Array<string> = [
    "8:00",
    "8:30",
    "9:00",
    "9:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30"
  ];

  clicked(){
    this.isClicked = true;

    setTimeout(() => {
      document.querySelector(".next-btn")?.scrollIntoView({behavior: "smooth"});
    }, 100);
  }
}
