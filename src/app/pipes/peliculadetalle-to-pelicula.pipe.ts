import { Pipe, PipeTransform } from '@angular/core';
import { Pelicula, PeliculaDetalle } from '../interfaces/interfaces';

@Pipe({
  name: 'peliculadetalleToPelicula',
  standalone: true
})
export class PeliculadetalleToPeliculaPipe implements PipeTransform {

  transform(peliculasDetalle:PeliculaDetalle[]): Pelicula[] {
    let peliculas:Pelicula[] = [];
    let ids:number[] = [];

    for(const eachPeli of peliculasDetalle){

      for(const genre of eachPeli.genres){
        ids.push(genre.id);
      }
      
      const peli:Pelicula = {
        adult: eachPeli.adult,
        backdrop_path: eachPeli.backdrop_path,
        genre_ids: ids,
        id: eachPeli.id,
        original_language: eachPeli.original_language,
        original_title: eachPeli.original_title,
        overview: eachPeli.overview,
        popularity: eachPeli.popularity,
        poster_path: eachPeli.poster_path,
        release_date: eachPeli.release_date,
        title: eachPeli.title,
        video: eachPeli.video,
        vote_average: eachPeli.vote_average,
        vote_count: eachPeli.vote_count
      };

      peliculas.push(peli);

      ids = [];

    }
    return peliculas;
  }

}
