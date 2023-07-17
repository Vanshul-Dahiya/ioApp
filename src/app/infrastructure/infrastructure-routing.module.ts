import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfrastructurePage } from './infrastructure.page';

const routes: Routes = [
  {
    path: '',
    component: InfrastructurePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfrastructurePageRoutingModule {}
