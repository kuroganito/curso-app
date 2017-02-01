import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IPelicula } from '../../providers/pelicula'

@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html'
})
export class DetallePage {
  pelicula: IPelicula;
  stars: Array<string>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pelicula = navParams.get("pelicula");
  }

  ionViewDidLoad() {
    this.stars = [];
    for (let i = 0; i < 5; i++)
      this.stars.push(this.pelicula.calificacion > i ? 'star' : 'star-outline')

  }

}
