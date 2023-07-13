import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelallowancePageRoutingModule } from './travelallowance-routing.module';

import { TravelallowancePage } from './travelallowance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravelallowancePageRoutingModule
  ],
  declarations: [TravelallowancePage]
})
export class TravelallowancePageModule {}
