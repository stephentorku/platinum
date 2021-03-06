import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputModule } from '../components/input/input.module';


import { IonicModule } from '@ionic/angular';

import { MakePaymentPageRoutingModule } from './make-payment-routing.module';

import { MakePaymentPage } from './make-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputModule,
    IonicModule,
    MakePaymentPageRoutingModule
  ],
  declarations: [MakePaymentPage]
})
export class MakePaymentPageModule {}
