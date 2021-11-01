import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import {FlexLayoutModule} from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ManAppointmentComponent } from './man-appointment/man-appointment.component';
import { WomanAppointmentComponent } from './woman-appointment/woman-appointment.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { BookingComponent } from './booking/booking.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';

const appRoutes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Appointments', component: AppointmentsComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'Man', component: ManAppointmentComponent},
  {path: 'Woman', component: WomanAppointmentComponent},
  {path: 'Calendar', component: CalendarComponent},
  {path: 'Booking', component: BookingComponent},
  {path: 'Registration', component: RegistrationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppointmentsComponent,
    ContactComponent,
    HomeComponent,
    ManAppointmentComponent,
    WomanAppointmentComponent,
    CalendarComponent,
    BookingComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatRippleModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
