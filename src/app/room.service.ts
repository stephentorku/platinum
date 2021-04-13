import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RoomService {
  capacity:any;
  roomnumber:any;
  spaces_left:any;
  constructor() { }
  

  //room number
  setRoomNumber(sth){
    if(sth!=''){
      this.roomnumber=sth;
      return true;
    }
    else{
      return false;
    }
   
  }
  getRoomNumber(){
    return this.roomnumber;
  }

    //capacity
  setCapacity(sth){
    if(sth!=''){
      this.capacity=sth;
      return true;
    }
    else{
      return false;
    }
   
  }
  getCapacity(){
    return this.capacity;
  }

  //spaces left
  setSpacesLeft(sth){
    if(sth!=''){
      this.spaces_left=sth;
      return true;
    }
    else{
      return false;
    }
   
  }
  getSpacesLeft(){
    return this.spaces_left;
  }

}
