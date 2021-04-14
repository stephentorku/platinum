import { Component, OnInit } from '@angular/core';
import{HTTP } from '@ionic-native/http/ngx';
import {Toast} from '@ionic-native/toast/ngx';
import {AlertController, NavController} from '@ionic/angular';
import { Router } from '@angular/router';
import { TenantService } from '../tenant.service';
import { CookieService} from 'ngx-cookie-service';
import { LoadingController } from '@ionic/angular';





@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  msg=true;
  user:any={};
  responseData:any;
 
  constructor(private router: Router, private http:HTTP, 
    private toast: Toast , public navCtrl:NavController , 
    private tenant:TenantService, private cookie:CookieService, 
    public loadingController: LoadingController, 
    private alertctrl:AlertController) { }

  ngOnInit() {
    this.cookie.deleteAll();
  }

  async login(){

    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });

    loading.present().then(async ()=>{

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

    loading.dismiss();

    if(this.tenant.setid(this.responseData.id)){
      this.router.navigate(['/home']);
    }
    else{
      await this.alertctrl.create({
        header:'Sorry!',
        subHeader:'Wrong credentials',
        buttons:[{
          text:"Okay",
          handler:()=>{
            this.router.navigate(['/login']).then(() => {
              window.location.reload();
            });
          }
        }]
      }).then((confirmElement)=>{
        confirmElement.present()
      })
    

    }

    });
    
}
}


