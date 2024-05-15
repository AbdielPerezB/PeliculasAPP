import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent  implements OnInit {

  @Input() id!: number;

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    console.log('Datos');
    this.movieService.getPeliculaDetalle(this.id)
      .subscribe(
        resp => {
          console.log(resp.title);
        }
      );

      this.movieService.getActoresPelicula(this.id)
      .subscribe(
        resp => {
          console.log(resp.crew);
        }
      );
  }

}
