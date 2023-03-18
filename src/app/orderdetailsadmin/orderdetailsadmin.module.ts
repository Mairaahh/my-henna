import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderdetailsadminPageRoutingModule } from './orderdetailsadmin-routing.module';

import { OrderdetailsadminPage } from './orderdetailsadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderdetailsadminPageRoutingModule
  ],
  declarations: [OrderdetailsadminPage]
})
export class OrderdetailsadminPageModule {}
