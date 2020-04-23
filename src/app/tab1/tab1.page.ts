import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import {FilterCombinedSearchPageModule} from '../filter-combined-search/filter-combined-search.module'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public navCtrl:NavController) {}

  showFilter(){
    //this.router.navigate(['/general-information']);
    this.navCtrl.navigateForward('/filter-combined-search');
  }

}

