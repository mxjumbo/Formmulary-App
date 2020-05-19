import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleSearchPageRoutingModule } from './single-search-routing.module';

import { SingleSearchPage } from './single-search.page';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleSearchPageRoutingModule,
    PipesModule
  ],
  declarations: [SingleSearchPage]
})
export class SingleSearchPageModule {}
