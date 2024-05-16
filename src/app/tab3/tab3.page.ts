import { Component, OnInit } from '@angular/core';
import { Pelicula, PeliculaDetalle } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  peliculasDetalles:PeliculaDetalle[] = [];


  constructor(private dataLocal:DataLocalService) {}

  async ngOnInit(){
    this.peliculasDetalles = await this.dataLocal.cargarFavoritos();
  }

}
