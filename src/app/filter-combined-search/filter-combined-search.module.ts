import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterCombinedSearchPageRoutingModule } from './filter-combined-search-routing.module';

import { FilterCombinedSearchPage } from './filter-combined-search.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterCombinedSearchPageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [FilterCombinedSearchPage]
})
export class FilterCombinedSearchPageModule {}
