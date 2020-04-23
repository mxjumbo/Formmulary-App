import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterCombinedSearchPage } from './filter-combined-search.page';

const routes: Routes = [
  {
    path: '',
    component: FilterCombinedSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterCombinedSearchPageRoutingModule {}
