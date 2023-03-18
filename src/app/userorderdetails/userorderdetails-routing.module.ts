import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserorderdetailsPage } from './userorderdetails.page';

const routes: Routes = [
  {
    path: '',
    component: UserorderdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserorderdetailsPageRoutingModule {}
