import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ActivatedRoute, ActivatedRouteSnapshot, RouteReuseStrategy, RouterModule, Routes} from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import {HttpClientModule, provideHttpClient, withJsonpSupport} from "@angular/common/http";
import {MapsComponent} from "./maps/maps.component";
import {HomePage} from "./home/home.page";
import {LoginPage} from "./login/login.page";
import {FormsModule} from "@angular/forms";
import {GoogleMapsModule} from "@angular/google-maps";
import {CommonModule} from "@angular/common";
const routes: Routes = [

   {
      component: HomePage,
      path: 'home'
    },
    {
      component: LoginPage,
      path: 'login'
    }
];

@NgModule({
  declarations: [AppComponent, MapsComponent, HomePage, LoginPage],
  imports: [RouterModule.forRoot(routes),GoogleMapsModule, CommonModule, RouterModule,  BrowserModule, IonicModule.forRoot({mode: 'ios'}), HttpClientModule, FormsModule],
  providers: [ provideHttpClient(withJsonpSupport())],
  bootstrap: [AppComponent],
})
export class AppModule {}
