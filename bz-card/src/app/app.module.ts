import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],  
  entryComponents: [AppComponent]
  //bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {
    const cards = createCustomElement(AppComponent,{ injector: this.injector });
    customElements.define("bz-card", cards);
   }
 
  //Define NG Bootstrap
  ngDoBootstrap(){
   
  }
}
