import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralInformationService } from '../services/general-information.service';
import { IonicSelectableComponent } from 'ionic-selectable';
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

@Component({
  selector: 'app-dose-pinnipeds',
  templateUrl: './dose-pinnipeds.page.html',
  styleUrls: ['./dose-pinnipeds.page.scss'],
})
export class DosePinnipedsPage implements OnInit {
  /* dosesList:any=[["dosis1","pos1","route1","ref1","note1"],["dosis2","pos2","route2","ref2","note2"],["dosis3","pos3","route3","ref3","note3"]]; */
  notesListSpecific: any=["nota1", "nota2", "nota3"];
  notesListGeneral: any=["nota1", "nota2", "nota3"];
  //Variable para recoger los argumentos desde "General-information-page"
  arguments=null;
  drug:string;
  doses:DoseInfo[];
  dosesPhocids:DoseInfo[];
  dosesOtariids:DoseInfo[];
  dosesOdobenids:DoseInfo[];  
  dosesList:DoseInfo[];  
  notes:Note[];
  //playingDosesGroup:boolean = true;  
  playingSpecificNotes:boolean=true;
  playingGeneralNotes:boolean=true;
  playingDosesOtariids:boolean=true;
  playingDosesPhocids:boolean=true;
  playingDosesOdobenids:boolean=true;
  playingDosesFamily:boolean=true;
  
  constructor(private activeRoute:ActivatedRoute,private filter: GeneralInformationService,private ngZone: NgZone) { 
    this.dosesList=this.filter.getInfoDosesOtariids(); 
    //console.log(this.dosesList);
  }

  ngOnInit() {
    this.arguments=this.activeRoute.snapshot.paramMap.get('group');    
    this.drug=this.activeRoute.snapshot.paramMap.get('drug');    
    this.doses=this.filter.getInfoDoses();
    this.dosesPhocids=this.filter.getInfoDosesPhocids();
    this.dosesOtariids=this.filter.getInfoDosesOtariids();
    this.dosesOdobenids=this.filter.getInfoDosesOdobenids();
    this.notes=this.filter.getInfoNotes();
    //this.playingDosesGroup=this.filter.getPlayingDosesGroup();
    this.playingDosesOdobenids=this.filter.getPlayingDosesFamilyOdobenids();
    this.playingDosesOtariids=this.filter.getPlayingDosesFamilyOtariids();
    this.playingDosesPhocids=this.filter.getPlayingDosesFamilyPhocids();
    this.playingSpecificNotes=this.filter.getPlayingSpecificNotes();
    this.playingGeneralNotes=this.filter.getPlayingGeneralNotes();
    this.playingDosesFamily=this.playingDosesOtariids;
    //console.log(this.dosesOdobenids); 
   /*  setTimeout(() => { 
      this.doses.forEach(x =>{if(x.specific_note==="") this.playingSpecificNotes=false});  
    }, 500);     */
    /* setTimeout(() => {
      this.existSpecificNotes();
    }, 500);    */
    
  }

  
  doRefresh(family) {     
      if(family==='Phocids')
        this.dosesList=this.filter.getInfoDosesPhocids(); 
      else
        if(family==='Otariids')
          this.dosesList=this.filter.getInfoDosesOtariids(); 
        else
          if(family==='Odobenids')
            this.dosesList=this.filter.getInfoDosesOdobenids(); 

        if (this.dosesList.length===0){
              this.ngZone.run(() => {
                    this.playingDosesPhocids = false;
                    this.playingDosesFamily= false;
                    console.log(this.dosesList.length);
                    console.log(this.playingDosesFamily);
                    console.log(family);
                  });   
        }
            
      /* if (family==='Phocids' && this.dosesList.length===0){
        this.ngZone.run(() => {
              this.playingDosesPhocids = false;
              this.playingDosesFamily= false;
              console.log(this.dosesList.length);
              console.log(this.playingDosesFamily);
              console.log(family);
            });   
            }
            else{
              this.ngZone.run(() => {
              this.playingDosesPhocids=true;
              this.playingDosesFamily= true;
              console.log("ha entrado por else "+family);
            });   
            }
       */  
            /* if (family==='Otariids' && this.dosesList.length===0){
              this.ngZone.run(() => {
              this.playingDosesOtariids = false;
              this.playingDosesFamily= false;
              console.log(this.dosesList.length);
              console.log(this.playingDosesFamily);
              console.log(family);
            });   
            }
            else{
              this.ngZone.run(() => {
              this.playingDosesOtariids=true;
              this.playingDosesFamily= true;
              console.log("ha entrado por else "+family);
            });   
            }

            if (family==='Odobenids' && this.dosesList.length===0){
              this.ngZone.run(() => {
              this.playingDosesOdobenids = false;
              this.playingDosesFamily= false;
              console.log(this.dosesList.length);
              console.log(this.playingDosesFamily);
              console.log(family);
            });   
            }
            else{
              this.ngZone.run(() => {
              this.playingDosesOdobenids=true;
              this.playingDosesFamily= true;
              console.log("ha entrado por else "+family);
            });   
            } */
      /* this.ngZone.run(() => {
        if (family==='Phocids' && this.dosesList.length===0){
          this.playingDosesPhocids = false;
          this.playingDosesFamily= false;
          console.log(this.dosesList.length);
          console.log(this.playingDosesFamily);
          console.log(family);
        }
        else{
          this.playingDosesPhocids=true;
          this.playingDosesFamily= true;
          console.log("ha entrado por else "+family);
        }
        
        if (family==='Otariids' && this.dosesList.length===0){
          this.playingDosesOtariids = false;
          this.playingDosesFamily= false;
          console.log(this.dosesList.length);
          console.log(this.playingDosesFamily);
          console.log(family);
        }
        else{
          this.playingDosesOtariids=true;
          this.playingDosesFamily= true;
          console.log("ha entrado por else "+family);
        }

        if (family==='Odobenids' && this.dosesList.length===0){
          this.playingDosesOdobenids = false;
          this.playingDosesFamily= false;
          console.log(this.dosesList.length);
          console.log(this.playingDosesFamily);
          console.log(family);
        }
        else{
          this.playingDosesOdobenids=true;
          this.playingDosesFamily= true;
          console.log("ha entrado por else "+family);
        }
      });              */
  }

  
    /* doRefresh(event: {
      component: IonicSelectableComponent,
      value: any}) {     
        this.dosesOdobenids=this.filter.getInfoDosesOdobenids();        
        console.log(this.dosesOdobenids);
    } */
  }