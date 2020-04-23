import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrugListPage } from './drug-list.page';

const routes: Routes = [
  {
    path: '',
    component: DrugListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrugListPageRoutingModule {}
