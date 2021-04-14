import { Component, OnInit } from '@angular/core';
import{HTTP } from '@ionic-native/http/ngx';
import {Toast} from '@ionic-native/toast/ngx';
import {AlertController, NavController} from '@ionic/angular';
import { Router } from '@angular/router';
import { TenantService } from '../tenant.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  msg=true;
  user:any={};
  responseData:any;
 
  constructor(private router: Router, private http:HTTP, private toast: Toast , public navCtrl:NavController , private tenant:TenantService) { }

  ngOnInit() {
  }

  async login(){
    await this.http.post('https://platinumhostel.000webhostapp.com/logintenant.php',{
      email:this.user.email,
      pass:this.user.pass
     },{}).then(data=>{
      this.responseData=JSON.parse(data.data);
      // console.log(data.data);
     });
  console.log(this.user.email);
  console.log(this.user.pass);
  console.log(this.responseData);

  console.log(this.responseData.id);

  this.tenant.setroomid(this.responseData.room);
  this.tenant.setid(this.responseData.id);
  this.tenant.setname(this.responseData.first_name);   
  if(this.tenant.setid(this.responseData.id)){
    this.router.navigate(['/home']);
  }
  else{
    this.router.navigate(['/login']);
  }
}
}


