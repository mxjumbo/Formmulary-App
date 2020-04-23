import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralInformationService {
  urlGetGeneralInformation = '/android/getGeneralInfoDrug.php';  
  urlGetInfoCodes = '/android/getInfoCodes.php';  
  
  constructor(private http: HttpClient) { }

  getGeneralInformation(drug): Observable<any> {
    //console.log(drug);
    return this.http.post(`${this.urlGetGeneralInformation}`, {drug_name: drug})
  }

  getInfoCodes(drug): Observable<any> {
    //console.log(drug);
    return this.http.post(`${this.urlGetInfoCodes}`, {drug_name: drug})
  }
}
