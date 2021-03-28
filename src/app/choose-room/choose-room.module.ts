import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseRoomPageRoutingModule } from './choose-room-routing.module';
import { InputModule } from '../components/input/input.module';

import { ChooseRoomPage } from './choose-room.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputModule,
    ChooseRoomPageRoutingModule
  ],
  declarations: [ChooseRoomPage]
})
export class ChooseRoomPageModule {}
