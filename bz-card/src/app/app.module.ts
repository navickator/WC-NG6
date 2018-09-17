import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
  entryComponents: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
