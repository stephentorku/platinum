import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RoomService {
  id;
  capacity:any;
  roomnumber:any;
  spaces_left:any;
  cost:any;
  responseObject: any={};
  constructor() { }


  //id
  setID(sth){
    if(sth!=''){
      this.id=sth;
      return true;
    }
    else{
      return false;
    }
   
  }
  getID(){
    return this.id;
  }
  

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

  //cost
  setCost(sth){
    if(sth!=''){
      this.cost=sth;
      return true;
    }
    else{
      return false;
    }
   
  }
  getCost(){
    return this.cost;
  }

  setObject(sth){
    this.responseObject = sth;
    return true;
  }

  getObject(){
    return this.responseObject;
  }


}
