import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendingDashboardPageRoutingModule } from './pending-dashboard-routing.module';

import { PendingDashboardPage } from './pending-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendingDashboardPageRoutingModule
  ],
  declarations: [PendingDashboardPage]
})
export class PendingDashboardPageModule {}
