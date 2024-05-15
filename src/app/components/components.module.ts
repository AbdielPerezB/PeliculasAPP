import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'; //Añadir para usar el swiper (el nuevo modo para hacer slides)
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { ImagenPipe } from '../pipes/imagen.pipe';



@NgModule({
  declarations: [SlideshowBackdropComponent],
  exports:[
    SlideshowBackdropComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ImagenPipe//Añadir para usar el PIPE!!
  ],
  schemas:[//Añadir para usar el swiper (el nuevo modo para hacer slides)
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ComponentsModule { }
