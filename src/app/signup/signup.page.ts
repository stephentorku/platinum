import { Component, OnInit } from '@angular/core';
import{HTTP } from '@ionic-native/http/ngx';
import {Toast} from '@ionic-native/toast/ngx';
import {AlertController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  user:any={};
  constructor(private http:HTTP, private toast: Toast , public navCtrl:NavController) { }

  ngOnInit() {
  }


  submit(){
    this.http.post('https://platinumhostel.000webhostapp.com/addnewtenant.php',{
      fname:this.user.fname , 
      lname:this.user.lname,
      gen:this.user.gen,
      email:this.user.email,
      number:this.user.number,
      pass:this.user.pass

    },{});
    this.navCtrl.pop().then(()=>{
      this.toast.show('New Member added','3000','bottom').subscribe(
        toast =>{
          console.log(toast);
        }
      )
     });
  }

}
