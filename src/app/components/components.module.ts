import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'; //Añadir para usar el swiper (el nuevo modo para hacer slides)
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { ImagenPipe } from '../pipes/imagen.pipe';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { ParesPipe } from '../pipes/pares.pipe';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({
  declarations: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowParesComponent,
    DetalleComponent
  ],
  exports:[
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowParesComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ImagenPipe,//Añadir para usar el PIPE!!
    ParesPipe//Agregamos el Pipe de Pares
  ],
  schemas:[//Añadir para usar el swiper (el nuevo modo para hacer slides)
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ComponentsModule { }
