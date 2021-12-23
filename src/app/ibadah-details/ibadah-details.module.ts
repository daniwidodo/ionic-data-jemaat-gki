import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IbadahDetailsPageRoutingModule } from './ibadah-details-routing.module';

import { IbadahDetailsPage } from './ibadah-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IbadahDetailsPageRoutingModule
  ],
  declarations: [IbadahDetailsPage]
})
export class IbadahDetailsPageModule {}
