import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InspectionDashboardPageRoutingModule } from './inspection-dashboard-routing.module';

import { InspectionDashboardPage } from './inspection-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InspectionDashboardPageRoutingModule
  ],
  declarations: [InspectionDashboardPage]
})
export class InspectionDashboardPageModule {}
