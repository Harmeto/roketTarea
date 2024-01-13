
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ResponseComentary{
  message: string
}

export interface Arbol{
  nombre_arbol: string,
  ubicacion_id: number,
  arbol_id: number
}

@Injectable({
  providedIn: 'root'
})
export class ArbolService {
  private apiUrl = 'http://localhost:3001/api/arboles';
  private url = 'http://localhost:3001/api/arbol-by-id';
  private comentUrl = 'http://localhost:3001/api/comentario';


  constructor(private http: HttpClient) { }

  obtenerArboles(): Observable<Arbol[]> {
    return this.http.get<Arbol[]>(this.apiUrl);
  }

  obtenerDatoArbol(arbol: any): Observable<any[]>{
    return this.http.post<any[]>(this.url, {arbol_id: arbol});
  }

  enviarComentario(data: any): Observable<ResponseComentary>{
    return this.http.post<ResponseComentary>(this.comentUrl, {data});
  }
}
