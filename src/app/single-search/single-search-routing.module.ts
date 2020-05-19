import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleSearchPage } from './single-search.page';

const routes: Routes = [
  {
    path: '',
    component: SingleSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleSearchPageRoutingModule {}
