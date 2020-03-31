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
    path: 'general-information',
    loadChildren: () => import('./general-information/general-information.module').then( m => m.GeneralInformationPageModule)
  },
  {
    path: 'dose/:group',
    loadChildren: () => import('./dose/dose.module').then( m => m.DosePageModule)
  },  {
    path: 'dose-pinnipeds',
    loadChildren: () => import('./dose-pinnipeds/dose-pinnipeds.module').then( m => m.DosePinnipedsPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
