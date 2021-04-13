import { Component, OnInit } from '@angular/core';
import {TenantService} from './tenant.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  p:any;
  constructor(private tenant: TenantService) {}
  ngOnInit(){
    this.p=this.tenant.getuser();
    console.log("hello");
    console.log(this.p);
    }
}
