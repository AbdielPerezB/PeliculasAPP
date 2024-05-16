import { Component, Input, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { Cast, PeliculaDetalle } from 'src/app/interfaces/interfaces';
import { DataLocalService } from 'src/app/services/data-local.service';
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
  estrella = 'star-outline';

  constructor(private movieService: MoviesService,
              private modalCtrl:ModalController,
              private dataLocal: DataLocalService) { }

  ngOnInit() {

    this.dataLocal.existePelicula(this.id)
    .then(existe => this.estrella = existe? 'star' : 'star-outline');
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
    const existe = this.dataLocal.guardarPelicula(this.pelicula);
    this.estrella = existe? 'star' : 'star-outline';

  }

}
