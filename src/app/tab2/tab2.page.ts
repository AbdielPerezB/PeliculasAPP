import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar='';
  ideas: string[] = ['Flash', 'Superman', 'Spiderman', 'Batman'];
  peliculas:Pelicula[] = [];
  buscando = false;

  constructor(private movieService: MoviesService,
              private modalCtrl:ModalController) {}

  leerInput(event:any){
    const idea = event.detail.value;
    this.buscar(idea);

  }
  addSugerencia(idea:string){
    this.textoBuscar = idea;
    this.buscar(idea);
  }

  buscar(value: string){
    this.buscando = true;
    this.movieService.getSearchMovie(value)
      .subscribe(resp =>{
        this.peliculas = resp.results;
        this.buscando = false;
      });
  }

  async verDetalle(id:number){
    const modal = await this.modalCtrl.create({
      component:DetalleComponent,
      componentProps:{
        id
      }
    });
    modal.present();
  }


}