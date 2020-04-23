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
  element:Codes;

  //Se ha utilizado NavController para poder navegar
  constructor(public navCtrl:NavController, private activeRoute:ActivatedRoute,private filter: GeneralInformationService) {
    
    
    
  }

  ngOnInit() {
    this.drug=this.activeRoute.snapshot.paramMap.get('nameDrug');  
    
    this.filter.getGeneralInformation(this.drug).subscribe(res=> this.info=res);
    this.filter.getInfoCodes(this.drug).subscribe(res=> this.codes=res);
    setTimeout(() => {
      this.valueSelectedCode = this.codes[0].code_number;
    }, 1000);
  }

  showDoseInfo(group){
    //this.router.navigate(['/dose',this.prueba]);

    this.navCtrl.navigateForward(['/dose',group]);
  }

  showDosePinnipeds(){
    this.navCtrl.navigateForward(['/dose-pinnipeds']);
  }

  /* fillGroups(event: {
    component: IonicSelectableComponent,
    value: any}){
    //this.anatomicGroup=this.codes.findIndex(selectedCode);
    this.indice=this.codes.findIndex(x => x.code_number=== event.value.code_number);
    console.log(this.indice);
    console.log(event.value.code_number);
  } */

  fillGroups(){
    this.valueSelectedAnatomicGroup=this.codes.find(x =>x.code_number=== this.valueSelectedCode).anatomic_group_name;
    this.valueSelectedTherapeuticGroup=this.codes.find(x =>x.code_number=== this.valueSelectedCode).therapeutic_group_name;
    //console.log(this.valueSelectedAnatomicGroup);    
  }
}
