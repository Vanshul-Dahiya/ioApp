import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClaimFormPage } from './claim-form.page';

const routes: Routes = [
  {
    path: '',
    component: ClaimFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaimFormPageRoutingModule {}
