import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'Barber';
  mediaSub: Subscription = new Subscription;
  deviceXs: boolean = false;

  constructor(public mediaObserver: MediaObserver){}

  ngOnInit(){
    this.mediaSub = this.mediaObserver.asObservable()
    .pipe(
      filter((changes: MediaChange[]) => changes.length > 0),
      map((changes: MediaChange[]) => changes[0])
    ).subscribe((change: MediaChange) => {
      this.deviceXs = change.mqAlias === 'xs' ? true : false;
    });
  }
  
  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  }
}
