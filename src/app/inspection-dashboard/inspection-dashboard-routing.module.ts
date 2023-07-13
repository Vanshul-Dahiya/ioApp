import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InspectionDashboardPage } from './inspection-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: InspectionDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InspectionDashboardPageRoutingModule {}
