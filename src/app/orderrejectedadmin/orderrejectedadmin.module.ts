import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderrejectedadminPageRoutingModule } from './orderrejectedadmin-routing.module';

import { OrderrejectedadminPage } from './orderrejectedadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderrejectedadminPageRoutingModule
  ],
  declarations: [OrderrejectedadminPage]
})
export class OrderrejectedadminPageModule {}
