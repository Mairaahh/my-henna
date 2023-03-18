import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderdetailsadminPage } from './orderdetailsadmin.page';

const routes: Routes = [
  {
    path: '',
    component: OrderdetailsadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderdetailsadminPageRoutingModule {}
