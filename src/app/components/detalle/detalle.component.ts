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
  pelicula: PeliculaDetalle={
    adult: false,
    backdrop_path: '',
    belongs_to_collection: {
      id: 0,
      name: '',
      poster_path: '',
      backdrop_path: '',
    },
    budget: 0,
    genres: [{
      id: 0,
      name: '',
    }],
    homepage: '',
    id: 0,
    imdb_id: '',
    origin_country: [''],
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    production_companies: [{
      id: 0,
      logo_path: '',
      name: '',
      origin_country: '',
    }],
    production_countries: [{
      iso_3166_1: '',
      name: '',
    }],
    release_date: '',
    revenue: 0,
    runtime: 0,
    spoken_languages: [{
      english_name: '',
      iso_639_1: '',
      name: '',
    }],
    status: '',
    tagline: '',
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0,
  };
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
