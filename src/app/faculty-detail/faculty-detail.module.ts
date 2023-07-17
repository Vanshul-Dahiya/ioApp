import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacultyDetailPageRoutingModule } from './faculty-detail-routing.module';

import { FacultyDetailPage } from './faculty-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacultyDetailPageRoutingModule
  ],
  declarations: [FacultyDetailPage]
})
export class FacultyDetailPageModule {}
