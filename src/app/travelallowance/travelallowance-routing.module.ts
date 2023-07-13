import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelallowancePage } from './travelallowance.page';

const routes: Routes = [
  {
    path: '',
    component: TravelallowancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelallowancePageRoutingModule {}
