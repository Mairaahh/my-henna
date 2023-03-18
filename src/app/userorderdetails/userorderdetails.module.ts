import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserorderdetailsPageRoutingModule } from './userorderdetails-routing.module';

import { UserorderdetailsPage } from './userorderdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserorderdetailsPageRoutingModule
  ],
  declarations: [UserorderdetailsPage]
})
export class UserorderdetailsPageModule {}
