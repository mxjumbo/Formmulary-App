import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'general-information/:nameDrug',
    loadChildren: () => import('./general-information/general-information.module').then( m => m.GeneralInformationPageModule)
  },
  {
    path: 'dose/:group/:drug',
    loadChildren: () => import('./dose/dose.module').then( m => m.DosePageModule)
  },
  {
    path: 'dose-pinnipeds/:group/:drug',
    loadChildren: () => import('./dose-pinnipeds/dose-pinnipeds.module').then( m => m.DosePinnipedsPageModule)
  },
  {
    path: 'filter-combined-search',
    loadChildren: () => import('./filter-combined-search/filter-combined-search.module').then( m => m.FilterCombinedSearchPageModule)
  },
  {
    path: 'drug-list/:therapeuticValue/:anatomicValue/:groupValue',
    loadChildren: () => import('./drug-list/drug-list.module').then( m => m.DrugListPageModule)
  }
  ,
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'single-search',
    loadChildren: () => import('./single-search/single-search.module').then( m => m.SingleSearchPageModule)
  },  {
    path: 'calculator',
    loadChildren: () => import('./calculator/calculator.module').then( m => m.CalculatorPageModule)
  },
  {
    path: 'report-your-experience',
    loadChildren: () => import('./report-your-experience/report-your-experience.module').then( m => m.ReportYourExperiencePageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
