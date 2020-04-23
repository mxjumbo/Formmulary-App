import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {FilterCombinedSearchService} from '../services/filter-combined-search.service';
import { map } from 'rxjs/operators';
import { NavController } from '@ionic/angular';

class Group {  
  public name: string;
}
class Animal {  
  public group_name: string;
}
@Component({
  selector: 'app-filter-combined-search',
  templateUrl: './filter-combined-search.page.html',
  styleUrls: ['./filter-combined-search.page.scss'],
})
export class FilterCombinedSearchPage implements OnInit {
  therapeuticGroups: Group[];
  therapeuticGroup: Group;
  anatomicGroups: Group[];
  anatomicGroup: Group;
  animalGroups:Animal[];
  animalGroup:Animal;
  therapeuticValue:any="Enter a therapeutic target";
  anatomicValue:any="Enter an anatomical target";
  groupValue: any="Choose a group";

  constructor(private  filter: FilterCombinedSearchService, public navCtrl:NavController) { 
    this.filter.getTherapeuticGroup().subscribe(res=> this.therapeuticGroups=res);
    this.filter.getAnatomicGroup().subscribe(res=> this.anatomicGroups=res);
    this.filter.getAnimalGroup().subscribe(res=> this.animalGroups=res);
  }

  groupChangeTherapeutic(event: {
    component: IonicSelectableComponent,
    value: any}) {     
      if(event.value!=null)        
        this.therapeuticValue=event.value.name;
      else
        this.therapeuticValue="Enter a therapeutic target";
      //console.log(this.therapeuticValue);
  }

  groupChangeAnatomic(event: {
    component: IonicSelectableComponent,
    value: any}) {   
      if(event.value!=null)        
        this.anatomicValue=event.value.name;
      else
        this.anatomicValue="Enter an anatomical target";
      //console.log(event.value.name);
  }

  groupChangeGroup(event: {
    component: IonicSelectableComponent,
    value: any}) {   
      if(event.value!=null)        
        this.groupValue=event.value.group_name;
      else
        this.groupValue="Choose a group";
      //console.log(event.value.name);
  }

  ngOnInit() {
  }

  search() {
    /* console.log(this.therapeuticValue);
    console.log(this.anatomicValue);
    console.log(this.groupValue); */
    this.navCtrl.navigateForward(['/drug-list',this.therapeuticValue,this.anatomicValue,this.groupValue]); 
    //this.navCtrl.navigateForward(['/drug-list',this.therapeuticValue,"hola2","hola3"]); 
    
    //this.navCtrl.navigateForward(['/dose',group]);
  }

}


