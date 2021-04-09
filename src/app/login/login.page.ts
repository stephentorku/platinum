import { Component, OnInit } from '@angular/core';
import{HTTP } from '@ionic-native/http/ngx';
import {Toast} from '@ionic-native/toast/ngx';
import {AlertController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user:any={};
  constructor(private http:HTTP, private toast: Toast , public navCtrl:NavController) { }

  ngOnInit() {
  }
  login(){
    this.http.post('https://platinumhostel.000webhostapp.com/logintenant.php',{
      email:this.user.email,
      pass:this.user.pass

    },{}).then(data=>{
      console.log(data)
    });
    console.log(this.user);
    // this.navCtrl.pop().then(()=>{
    //   this.toast.show('New Member added','3000','bottom').subscribe(
    //     toast =>{
    //       console.log(toast);
    //     }
    //   )
    //  });
  }

}
