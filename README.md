# WC-NG6
Create a WebComponent with Angular6

Ahora que ya tenemos un proyecto básico llamado bz-card, crearemos la estructura del card

# PASO 1
Modificacion del archivo app.component.ts
```javascript
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
```

Modificación del archivo app.component.html
```html
<div class="bz-card">  
  <div class="bz-card__header-state bz-card__header-state--green"></div>
  <div class="bz-card__header">
    <div class="bz-card__header-icon">
      <svg class="bz-icon" height="16px" width="16px">
        <use href="#cloud-process"></use>
      </svg>
    </div>
    <div class="bz-card__header-text">
      <h4 class="bz-card__header-title">{{title}} </h4>
      <p class="bz-card__header-subtitle"><span class="bz-card__header-subtitle--green">{{subtitle}}  </span></p>
    </div>
    <a class="bz-card__moreactions" href="#">
      <svg class="bz-icon" height="16px" width="16px">
        <use href="#icon-dots-vertical"></use>
      </svg>
    </a>
  </div>
</div>
```

Modificación de la hoja de estilos para referenciar a genome
```css
@import url("http://localhost:8080/genome/bizagi-genome-genome.min.css");
```

## Ejecutar
ng serve

Esto nos permitira verificar la aplicación en http://localhost:4200


# Continuar con el siguiente paso
https://github.com/navickator/WC-NG6/tree/step/2

> git checkout step/2
