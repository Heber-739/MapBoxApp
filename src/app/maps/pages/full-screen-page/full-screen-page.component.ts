import { AfterViewInit, Component } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

(mapboxgl as any).accessToken = 'pk.eyJ1IjoiaGViZXI3MyIsImEiOiJjbGppd2x1MXEwM256M2tvN3d4cG84M3dpIn0.r50Tp_Sfq5WGqB7oc4JTqw';


@Component({
  selector: 'app-full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styles: ['#map{width:100vw;height:100vh;background-color:red;}']
})
export class FullScreenPageComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
      });
  }


}
