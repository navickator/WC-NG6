# WC-NG6
Create a WebComponent with Angular6

Ahora que tenemos el componente bz-card que es importado desde el portal, vamos a crear un nuevo componente llamado bz-icon
para reutilizarlo dentro del componente bz-card

# PASO 1
Creación del proyecto
```
ng new bz-icon --prefix custom
cd bz-icon
ng add @angular/elements
```


Modificar el archivo app.module.ts para registrar la creación del custom element
```javascript
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
})
export class AppModule { 
  constructor(private injector: Injector) {
    const icon = createCustomElement(AppComponent,{ injector: this.injector });
    customElements.define("bz-icon", icon);
   }
   //Define NG Bootstrap
  ngDoBootstrap(){
   
  }
}
```
# PASO 2
Modificar el archivo app.component.ts

```javascript
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

```

# PASO 3
Debido a que en este punto tenemos el custom element con shadow dom, es necesario importar los iconos dentro del template, esto lo realizaremos en el archivo app.component.html

```html
<svg _ngcontent-c1="" display="none" height="0" width="0" xmlns="http://www.w3.org/2000/svg">....</svg>

<svg class="bz-icon" height="16px" width="16px">
  <use attr.xlink:href="#{{icon}}"></use>
</svg>
```

## PASO 4
Modificar la pagina index.html para referenciar el componente

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>BzIcon</title>
  <base href="/">
   <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <bz-icon icon="icon-dots-vertical"></bz-icon>
  <bz-icon icon="cloud-process"></bz-icon>
</body>
</html>
```

## PASO 5
Modificar el control bz-card para importar el componente

archivo app.module.ts
```javascript
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
```

Agregar la referencia de los iconos en index.html de bz-card
```html
<link rel="import" href="http://localhost:9091/index.html">
```

## PASO 6
Ahora debemos publicar nuestro componente bz-card en el puerto 9091
```
cd bz-icon
ng build
http-server --cors -p 9091 dist/bz-icon/
```


## Ejecutar
ng serve

Esto nos permitira verificar la aplicación en http://localhost:4200


# Continuar con el siguiente paso
https://github.com/navickator/WC-NG6/tree/step/5

> git checkout step/5
