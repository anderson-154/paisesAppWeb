import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  constructor(private http:HttpClient) { }

  get httpParams(){
    return  new HttpParams()
    .set('fields','name,capital,cca2,flags,population' 

  )
  }
  buscarPais(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, {params:this.httpParams});
  }

  buscarCapital(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params:this.httpParams});
  }

  getPaisByCode(id:string):Observable<Country[]>{
    const url = `${this.apiUrl}/alpha?codes=${id}`;
    return this.http.get<Country[]>(url);
  }

  buscarPaisRegion(termino:string):Observable<Country[]>{  
    const url = `${this.apiUrl}/region/${termino}`;
    return this.http.get<Country[]>(url, {params:this.httpParams});
  }


}
