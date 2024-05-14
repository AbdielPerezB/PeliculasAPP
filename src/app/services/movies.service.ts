import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RespuestaMDB } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getFeature():Observable<RespuestaMDB>{
    return this.http.get<RespuestaMDB>(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2024-01-01&primary_release_date.lte=2024-05-09&api_key=6c9c03d916011f527240b08377154ba5&language=es&include_image_language=es`);
  }
}
