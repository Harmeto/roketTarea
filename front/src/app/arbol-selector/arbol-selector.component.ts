// arbol-selector.component.ts

import { Component, OnInit } from '@angular/core';
import { ArbolService } from '../arbol.service';
import { GoogleMapNamesService } from '../google-map-names.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AddComentaryComponent } from '../add-comentary/add-comentary.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-arbol-selector',
  templateUrl: './arbol-selector.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatSelectModule, MatCardModule, MatButtonModule, AddComentaryComponent],
  styleUrls: ['./arbol-selector.component.scss']
})
export class ArbolSelectorComponent implements OnInit {

  arboles: any[] = [];
  direccion: any[] = [];
  arbol: any;
  rutaImagen: string = '';

  constructor(private arbolService: ArbolService,
              private googleMapsService: GoogleMapNamesService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.obtenerArboles();
  }

  obtenerArboles(): void {
    this.arbolService.obtenerArboles()
      .subscribe(arboles => {
        this.arboles = arboles;
      });
  }

  // obtiene datos de arbol segun se elija en select
  obtenerDatoArbol(): void{
    if(!this.arbol || !this.arbol.arbol_id) return
    this.arbolService.obtenerDatoArbol(this.arbol.arbol_id)
      .subscribe((datos: any) => {
        this.seleccionarUbicacion(datos[datos.length - 1]);
        this.rutaImagen = datos[datos.length - 1]?.url_foto;
      });
  }

  //selecciona ubicacion en mapa
  seleccionarUbicacion(latlng: { lat: number; lng: number }): void {
    const { lat, lng } = latlng;

    this.googleMapsService.obtenerDireccion(lat, lng)
      .subscribe((data: { results: string | any[]; }) => {
        if (data.results && data.results.length > 0) {
          const direcctions = data.results[0].formatted_address;
          this.direccion.push(direcctions, lat, lng);
          this.googleMapsService.directionSelect(lat, lng);
        } else {
          this.direccion = ['No se encontró ninguna dirección.'];
        }
      });
  }

  // Manejador de eventos para el cambio del select
  onChange(): void {
    this.obtenerDatoArbol();
  }

  //agrega comentario, solo si se presiona boton 'Guardar'
  agregarComentario():void {
    if(!this.arbol || !this.arbol.arbol_id) return

    const dialogRef = this.dialog.open(AddComentaryComponent, {
      width: '400px', data: { }
    })

    dialogRef.afterClosed().subscribe(result => {
      // Verifica si el usuario presionó "Guardar"
      if (!result) {
        return;
      }

      const data = {comentario: result, arbol_id: this.arbol.arbol_id, postulante_id: 1};

      this.arbolService.enviarComentario(data).subscribe(
        response => {
          this.snackBar.open(response.message, 'Cerrar', {
            duration: 2000
          })
        }
      );
    });
  }
}
