import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre, PeliculaDetalle, RespuestaCredits, RespuestaMDB, arrGenres } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

const URL = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private popularesPage = 0;
  generos:Genre[] = [];

  constructor(private http:HttpClient) { }

  private ejecutarQuery<T>(query: string){
    query = URL + query;
    query += `&api_key=${apiKey}&language=es&include_image_language=es`;
    // console.log(query);
    return this.http.get<T>(query);
  }

  getFeature():Observable<RespuestaMDB>{

    const hoy =new Date();
    const ultimoDia =new Date(hoy.getFullYear(), hoy.getMonth()+1, 0).getDate();
    const mes = hoy.getMonth()+1;

    let mesString;

    if(mes < 10){
      mesString = '0' + mes;
    }else{
      mesString = mes;
    }

    const inicio = `${hoy.getFullYear()}-${mesString}-01`;
    const fin = `${hoy.getFullYear()}-${mesString}-${ultimoDia}`;
    return this.ejecutarQuery<RespuestaMDB>(`/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${fin}`);
  }
  getPopulares(){
    this.popularesPage++;
    const query = `/discover/movie?sort_by=popularity.desc&page=${this.popularesPage}`;
    return this.ejecutarQuery<RespuestaMDB>(query);

  }

  getPeliculaDetalle(id: number){
    const query = `/movie/${id}?a=1`;
    return this.ejecutarQuery<PeliculaDetalle>(query);
  }

  getActoresPelicula(id: number){
    const query = `/movie/${id}/credits?a=1`;
    return this.ejecutarQuery<RespuestaCredits>(query);
  }

  getSearchMovie(queryBusqueda: string){
    const query = `/search/movie?query=${queryBusqueda}&include_adult=true`;
    return this.ejecutarQuery<RespuestaMDB>(query);
  }

  cargarGeneros():Promise<Genre[]>{
    return new Promise( resolve =>{
      this.ejecutarQuery<arrGenres>('/genre/movie/list?a=1')
              .subscribe(resp => {
                this.generos = resp.genres;
                resolve(this.generos);
              });
    });
  }
}
