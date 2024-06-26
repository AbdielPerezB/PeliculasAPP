import { Component} from '@angular/core';
import { Genre, PeliculaDetalle } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  peliculasDetalles:PeliculaDetalle[] = [];
  generos: Genre[] = [];

  favoritoGenero:any[] = [];


  constructor(private dataLocal:DataLocalService,
              private movieService:MoviesService
  ) {}

  async ionViewWillEnter(){
    this.peliculasDetalles = await this.dataLocal.cargarFavoritos();
    this.generos = await this.movieService.cargarGeneros();
    this.pelisPorGenero(this.generos, this.peliculasDetalles);
  }
  ionViewDidLeave(){
    console.log('ionViewDidLeave');
  }

  pelisPorGenero(generos: Genre[], peliculas: PeliculaDetalle[]){
    this.favoritoGenero = [];
    generos.forEach(genero =>{
      this.favoritoGenero.push({
        genero: genero.name,
        pelis: peliculas.filter(peli =>{
          return peli.genres.find(genre => genre.id ===genero.id);
        })
      });
    });
  }

  async refrescar(){
    this.peliculasDetalles = await this.dataLocal.cargarFavoritos();
    this.generos = await this.movieService.cargarGeneros();
    this.pelisPorGenero(this.generos, this.peliculasDetalles);
  }

}
