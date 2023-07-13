import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingDashboardPage } from './pending-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: PendingDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingDashboardPageRoutingModule {}
