import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {GeneralInformationPageModule} from '../general-information/general-information.module'
import { NavController } from '@ionic/angular';
//import {ViewChild} from '@angular/core'
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  //Se ha utilizado NavController para poder navegar
  constructor(public navCtrl:NavController) {
    
  }

  showGeneralInfo(){
    //this.router.navigate(['/general-information']);
    this.navCtrl.navigateForward('/general-information');
  }

}
