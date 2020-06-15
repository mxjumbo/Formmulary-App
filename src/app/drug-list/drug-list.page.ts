import { Component, OnInit } from '@angular/core';
import {DrugListService} from '../services/drug-list.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { GeneralInformationService } from '../services/general-information.service';

class Drug {  
  public drug_name: string;
}

class DrugInfo {  
  public drug_name: string;
  public description: string;
  public available: string;
  public license_AEMPS: string;
  public license_EMA: string;
  public license_FDA: string;
}


@Component({
  selector: 'app-drug-list',
  templateUrl: './drug-list.page.html',
  styleUrls: ['./drug-list.page.scss'],
})
export class DrugListPage implements OnInit {
  lista=["drug1","drug2","drug3"];
  drugList: Drug[]=[];
  drug: Drug;
//Variable para recoger los argumentos desde "Filter combined Search"
argument1=null;
argument2=null;
argument3=null;

empty=false;
info:DrugInfo;

  constructor(private filter: DrugListService, private activeRoute:ActivatedRoute, private navCtrl:NavController ) { 
    /* this.filter.getDrugsByCombinedSearch(this.argument1,this.argument2,this.argument3).subscribe(res=> this.drugList=res);
    console.log(this.drugList);
    console.log(this.argument1);
    console.log(this.argument2);
    console.log(this.argument3); */
    
    //this.filter.getDrugsByCombinedSearch('','QA Alimentary tract and metabolism','Choose a group').subscribe(res=> this.drugList=res);
    //this.filter.getDrugsByCombinedSearch();
  }

  ngOnInit() {
    this.argument1=this.activeRoute.snapshot.paramMap.get('therapeuticValue');
    this.argument2=this.activeRoute.snapshot.paramMap.get('anatomicValue');
    this.argument3=this.activeRoute.snapshot.paramMap.get('groupValue');
    /* console.log(this.argument1);
    console.log(this.argument2);
    console.log(this.argument3); */
    
   this.filter.getDrugsByCombinedSearch(this.argument1,this.argument2,this.argument3).subscribe(res=> this.drugList=res);
   
  }

  showGeneralInformation(drug){
    this.navCtrl.navigateForward(['/general-information',drug]);     
    
    
    
  }
  //Anatomic: QV Various
  //Therapeutic: QJ51
  //Cetaceans

}
