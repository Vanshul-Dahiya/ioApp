import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacultyDetailPage } from './faculty-detail.page';

const routes: Routes = [
  {
    path: '',
    component: FacultyDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacultyDetailPageRoutingModule {}
