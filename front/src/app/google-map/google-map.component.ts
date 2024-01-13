import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule  } from '@angular/google-maps';
import { GoogleMapNamesService } from '../google-map-names.service';

import { skip } from 'rxjs';

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [GoogleMapsModule,
            FormsModule,
          ],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.scss'
})



export class GoogleMapComponent {

  constructor(private googleMapsService: GoogleMapNamesService) {}

  ngOnInit(): void {

    this.googleMapsService.directionSelected
    .pipe(skip(1))
    .subscribe(position =>{
      this.position = position;
      this.center = this.position;
    });

  }

  display: any;

  // desabilita control de pantalla completa de mapa
  options = {
    fullscreenControl:false
  };

  // posicion inicial de mapa - Santiago, Chile.
  center: google.maps.LatLngLiteral = {
    lat :  -33.459229,
    lng :  -70.645348
  };

  // opciones para markador, se deja en caso de necesitar agregar
  // mas opciones
  makerOptionns: google.maps.MarkerOptions = {};

  zoom = 15;

  // title para marker
  title=""
  // label para marker
  // se puede crear label con direccion de arbol dinamica
  label=""

  // position por defecto - Santiago, Chile.
  position: any = {
    lat : -33.459229,
    lng : -70.645348,
    direction: ""
  }

}
