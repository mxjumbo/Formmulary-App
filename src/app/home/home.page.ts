import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {  

  constructor(public navCtrl:NavController) {}

  ngOnInit() {
  }

  showFilter(){
    //this.router.navigate(['/general-information']);
    this.navCtrl.navigateForward('/filter-combined-search');
  }

}
