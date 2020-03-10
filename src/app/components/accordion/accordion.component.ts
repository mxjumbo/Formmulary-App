import { Component, OnInit, ViewChild,Renderer } from '@angular/core';
//import {IonicModule} from '@ionic/angular';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  accordionMarineExpanded=true;
  accordionFormularyExpanded=true;
  @ViewChild("ccmm", {static: true}) cardContentMarineMammals: any;
  @ViewChild("ccf", {static: true}) cardContentFormulary: any;
  
  visibleMarine=false;
  visibleFormulary=false;
  constructor(public renderer:Renderer) { 
    //console.log(this.cardContent.nativeElement);
  }

  ngOnInit() {
    //console.log(this.cardContent.el);
  }

  toggleAccordion(typeAccordion){
    if(typeAccordion=="marine"){
      if(this.accordionMarineExpanded){
          this.renderer.setElementStyle(this.cardContentMarineMammals.el, "max-height", "0px");
          this.visibleMarine =true;
      }
      else{
        this.renderer.setElementStyle(this.cardContentMarineMammals.el, "max-height", "500px");
        this.visibleMarine=false;
      }
      this.accordionMarineExpanded=!this.accordionMarineExpanded;
      
    }
    
    if(typeAccordion=="formulary"){
      if(this.accordionFormularyExpanded){
          this.renderer.setElementStyle(this.cardContentFormulary.el, "max-height", "0px");
          this.visibleFormulary =true;
      }
      else{
        this.renderer.setElementStyle(this.cardContentFormulary.el, "max-height", "800px");
        this.visibleFormulary = false;
      } 
      this.accordionFormularyExpanded=!this.accordionFormularyExpanded;
    }
    
    
  }

  /*toggleFormulary() {
      this.visibleFormulary = !this.visibleFormulary;
  }

  toggleMarine(){
    this.visibleMarine = !this.visibleMarine;
  }*/

}
