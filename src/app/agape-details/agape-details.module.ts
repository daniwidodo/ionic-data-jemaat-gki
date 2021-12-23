import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgapeDetailsPageRoutingModule } from './agape-details-routing.module';

import { AgapeDetailsPage } from './agape-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgapeDetailsPageRoutingModule
  ],
  declarations: [AgapeDetailsPage]
})
export class AgapeDetailsPageModule {}
