import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.page.html',
  styleUrls: ['./room-details.page.scss'],
})
export class RoomDetailsPage implements OnInit {
  roomnumber: any;
  capacity: any;
  space_left: any;

  constructor(private roomservice: RoomService) { }

  ngOnInit() {
    this.roomnumber = this.roomservice.getRoomNumber();
    this.capacity = this.roomservice.getCapacity();
    this.space_left = this.roomservice.getSpacesLeft();

  }

}
