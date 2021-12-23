import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IbadahDetailsPage } from './ibadah-details.page';

const routes: Routes = [
  {
    path: '',
    component: IbadahDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IbadahDetailsPageRoutingModule {}
