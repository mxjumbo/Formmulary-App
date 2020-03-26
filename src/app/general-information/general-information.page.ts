import { Component, OnInit } from '@angular/core';
//import {DosePageModule} from '../dose/dose.module';
import {NavController} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.page.html',
  styleUrls: ['./general-information.page.scss'],
})
export class GeneralInformationPage implements OnInit {
  
  listaCodigos:Array<any>=["código1", "código2", "código3"];
  defaultValueSelect=this.listaCodigos[0];
  prueba:any="Cetaceans";
  
  //Se ha utilizado NavController para poder navegar
  constructor(public navCtrl:NavController) {
    
  }

  ngOnInit() {
  }

  showDoseInfo(group){
    //this.router.navigate(['/dose',this.prueba]);

    this.navCtrl.navigateForward(['/dose',group]);
  }
}
