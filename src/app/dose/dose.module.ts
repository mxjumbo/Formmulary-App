import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DosePageRoutingModule } from './dose-routing.module';

import { DosePage } from './dose.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DosePageRoutingModule
  ],
  declarations: [DosePage]
})
export class DosePageModule {}
