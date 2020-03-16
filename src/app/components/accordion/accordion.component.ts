import { Component, OnInit, ViewChild,Renderer } from '@angular/core';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import {File} from '@ionic-native/file/ngx';
import {FileOpener}from '@ionic-native/file-opener/ngx';
import { Platform } from '@ionic/angular';
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

  
  

  constructor(public renderer:Renderer, private document: DocumentViewer, private platform:Platform, private file:File, private fileOpener: FileOpener) { 
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

  

  /* openPdf(){
    const options: DocumentViewerOptions = {
      title: 'My PDF'}
    //this.document.viewDocument('assets/'+namePdf, 'application/pdf', options)
    this.document.viewDocument('www/assets/bibliography.pdf', 'application/pdf', options)
    
  } */
  openPdf(namePdf){
    let filePath=this.file.applicationDirectory+'www/assets';
    if(this.platform.is('android')){
      let fakeName=Date.now();
      //this.file.copyFile(filePath, namePdf, this.file.dataDirectory,'${fakeName}.pdf').then(result=>{this.fileOpener.open(result.nativeURL,'application/pdf');});
      this.file.copyFile(filePath, namePdf, this.file.dataDirectory,namePdf).then(result=>{this.fileOpener.open(result.nativeURL,'application/pdf');});
    }else{
      const options: DocumentViewerOptions = {title: 'My PDF'}
    //this.document.viewDocument('${filePath}/'+namePdf, 'application/pdf', options);
    this.document.viewDocument(filePath+'/'+namePdf, 'application/pdf', options);
    }
  }
  
}
