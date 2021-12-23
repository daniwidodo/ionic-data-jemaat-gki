import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgapeDetailsPage } from './agape-details.page';

const routes: Routes = [
  {
    path: '',
    component: AgapeDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgapeDetailsPageRoutingModule {}
