# WC-NG6
Create a WebComponent with Angular6

Ahora que tenemos un componente basico de Cards, vamos a permitir que se puedan asignar valores al titulo y subtitulo por medio de atributos del DOM, asi mismo convertir el DOM en shadow dom

# PASO 1
Modificar el archivo app.module.ts para registrar la creación del custom element
```javascript
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

@NgModule({
  entryComponents: [AppComponent]
});

constructor(private injector: Injector) {
    const cards = createCustomElement(AppComponent,{ injector: this.injector });
    customElements.define("bz-card", cards);
   }
```
# PASO 2
Modificar el archivo app.component.ts

```javascript
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

```

# PASO 3
Debido a que en este punto tenemos el custom element con shadow dom, es necesario importar los iconos dentro del template, esto lo realizaremos en el archivo app.component.html


## Ejecutar
ng serve

Esto nos permitira verificar la aplicación en http://localhost:4200


# Continuar con el siguiente paso
https://github.com/navickator/WC-NG6/tree/step/3

> git checkout step/3
