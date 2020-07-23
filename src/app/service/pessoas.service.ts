import { Pessoas } from './../modelo/pessoas';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {
  
  constructor(private http : HttpClient) { }

  findAll(){
    return this.http.get<Pessoas[]>( 'http://localhost:3000/somareordernaragrupar' );
  }
}
