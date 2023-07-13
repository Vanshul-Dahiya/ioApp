import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'pending-list',
    loadChildren: () => import('./pending-list/pending-list.module').then( m => m.PendingListPageModule)
  },
  {
    path: 'inspection-list',
    loadChildren: () => import('./inspection-list/inspection-list.module').then( m => m.InspectionListPageModule)
  },
  {
    path: 'inspection-dashboard',
    loadChildren: () => import('./inspection-dashboard/inspection-dashboard.module').then( m => m.InspectionDashboardPageModule)
  },
  {
    path: 'pending-dashboard',
    loadChildren: () => import('./pending-dashboard/pending-dashboard.module').then( m => m.PendingDashboardPageModule)
  },
  {
    path: 'claim-form',
    loadChildren: () => import('./claim-form/claim-form.module').then( m => m.ClaimFormPageModule)
  },
  {
    path: 'general-info',
    loadChildren: () => import('./general-info/general-info.module').then( m => m.GeneralInfoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
