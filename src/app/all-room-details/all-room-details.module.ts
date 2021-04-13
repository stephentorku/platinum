import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllRoomDetailsPageRoutingModule } from './all-room-details-routing.module';

import { AllRoomDetailsPage } from './all-room-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllRoomDetailsPageRoutingModule
  ],
  declarations: [AllRoomDetailsPage]
})
export class AllRoomDetailsPageModule {}
