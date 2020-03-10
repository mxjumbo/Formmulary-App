import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccordionComponent} from './accordion/accordion.component';
import {IonicModule} from '@ionic/angular';

@NgModule({
  declarations: [AccordionComponent],
  imports: [
    CommonModule,IonicModule
  ],
  exports:[
    AccordionComponent
  ]
})
export class ComponentsModule { }
