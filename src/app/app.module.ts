import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HTTP } from '@ionic-native/http/ngx';
import { FormsModule } from '@angular/forms';
import {Toast} from '@ionic-native/toast/ngx';
import {TenantService} from './tenant.service';
import {RoomService} from './room.service';
import { CookieService} from 'ngx-cookie-service';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,HttpClientModule ],
  providers: [Toast,HTTP, HttpClient, TenantService, RoomService,CookieService,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
constructor(){}
}
