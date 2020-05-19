import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Drug } from '../models/drug';
import { DrugListService } from './drug-list.service';
import { DrugMockService } from './drug-mock.service';


@Injectable({
  providedIn: 'root'
})
export class DrugAdapterService {

  constructor( private drugservice: DrugListService ) { }

  //Descomentar para usar objetos de pruebas
  //constructor( private drugservice: DrugMockService ) { }
   
  getAllDrugs(): Observable<Drug[]> {
    return this.drugservice.getAllDrugs();
  }
}
