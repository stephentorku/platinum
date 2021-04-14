import { Component } from '@angular/core';
import{HTTP } from '@ionic-native/http/ngx';
import { TenantService } from '../tenant.service';
import {RoomService} from '../room.service';
import { CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 id:any;
 person:any=[];
 p:any=[];
dets:any=[];
 roomc:any;
 roomn:any;
 

  constructor(private http:HTTP, private tenant:TenantService,private roomservice: RoomService, private cookie:CookieService ) { }

  async ngOnInit() {
    this.p=this.tenant.getuser();
    // this.id = this.tenant.getid();
    this.id =this.cookie.get("userd");
    console.log(this.id);
   await this.http.post('https://platinumhostel.000webhostapp.com/tenantdetails.php',{
      id: this.id
    },{}).then(data=>{
      this.person=JSON.parse(data.data);
      // console.log(data.data);
    });
    
    // console.log(this.person);  
    // console.log(this.person)
    this.verifyroom();

  }

  
  slidesOptions = {
    slidesPerView: 1.5
  }

  async verifyroom(){
    this.id=this.cookie.get("userd");
    await this.http.post('https://platinumhostel.000webhostapp.com/checkroom.php',{
      user_id: this.id
    },{}).then(data=>{
      this.dets=JSON.parse(data.data);
    });
    this.roomc = this.dets.Capacity;
    this.roomn =this.dets.RoomName;
    this.ngOnInit();

}

}
