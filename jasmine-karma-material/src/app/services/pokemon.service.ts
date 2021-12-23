import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  urlApi: string = `https://pokeapi.co/api/v2/pokemon`;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.urlApi);
  }
}
