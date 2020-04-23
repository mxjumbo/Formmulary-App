import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrugListPageRoutingModule } from './drug-list-routing.module';

import { DrugListPage } from './drug-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrugListPageRoutingModule
  ],
  declarations: [DrugListPage]
})
export class DrugListPageModule {}
