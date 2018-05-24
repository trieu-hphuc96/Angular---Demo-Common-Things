import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AsynchronousProgrammingComponent } from './asynchronous-programming/asynchronous-programming.component';


@NgModule({
  declarations: [
    AppComponent,
    AsynchronousProgrammingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
