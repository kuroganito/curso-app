import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PeliculaService, IPelicula } from '../../providers/pelicula'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  peliculas: Array<IPelicula>;

  constructor(public navCtrl: NavController, public peliculaService: PeliculaService) {
    this.peliculas = peliculaService.obtenerPeliculas();
  }
  seleccionarPelicula(pelicula: IPelicula) {

  }
}
