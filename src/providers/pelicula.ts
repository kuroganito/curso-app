import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';  


export interface IPelicula {
    titulo: string;
    imagen: string;
    calificacion: number;
    sinopsis: string;
}

export interface IPeliculaService {
    obtenerPeliculas(): Observable<Array<IPelicula>>;
}
