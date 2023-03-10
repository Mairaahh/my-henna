import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreparationPage } from './preparation.page';

const routes: Routes = [
  {
    path: '',
    component: PreparationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreparationPageRoutingModule {}
