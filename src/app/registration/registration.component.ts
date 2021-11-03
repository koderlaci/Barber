import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private enrollmentService: EnrollmentService) { }

  ngOnInit(): void {
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit(value: any){
    //this.enrollmentService.enroll(value)
    console.log(value);
  }
}
