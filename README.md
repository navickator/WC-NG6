# WC-NG6
Create a WebComponent with Angular6

Ahora que tenemos nuestro web component bz-card funcionando, vamos a importarlo en un portal para ver su integración
# PASO 1
Crear un nuevo proyecto llamado portal
```
ng new portal
```

# PASO 2
En el archivo app.module.ts del portal adicionar el schema para que soporte custom elements externos

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

# PASO 3 
En el archivo app.component.ts crear un cargador del webcomponent externo, ya que angular no soporta el uso de <link rel="import" dentro de sus template

```javascript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portal';

  config = {
    "bz-card": {
      path: 'http://localhost:9090/index.html'
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
```

# PASO 4

Ahora debemos servir el webcomponent bz-card en una url que el portal pueda acceder

```terminal
>cd bz-card
>http-server -p 9090 --cors dist/bz-card
```

## Ejecutar
```
ng serve
```

Esto nos permitira verificar la aplicación en http://localhost:4200


# Continuar con el siguiente paso
https://github.com/navickator/WC-NG6/tree/step/4

> git checkout step/4
