import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderacceptedadminPage } from './orderacceptedadmin.page';

const routes: Routes = [
  {
    path: '',
    component: OrderacceptedadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderacceptedadminPageRoutingModule {}
