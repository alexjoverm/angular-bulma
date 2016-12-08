import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BuModule } from './components/index';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BuModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
