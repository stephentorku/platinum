import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import {AlertController, NavController} from '@ionic/angular';
import{Router,NavigationExtras} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.page.html',
  styleUrls: ['./make-payment.page.scss'],
})
export class MakePaymentPage implements OnInit {
  details: any={};
  cost;
  id;
  url;
  orderid;
  responseD:any={};


  constructor(private http:HTTP,private alertctrl:AlertController, public navCtrl:NavController,private router: Router,private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.cost = this.route.snapshot.paramMap.get("cost");
    this.id = this.route.snapshot.paramMap.get("id");

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
            this.router.navigate(['/home']);
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
            this.router.navigate(['/home']);
          }
        }]
      }).then((confirmElement)=>{
        confirmElement.present()
      })
    }
  }
  


}
