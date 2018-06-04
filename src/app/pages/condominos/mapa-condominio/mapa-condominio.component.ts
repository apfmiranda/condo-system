import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet';
import 'style-loader!leaflet/dist/leaflet.css';


@Component({
  selector: 'mapa-condominio',
  templateUrl: './mapa-condominio.component.html',
  styleUrls: ['./mapa-condominio.component.scss']
})
export class MapaCondominioComponent implements OnInit {

  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 17,
    center: L.latLng(-7.91904, -35.08048)
  };

  drawOptions = {
    position: 'topright',
    draw: {
      marker: {
        icon: L.icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/marker-icon.png',
          shadowUrl: 'assets/marker-shadow.png'
        })
      },
      polyline: false,
      circle: {
        shapeOptions: {
          color: '#aaaaaa'
        }
      }
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
