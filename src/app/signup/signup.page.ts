import { Component, OnInit } from '@angular/core';
import{HTTP } from '@ionic-native/http/ngx';
import {Toast} from '@ionic-native/toast/ngx';
import {AlertController, NavController} from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  user:any={};
  constructor(private http:HTTP, private toast: Toast ,
     public navCtrl:NavController, public loadingController: LoadingController,
     private router: Router, private alertctrl:AlertController) { }

  ngOnInit() {
  }


  async submit(){
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });

    loading.present().then(async ()=>{
      await this.http.post('https://platinumhostel.000webhostapp.com/addnewtenant.php',{
        fname:this.user.fname , 
        lname:this.user.lname,
        gen:this.user.gen,
        email:this.user.email,
        number:this.user.number,
        pass:this.user.pass
  
      },{}).then(data =>{
        console.log(data.data);
      });
      loading.dismiss();

      await this.alertctrl.create({
        header:'Success!',
        subHeader:'Signed Up successfully',
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
    });

    
    
  }

}
