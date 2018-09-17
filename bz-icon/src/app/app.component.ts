import { Component,Input, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'bz-icon',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native,
})
export class AppComponent {
  @Input() icon = '';
}
