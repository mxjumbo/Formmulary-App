import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {NavController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FilterCombinedSearchService {
  
  urlTherapeuticGroup = '/android/getTherapeuticGroups.php';  
  urlAnatomicGroup = '/android/getAnatomicGroups.php';  
  urlAnimalGroup = '/android/getAnimalGroups.php';  

  constructor(private http: HttpClient) { 

  }
  
  getTherapeuticGroup(): Observable<any> {
      return this.http.get(`${this.urlTherapeuticGroup}`);
  }

  getAnatomicGroup(): Observable<any> {
    return this.http.get(`${this.urlAnatomicGroup}`);
  }

  getAnimalGroup(): Observable<any> {
    return this.http.get(`${this.urlAnimalGroup}`);
  }
}
