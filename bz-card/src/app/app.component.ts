import { Component, Input, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'bz-card',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native,
})
export class AppComponent {
  @Input() title = 'Title';
  @Input() subtitle = 'SubTitle';


}
