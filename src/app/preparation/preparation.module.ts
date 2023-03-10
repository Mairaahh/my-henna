import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreparationPageRoutingModule } from './preparation-routing.module';

import { PreparationPage } from './preparation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreparationPageRoutingModule
  ],
  declarations: [PreparationPage]
})
export class PreparationPageModule {}
