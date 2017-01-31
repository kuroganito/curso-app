import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IPelicula } from '../../providers/pelicula'

@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html'
})
export class DetallePage {
  pelicula: IPelicula;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pelicula = navParams.get("pelicula");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }

}
