import { Component, Input } from '@angular/core';

@Component({
  selector: 'bz-card',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title:string;
 subtitle:string;
 
  constructor(){
   this.title = "Bizagi Card";
   this.subtitle = "Subtitle";
  }
}
