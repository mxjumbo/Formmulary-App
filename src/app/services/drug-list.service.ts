import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Drug } from '../models/drug';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DrugListService {

  urlCombinedSearch = 'http://www.formmulary.com/android/getDrugsByCombinedSearch.php';  
  config = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
    }

    private url = environment.url;

  constructor(private http: HttpClient) { }

  getDrugsByCombinedSearch(therap,anat,gr): Observable<any> {    
  
    return this.http.post(`${this.urlCombinedSearch}`, {
      therapeutic: therap,
      anatomical: anat,      
      group:gr
    },this.config)
  }

  getAllDrugs() {
    return this.http.get<Drug[]>(`${this.url}`);
  }
}
