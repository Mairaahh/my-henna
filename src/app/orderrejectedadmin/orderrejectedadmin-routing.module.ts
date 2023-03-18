import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderrejectedadminPage } from './orderrejectedadmin.page';

const routes: Routes = [
  {
    path: '',
    component: OrderrejectedadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderrejectedadminPageRoutingModule {}
