import { Component } from '@angular/core';
import{HTTP } from '@ionic-native/http/ngx';
import { TenantService } from '../tenant.service';
import {RoomService} from '../room.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 id:any;
 person:any=[];
 p:any=[];
 

  constructor(private http:HTTP, private tenant:TenantService,private roomservice: RoomService ) { }

  ngOnInit() {
    this.p=this.tenant.getuser();
    this.id = this.tenant.getid();
    this.http.post('https://platinumhostel.000webhostapp.com/tenantdetails.php',{
      id: this.id
    },{}).then(data=>{
      this.person=JSON.parse(data.data);
      // console.log(data.data);
    });
    // console.log(this.person);  
    console.log(this.person)
    

  }

  
  slidesOptions = {
    slidesPerView: 1.5
  }

  // verifyroom(){
  //   if(rr == ''){
  //     this.roomservice.setRoomNumber('Not Assigned');
  //     this.roomservice.setCapacity('Not Assigned');
  //     this.roomN=this.roomservice.getRoomNumber();
  //     this.roomC=this.roomservice.getCapacity();
  //   }
  //   else{

  //   }
  // }





}
