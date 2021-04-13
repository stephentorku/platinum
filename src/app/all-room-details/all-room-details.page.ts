import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';
@Component({
  selector: 'app-all-room-details',
  templateUrl: './all-room-details.page.html',
  styleUrls: ['./all-room-details.page.scss'],
})
export class AllRoomDetailsPage implements OnInit {
  responseObj: any={}

  constructor(private roomservice: RoomService) { }

  ngOnInit() {
    this.responseObj= this.roomservice.getObject();
    console.log(this.responseObj);
  }

}
