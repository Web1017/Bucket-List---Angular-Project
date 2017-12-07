import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {MaterialModule} from './material.module';

import {DataService} from './data.service';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import {AppRoutingModule} from './app-routing/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    // RouterModule.forRoot(routes),
    
    // MaterialModule
  ],


  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
