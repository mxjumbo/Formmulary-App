import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrugListService {

  urlCombinedSearch = '/android/getDrugsByCombinedSearch.php';  
  

  constructor(private http: HttpClient) { }

  getDrugsByCombinedSearch(therap,anat,gr): Observable<any> {
    return this.http.post(`${this.urlCombinedSearch}`, {
      /* therapeutic: '',
      anatomical: 'QA Alimentary tract and metabolism',      
      group:'Choose a group' */
      therapeutic: therap,
      anatomical: anat,      
      group:gr
  })
  }

  }

//Anatomic: QV Various
  //Therapeutic: QJ51
  //Cetaceans
