import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderacceptedadminPageRoutingModule } from './orderacceptedadmin-routing.module';

import { OrderacceptedadminPage } from './orderacceptedadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderacceptedadminPageRoutingModule
  ],
  declarations: [OrderacceptedadminPage]
})
export class OrderacceptedadminPageModule {}
