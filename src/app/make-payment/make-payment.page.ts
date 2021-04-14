import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import {AlertController, NavController} from '@ionic/angular';
import{Router,NavigationExtras} from '@angular/router';
import { TenantService } from '../tenant.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.page.html',
  styleUrls: ['./make-payment.page.scss'],
})
export class MakePaymentPage implements OnInit {
  details: any={};
  cost;
  url;
  orderid;
  responseD:any={};
  id:any;
  roomD:any;


  constructor(private http:HTTP,private alertctrl:AlertController, public navCtrl:NavController,private router: Router,private tenant:TenantService,private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.cost=params['cost'];
      this.roomD=params['id'];
    })

  }

 async makepayment(){
     this.url='https://www.paybox.com.co/pay?amount='+this.cost+'&currency=GHS&mode=Cash&mobile_network=AirtelTigo&mobile_number='+ this.details.number +'&order_id='+this.details.email;
     await this.http.post(this.url,{},{Authorization:'Bearer ba2de846-c56c-4fbd-a0d9-0195331ed287'}).then(data =>{
      this.responseD=JSON.parse(data.data);
      console.log(data.data);
    });
    this.orderid=this.responseD.order_id;
    console.log(this.orderid);

    if(this.orderid=="undefined"){
     await this.alertctrl.create({
        header:'Failed',
        subHeader:'Transaction failed. Please try again later',
        buttons:[{
          text:"Okay",
          handler:()=>{
            this.router.navigate(['/home']).then(() => {
              window.location.reload();
            });
          }
        }]
      }).then((confirmElement)=>{
        confirmElement.present()
      })
    }
    else{
    await this.alertctrl.create({
        header:'Success',
        subHeader:'Transaction was successful',
        buttons:[{
          text:"Okay",
          handler:()=>{
            this.router.navigate(['/home']).then(() => {
              window.location.reload();
            });
          }
        }]
      }).then((confirmElement)=>{
        confirmElement.present()
      })

      this.assignroom();
    }
  }
  
  async assignroom(){
    this.id=this.tenant.getid();
    await this.http.post('https://platinumhostel.000webhostapp.com/assign.php',{
      user_id: this.id,room:this.roomD
    },{}).then(data=>{
      console.log(data.data);
    });
    
  }

}
