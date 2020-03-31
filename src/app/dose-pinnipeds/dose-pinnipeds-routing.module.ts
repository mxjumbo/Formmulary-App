import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DosePinnipedsPage } from './dose-pinnipeds.page';

const routes: Routes = [
  {
    path: '',
    component: DosePinnipedsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DosePinnipedsPageRoutingModule {}
