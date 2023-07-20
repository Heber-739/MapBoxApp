import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Input,
} from '@angular/core';

import { LngLat, Map, Marker } from 'mapbox-gl';
@Component({
  selector: 'mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent implements AfterViewInit{

  @ViewChild('map') divMap?: ElementRef;
  @Input() lngLat?:LngLat


  ngAfterViewInit(): void {
    if (!this.lngLat) return;
    if(!this.divMap) return;

    const map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 10, // starting zoom,
      interactive:false
    });

    new Marker().setLngLat(this.lngLat).addTo(map)


  }


}
