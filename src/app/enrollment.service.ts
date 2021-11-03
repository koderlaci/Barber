import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  url = '';

  constructor(private http: HttpClient) { }

  enroll(value: any) {
    
  }
}
