import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesigndetailsPageRoutingModule } from './designdetails-routing.module';

import { DesigndetailsPage } from './designdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesigndetailsPageRoutingModule
  ],
  declarations: [DesigndetailsPage]
})
export class DesigndetailsPageModule {}
