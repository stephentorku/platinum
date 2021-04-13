import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllRoomDetailsPage } from './all-room-details.page';

const routes: Routes = [
  {
    path: '',
    component: AllRoomDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllRoomDetailsPageRoutingModule {}
