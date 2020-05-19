import { Component, OnInit } from '@angular/core';
import { Drug } from '../models/drug';
import { NavController } from '@ionic/angular';
import { DrugAdapterService } from '../services/drug-adapter.service';

@Component({
  selector: 'app-single-search',
  templateUrl: './single-search.page.html',
  styleUrls: ['./single-search.page.scss'],
})
export class SingleSearchPage implements OnInit {

  drugs: Drug[] = [];
  drugSearch: string = '';

  constructor ( private drugService: DrugAdapterService,
                private navCtrl: NavController ) { }

  ngOnInit() {
    this.drugService.getAllDrugs()
    .subscribe(resp => {
      this.drugs.push(...resp);
    });
  }

  search( event ) {
    this.drugSearch = event.detail.value;
  }

  showGeneralInformation(drug: Drug) {
    this.navCtrl.navigateForward(['/general-information',drug.drug_name]);
  }

}
