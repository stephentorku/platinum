import { Injectable } from '@angular/core';
import{HTTP } from '@ionic-native/http/ngx';
@Injectable({
  providedIn: 'root'
})
export class TenantService {

  id:any;
  name:any;
  rid:any;
  constructor(private http: HTTP){ }

  getuserid(createbody,create){
  return this.http.post('https://platinumhostel.000webhostapp.com/logintenant.php',{
     email:createbody,
     pass:create
    },{});
  }


  setid(sth){
    if(sth!=''){
      this.id=sth;
      return true;
    }
    else{
      return false;
    }
   
  }
  getid(){
    return this.id;
  }

  setname(yakubu){
    this.name=yakubu
    return true;
  }

  getuser(){
    return this.name;
  }
  setroomid(yak){
    this.rid=yak
    return true

  }

  getroomid(){
    return this.rid;
  }
}
