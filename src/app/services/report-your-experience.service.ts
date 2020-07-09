import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportYourExperienceService {
  urlSendEmailFromApp = 'http://www.formmulary.com/android/sendEmailFromApp.php';  
  config = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
    }

  constructor(private http: HttpClient) { }

  /* sendEmail(body): Observable<any> {
    console.log(body);
    
    return this.http.post(`${this.urlSendEmailFromApp}`, {bodyMessage: body},this.config);
    //this.http.post(`${this.urlSendEmailFromApp}`, {bodyMessage: body},this.config)
  } */

  sendEmail(name,email, profession, body): Observable<any> {
    //console.log(body);    
    return this.http.post(`${this.urlSendEmailFromApp}`, {nameMessage: name, emailMessage:email, professionMessage:profession,bodyMessage: body},this.config);
    //console.log("Petición hecha");
    //this.http.post(`${this.urlSendEmailFromApp}`, {bodyMessage: body},this.config)
  }
}
