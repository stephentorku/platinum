import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';


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
  responseData: any={};
  //https://www.paybox.com.co/pay?amount=20.99&currency=GHS&mode=Cash&mobile_network=AirtelTigo&mobile_number=+233XXXXX&payload=%7b%7d&order_id=PB_12345

  constructor(private http:HTTP) { 

    
  }

  ngOnInit() {
    this.url='https://www.paybox.com.co/pay?amount='+this.cost+'&currency=GHS&mode=Cash&mobile_network=AirtelTigo&mobile_number='+ this.details.number +'&payload=%7b%7d&order_id='+this.details.email;

    this.http.post(this.url,{},{Authorization:'Bearer Token: 85c6060a-ed58-45c2-9635-da7c221117ac'}).then(data => {
      console.log(data.data);
      this.responseData=data.data;
      
    });
  }

  //if orderid != null, then book

}
