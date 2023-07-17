import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfrastructurePageRoutingModule } from './infrastructure-routing.module';

import { InfrastructurePage } from './infrastructure.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfrastructurePageRoutingModule
  ],
  declarations: [InfrastructurePage]
})
export class InfrastructurePageModule {}
