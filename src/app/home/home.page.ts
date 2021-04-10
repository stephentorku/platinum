import { Component } from '@angular/core';
import{HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 userPostData={"user_id":""}
 userdets:any;
 person:any=[]
  constructor(private http:HTTP) { }

  ngOnInit() {
    const data = localStorage.getItem('UserData');
    this.userdets =data;
    this.userPostData.user_id = this.userdets;

    this.http.post('https://platinumhostel.000webhostapp.com/tenantdetails.php',{
      id:this.userPostData.user_id,
    },{}).then(reply=>{
      this.person =reply;
    });
    
  }

  slidesOptions = {
    slidesPerView: 1.5
  }





}
