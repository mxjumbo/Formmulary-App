import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportYourExperiencePageRoutingModule } from './report-your-experience-routing.module';

import { ReportYourExperiencePage } from './report-your-experience.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportYourExperiencePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ReportYourExperiencePage]
})
export class ReportYourExperiencePageModule {}
