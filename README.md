# WC-NG6
Create a WebComponent with Angular6

## Prerrequisitos
- Tener instalada la ultima versión de angular cli
npm i -g @angular/cli


## Creacion del proyecto

ng new bz-card --prefix custom

## Instalación de los polyfills
ng add @angular/elements

## Creación del componente
ng g component card -v Native

## Registro del componente
Para este paso es necesario abrir el archivo app.modules.ts


```javascript
// Import custom element object
import  { createCustomElement } from '@angular/elements';
import { CardComponent } from './card/card.component';

//Define entry component in ngmodule
@NgModule({
    entryComponents:[CardComponent]
});

//Define NG Bootstrap
ngDoBootstrap(){
    const cards = createCustomElement(CardComponent,{ injector: this.injector });
    customElements.define("bz-card", cards);
  }
```

Tambien es necesario editar el archivo app.component.ts para definir la encapsulación del modulo

```javascript
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bz-card',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native
})
```