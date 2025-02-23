import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, concatMap, forkJoin, delay, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { error } from 'console';
import { SignalNode } from '@angular/core/primitives/signals';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url: string = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) {}

  getAllPeliculas(): Observable<any> {
    let direccion = this.url + 'films/';
    return this.http.get<any>(direccion).pipe(
      catchError((error) => {
        console.error('Error obteniendo películas:', error);
        throw error;
      })
    );
  }

  getPelicula(id: string): Observable<any> {
    return this.http.get<any>(id).pipe(
      catchError((error) => {
        console.log('Error al obtener los detalles de la pelicula', error);
        throw error;
      })
    );
  }

  getPeliculaDetalles(
    urls_naves: string[],
    urls_planetas: string[],
    urls_personajes: string[]
  ): Observable<any> {
    const delayMs = 500;

    const peticiones_naves = urls_naves.map((url) =>
      of(url).pipe(
        delay(delayMs),
        concatMap((url) => this.http.get(url))
      )
    );

    const peticiones_planetas = urls_planetas.map((url) =>
      of(url).pipe(
        delay(delayMs),
        concatMap((url) => this.http.get(url))
      )
    );

    const peticiones_personajes = urls_personajes.map((url) =>
      of(url).pipe(
        delay(delayMs),
        concatMap((url) => this.http.get(url))
      )
    );

    return forkJoin({
      naves: forkJoin(peticiones_naves),
      planetas: forkJoin(peticiones_planetas),
      personajes: forkJoin(peticiones_personajes),
    });
  }
}
