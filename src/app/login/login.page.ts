import { Component, OnInit } from '@angular/core';
import{HTTP } from '@ionic-native/http/ngx';
import {Toast} from '@ionic-native/toast/ngx';
import {AlertController, NavController} from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user:any={};
  constructor(private router: Router, private http:HTTP, private toast: Toast , public navCtrl:NavController) { }

  ngOnInit() {
  }

  login(){
    this.http.post('https://platinumhostel.000webhostapp.com/logintenant.php',{
      email:this.user.email,
      pass:this.user.pass

    },{}).then(data=>{
      this.user =data;
      if(this.user){
        localStorage.setItem('UserData', this.user);
        this.navCtrl.pop().then(()=>{
          this.toast.show('login successful','3000','bottom').subscribe(
            toast =>{
              console.log(toast);
            }
          )
         });
         this.router.navigate(['/home'])
      }
    });
    console.log(this.user);
  
  
  }

}
