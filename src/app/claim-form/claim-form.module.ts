import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClaimFormPageRoutingModule } from './claim-form-routing.module';

import { ClaimFormPage } from './claim-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClaimFormPageRoutingModule
  ],
  declarations: [ClaimFormPage]
})
export class ClaimFormPageModule {}
