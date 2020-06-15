import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

class DoseInfo{
  public animal_name: string; 
  public family: string;  
  public group_name: string;  
  public category_name: string;  
  public book_reference: string;  
  public article_reference: string; 
  public specific_note: string;  
  public posology: string;  
  public route: string;  
  public dose: string;    
}
 
class Note{
  public group_name:string;
  public general_note:string;
}

class Codes{
  public code_number:string;
  public anatomic_group_name:string;
  public therapeutic_group_name:string;
}

@Injectable({
  providedIn: 'root'
})


export class GeneralInformationService {
  urlGetGeneralInformation = 'http://www.formmulary.com/android/getGeneralInfoDrug.php';  
  urlGetInfoCodes = 'http://www.formmulary.com/android/getInfoCodes.php';  
  urlGetDoseInformation='http://www.formmulary.com/android/getDoseInformation.php';  
  urlGetGeneralNotes='http://www.formmulary.com/android/getGeneralNotesInformation.php';  
  config = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
    }
  
  doses:DoseInfo[];
  dosesPhocids:DoseInfo[];
  dosesOtariids:DoseInfo[];
  dosesOdobenids:DoseInfo[];
  notes:Note[];
  playingDosesGroup:boolean;
  playingSpecificNotes:boolean;
  playingGeneralNotes:boolean;
  playingDosesOtariids:boolean;
  playingDosesPhocids:boolean;
  playingDosesOdobenids:boolean;
  codes:Codes[];

  constructor(private http: HttpClient) { }

  getGeneralInformation(drug): Observable<any> {
    //console.log(drug);
    
    return this.http.post(`${this.urlGetGeneralInformation}`, {drug_name: drug},this.config)
  }

  getInfoCodes(drug): Observable<any> {
    //console.log(drug);
    
    return this.http.post(`${this.urlGetInfoCodes}`, {drug_name: drug},this.config)
  }

  getDoseInformation(drug): Observable<any> {
    //console.log(drug);
    
    return this.http.post(`${this.urlGetDoseInformation}`, {drug_name: drug},this.config)
  }

  getGeneralNotes(drug): Observable<any> {
    //console.log(drug);
    
    return this.http.post(`${this.urlGetGeneralNotes}`, {drug_name: drug},this.config)
  }

  public setInfoDoses(param) {
    this.doses = param;
  }

  public getInfoDoses() {
    return this.doses;
  } 

  public setInfoNotes(param) {
    this.notes = param;
  }

  public getInfoNotes() {
    return this.notes;
  } 

  public setInfoDosesPhocids(param) {
    this.dosesPhocids = param;
  }

  public getInfoDosesPhocids() {
    return this.dosesPhocids;
  }

  public setInfoDosesOtariids(param) {
    this.dosesOtariids = param;
  }

  public getInfoDosesOtariids() {
    return this.dosesOtariids;
  }

  public setInfoDosesOdobenids(param) {
    this.dosesOdobenids = param;
  }

  public getInfoDosesOdobenids() {
    return this.dosesOdobenids;
  }

  public setPlayingSpecificNotes(param){    
    this.playingSpecificNotes=param;
  }

  public getPlayingSpecificNotes() {
    return this.playingSpecificNotes;
  }

  public setPlayingGeneralNotes(param){    
    this.playingGeneralNotes=param;
  }

  public getPlayingGeneralNotes() {
    return this.playingGeneralNotes;
  }

  public setPlayingDosesGroup(param){    
    this.playingDosesGroup=param;
  }

  public getPlayingDosesGroup() {
    return this.playingDosesGroup;
  }

  public setPlayingDosesFamily(param){ 
    if(param==='Otariids')   
      this.playingDosesOtariids=param;
    if(param==='Odobenids')
      this.playingDosesOdobenids=param;
    if(param==='Phocids')
      this.playingDosesPhocids=param;
  }

  public getPlayingDosesFamilyOtariids() {
    return this.playingDosesOtariids;
  }

  public getPlayingDosesFamilyOdobenids() {
    return this.playingDosesOdobenids;
  }

  public getPlayingDosesFamilyPhocids() {
    return this.playingDosesPhocids;
  }

}
