import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ArbolSelectorComponent } from './arbol-selector/arbol-selector.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import {HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
            RouterOutlet,
            ArbolSelectorComponent,
            HttpClientModule,
            GoogleMapComponent,
            MatCardModule
            ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

}
