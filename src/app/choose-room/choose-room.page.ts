import { Component, OnInit } from '@angular/core';
import{HTTP } from '@ionic-native/http/ngx';
import {RoomService} from '../room.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-room',
  templateUrl: './choose-room.page.html',
  styleUrls: ['./choose-room.page.scss'],
})
export class ChooseRoomPage implements OnInit {
  details: any={};
  need:any={};
  responseData: any;
  responseObject: any={};

  constructor(private router: Router,private http: HTTP, private roomservice: RoomService) { }

  ngOnInit() {
  }

  async getRoomByName(){
    await this.http.post('https://platinumhostel.000webhostapp.com/search.php',
    {firstname:this.details.fname, lastname:this.details.lname},{}).then(data=>{
      console.log(data.data);
      this.responseData = JSON.parse(data.data);
    });
    console.log(this.responseData);
    this.roomservice.setRoomNumber(this.responseData.Name);
    this.roomservice.setCapacity(this.responseData.Capacity);
    this.roomservice.setSpacesLeft(this.responseData.Capacity);
    this.roomservice.setCost(this.responseData.cost);
    this.roomservice.setID(this.responseData.id);
    console.log(this.responseData.id);
    if(this.roomservice.setRoomNumber(this.responseData.Name)){
      this.router.navigate(['/room-details']);
    }



  }
  async getbycapacity(){
    await this.http.post('https://platinumhostel.000webhostapp.com/searchbycapacity.php',
    {capacity:this.need.capacity},{}).then(data=>{
      console.log(data.data);
      this.responseObject = JSON.parse(data.data);
    });

    this.roomservice.setObject(this.responseData);

    if(this.roomservice.setObject(this.responseObject)){
      this.router.navigate(['/all-room-details']);
    } 
    

  }

  }
  



