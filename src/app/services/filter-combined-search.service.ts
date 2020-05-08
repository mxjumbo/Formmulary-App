import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {NavController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FilterCombinedSearchService {
  
  urlTherapeuticGroup = 'http://www.formmulary.com/android/getTherapeuticGroups.php';  
  urlAnatomicGroup = 'http://www.formmulary.com/android/getAnatomicGroups.php';  
  urlAnimalGroup = 'http://www.formmulary.com/android/getAnimalGroups.php';  

  constructor(private http: HttpClient) { 

  }
  
  getTherapeuticGroup(): Observable<any> {
    
       /* return this.http.get(`${this.urlTherapeuticGroup}`,{
        headers: new HttpHeaders({'Content-Type': 'application/json' })

       }); */
       
      return this.http.get(`${this.urlTherapeuticGroup}`);
  }

  getAnatomicGroup(): Observable<any> {
    return this.http.get(`${this.urlAnatomicGroup}`);
  }

  getAnimalGroup(): Observable<any> {
    return this.http.get(`${this.urlAnimalGroup}`);
  }
}
