import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DosePage } from './dose.page';

const routes: Routes = [
  {
    path: '',
    component: DosePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DosePageRoutingModule {}
