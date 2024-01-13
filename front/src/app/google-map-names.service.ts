import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MapGeocoder } from '@angular/google-maps';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapNamesService {
  private apiKey = "AIzaSyCriQYFYENJgCC0ggdhjqGaymn4UDgz9SM";
  private direction = new BehaviorSubject<{lat: number, lng: number}>({lat: 0, lng: 0});
  directionSelected = this.direction.asObservable();

  constructor(private http: HttpClient) {
  }

  // conexion con maps
  obtenerDireccion(lat: number, lng: number): Observable<any>{
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  // selector de marker
  directionSelect(lat: number, lng: number): void {
    const newDirection = { lat: parseFloat(lat.toString()), lng: parseFloat(lng.toString()) };
    this.direction.next(newDirection);
  }

}
