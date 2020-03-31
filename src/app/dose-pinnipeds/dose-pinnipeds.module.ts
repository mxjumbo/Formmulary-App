import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DosePinnipedsPageRoutingModule } from './dose-pinnipeds-routing.module';

import { DosePinnipedsPage } from './dose-pinnipeds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DosePinnipedsPageRoutingModule
  ],
  declarations: [DosePinnipedsPage]
})
export class DosePinnipedsPageModule {}
