import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseRoomPage } from './choose-room.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseRoomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseRoomPageRoutingModule {}
