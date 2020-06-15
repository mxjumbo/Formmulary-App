import { Component, OnInit } from '@angular/core';
//import {DosePageModule} from '../dose/dose.module';
import {NavController, NumericValueAccessor} from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { GeneralInformationService } from '../services/general-information.service';
import { IonicSelectableComponent } from 'ionic-selectable';
class DrugInfo {  
  public drug_name: string;
  public description: string;
  public available: string;
  public license_AEMPS: string;
  public license_EMA: string;
  public license_FDA: string;
}

 class Codes{
  public code_number:string;
  public anatomic_group_name:string;
  public therapeutic_group_name:string;
} 

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
  selector: 'app-general-information',
  templateUrl: './general-information.page.html',
  styleUrls: ['./general-information.page.scss'],
})
export class GeneralInformationPage implements OnInit {
  
  listaCodigos:Array<any>=["código1", "código2", "código3"];  
  //defaultValueSelect=this.listaCodigos[0];
  prueba:any="Cetaceans";
  drug:String;
  info:DrugInfo[];
  codes:Codes[];
  valueSelectedCode:string;
  valueSelectedAnatomicGroup:string;
  valueSelectedTherapeuticGroup:string;
  indice:Number;
  //element:Codes;
  doses:DoseInfo[];
  notes:Note[];
  playingDosesGroup:boolean=true;
  playingSpecificNotes:boolean=true;
  playingGeneralNotes:boolean=true;
  playingDosesOtariids:boolean=true;
  playingDosesPhocids:boolean=true;
  playingDosesOdobenids:boolean=true;

  //Se ha utilizado NavController para poder navegar
  constructor(public navCtrl:NavController, private activeRoute:ActivatedRoute,private filter: GeneralInformationService) {
    
    
  }

  ngOnInit() {
    
    this.drug=this.activeRoute.snapshot.paramMap.get('nameDrug');  
    this.filter.getGeneralInformation(this.drug).subscribe(res=> this.info=res);
    this.filter.getInfoCodes(this.drug).subscribe(res=> this.codes=res);    
    setTimeout(() => {
      this.valueSelectedCode = this.codes[0].code_number;
    }, 500);   
    this.filter.getDoseInformation(this.drug).subscribe(res=>this.doses=res);
    this.filter.getGeneralNotes(this.drug).subscribe(res=>this.notes=res);
  }

  showDoseInfo(group){
    //this.router.navigate(['/dose',this.prueba]);   
    let tmpDoses: DoseInfo[]=[];
    this.doses.forEach(x =>{if(x.group_name=== group) tmpDoses.push(x)});    
    this.filter.setInfoDoses(tmpDoses);
    //console.log(tmpDoses);

    let tmpNotes: Note[]=[];
    this.notes.forEach(x =>{if(x.group_name=== group) tmpNotes.push(x)});    
    this.filter.setInfoNotes(tmpNotes);
    //console.log(tmpNotes);

    this.existDosesByGroup(group);    
    this.filter.setPlayingDosesGroup(this.playingDosesGroup);

    this.existGeneralNotes(group);
    this.filter.setPlayingGeneralNotes(this.playingGeneralNotes);

    this.existSpecificNotes(group);
    this.filter.setPlayingSpecificNotes(this.playingSpecificNotes);

    this.navCtrl.navigateForward(['/dose',group,this.drug]);
  }

  showDosePinnipeds(group){
    let tmpDosesOtariids: DoseInfo[]=[];
    this.doses.forEach(x =>{if(x.group_name=== group && x.family==="Otariids") tmpDosesOtariids.push(x)});    
    this.filter.setInfoDosesOtariids(tmpDosesOtariids);
    //console.log(this.doses);

    let tmpDosesPhocids: DoseInfo[]=[];
    this.doses.forEach(x =>{if(x.group_name=== group && x.family==="Phocids") tmpDosesPhocids.push(x)});    
    this.filter.setInfoDosesPhocids(tmpDosesPhocids);

    let tmpDosesOdobenids: DoseInfo[]=[];
    this.doses.forEach(x =>{if(x.group_name=== group && x.family==="Odobenids") tmpDosesOdobenids.push(x)});    
    this.filter.setInfoDosesOdobenids(tmpDosesOdobenids);
    
    let tmpNotes: Note[]=[];
    this.notes.forEach(x =>{if(x.group_name=== group) tmpNotes.push(x)});    
    this.filter.setInfoNotes(tmpNotes);
    
    this.existDosesByFamily("Otariids");    
    this.filter.setPlayingDosesFamily(this.playingDosesOtariids);

    this.existDosesByFamily("Odobenids");    
    this.filter.setPlayingDosesFamily(this.playingDosesOdobenids);

    this.existDosesByFamily("Phocids");    
    this.filter.setPlayingDosesFamily(this.playingDosesPhocids);

    this.existGeneralNotes(group);    
    this.filter.setPlayingGeneralNotes(this.playingGeneralNotes);

    this.existSpecificNotes(group);
    this.filter.setPlayingSpecificNotes(this.playingSpecificNotes);

    this.navCtrl.navigateForward(['/dose-pinnipeds',group,this.drug]);
    
  }

  fillGroups(){
    this.valueSelectedAnatomicGroup=this.codes.find(x =>x.code_number=== this.valueSelectedCode).anatomic_group_name;
    this.valueSelectedTherapeuticGroup=this.codes.find(x =>x.code_number=== this.valueSelectedCode).therapeutic_group_name;
    //console.log(this.valueSelectedAnatomicGroup);    
  }

  public existSpecificNotes(group){
    let contador:number=0;
    this.doses.forEach(x =>{if(x.specific_note!=='' && x.group_name=== group) contador++}); 
    if(contador===0)
      this.playingSpecificNotes=false;
    else
      this.playingSpecificNotes=true;
     /* console.log(this.playingSpecificNotes); 
    console.log(contador);
    console.log("parámetro:"+group);        */
  }

  public existGeneralNotes(group){
    let contador:number=0;
    this.notes.forEach(x =>{if(x.general_note!=='' && x.group_name=== group) contador++});
    if(contador===0)   
      this.playingGeneralNotes=false;
    else
      this.playingGeneralNotes=true;
  }

  public existDosesByGroup(group){
    let contador:number=0;
    if(this.doses.length===0){
      this.playingDosesGroup=false;
      console.log(this.doses.length)
    }
    else{
      this.doses.forEach(x =>{if(x.group_name=== group) contador++}); 
      if(contador===0)
        this.playingDosesGroup=false;
      else
        this.playingDosesGroup=true;
    }
      /* console.log(this.playingDoses); 
    console.log(contador);
    console.log("parámetro:"+group);        */
  }

  public existDosesByFamily(family){
    let contador:number=0;
    if(this.doses.length===0){
      this.playingDosesOtariids=false;
      this.playingDosesOdobenids=false;
      this.playingDosesPhocids=false;
      console.log("No hay dosis para este medicamento")
    }
    else{
      this.doses.forEach(x =>{if(x.group_name=== 'Pinnipeds' && x.family===family) contador++}); 
      if(family==='Otariids' && contador===0)
        this.playingDosesOtariids=false;
      else
        this.playingDosesOtariids=true;

      if(family==='Odobenids' && contador===0)
        this.playingDosesOdobenids=false;
      else
        this.playingDosesOdobenids=true;

      if(family==='Phocids' && contador===0)
        this.playingDosesPhocids=false;
      else
        this.playingDosesPhocids=true;
    }
      /* console.log(this.playingDoses); 
    console.log(contador);
    console.log("parámetro:"+group);        */
  }
}
