import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cast, PeliculaDetalle } from 'src/app/interfaces/interfaces';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent  implements OnInit {

  @Input() id!: number;
  pelicula: PeliculaDetalle = {};
  oculto = 150;
  actores: Cast[] = [];

  constructor(private movieService: MoviesService,
              private modalCtrl:ModalController) { }

  ngOnInit() {
    this.movieService.getPeliculaDetalle(this.id)
      .subscribe(
        resp => {
          this.pelicula= resp;
        }
      );

      this.movieService.getActoresPelicula(this.id)
      .subscribe(
        resp => {
          this.actores = resp.cast;
        }
      );
  }
  regresar(){
    this.modalCtrl.dismiss();
  }

  favorito(){

  }

}
