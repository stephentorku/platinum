import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-room',
  templateUrl: './choose-room.page.html',
  styleUrls: ['./choose-room.page.scss'],
})
export class ChooseRoomPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
