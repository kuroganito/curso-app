import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';  
import {IPelicula,IPeliculaService} from './pelicula'
import "rxjs/add/operator/map";

@Injectable()
export class PeliculaNodeService implements IPeliculaService {
    constructor(public http:Http) {}

    obtenerPeliculas(): Observable<Array<IPelicula>> {
        return this.http.get('http://localhost:3000')
        .map((res => ( res.json() as IPelicula[] )));
    }
}
