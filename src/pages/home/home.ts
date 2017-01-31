import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IPelicula } from '../../providers/pelicula'
import { PeliculaLocalService } from '../../providers/peliculaLocal'
import { PeliculaNodeService } from  '../../providers/peliculaNode'
import { DetallePage } from '../detalle/detalle';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  peliculas: Array<IPelicula>;

  constructor(public navCtrl: NavController, public peliculaLocalService: PeliculaLocalService
  , public peliculaNodeService: PeliculaNodeService) {
    //Local
    //peliculaLocalService.obtenerPeliculas().subscribe(data =>{
    //  this.peliculas = data;
    //});
    //Remote
    peliculaNodeService.obtenerPeliculas().subscribe(data =>{
      this.peliculas = data;
    });
  }
  seleccionarPelicula(pelicula: IPelicula) {
      this.navCtrl.push(DetallePage,{"pelicula":pelicula});
  }
}
