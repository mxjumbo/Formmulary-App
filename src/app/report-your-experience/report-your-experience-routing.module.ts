import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportYourExperiencePage } from './report-your-experience.page';

const routes: Routes = [
  {
    path: '',
    component: ReportYourExperiencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportYourExperiencePageRoutingModule {}
