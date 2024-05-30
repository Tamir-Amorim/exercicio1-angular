import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserModule } from './user/user.module';



@NgModule({
  declarations: [
    UserModule,
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    CommonModule
  ],
  providers: [  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
