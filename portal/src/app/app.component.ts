import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portal';

  config = {
    "bz-card": {
      path: 'http://localhost:9090/index.html',
      element: 'bz-card'
    }
  };

  load(name: string): void {

    const configItem = this.config[name];
    const content = document.getElementsByTagName('link-import')[0];
  
    const link = document.createElement('link');
    link.href = configItem.path;
    link.rel = "import";
    link.onerror = () => console.error(`error loading ${configItem.path}`);
    content.appendChild(link);
  }

  ngOnInit() {
    this.load('bz-card');
  }
}
