import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private movieService: MoviesService) {}

  peliculasRecientes: Pelicula[] = [];

  ngOnInit(): void {
    this.movieService.getFeature().subscribe(
      (resp) => {
        this.peliculasRecientes = resp.results;
        // console.log(resp.results[0].backdrop_path);
      }
    );
  }


}
