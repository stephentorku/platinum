import { Component } from '@angular/core';
import{HTTP } from '@ionic-native/http/ngx';
import { TenantService } from '../tenant.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 id:any;
 person:any=[];
 p:any=[];

  constructor(private http:HTTP, private tenant:TenantService ) { }

  ngOnInit() {
    this.p=this.tenant.getuser();
    this.id = this.tenant.getid();
    this.http.post('https://platinumhostel.000webhostapp.com/tenantdetails.php',{
      id: this.id
    },{}).then(data=>{
      this.person=JSON.parse(data.data);
      // console.log(data.data);
    });
    // console.log(this.person);  
    console.log(this.person)
    
  }

  
  slidesOptions = {
    slidesPerView: 1.5
  }





}
