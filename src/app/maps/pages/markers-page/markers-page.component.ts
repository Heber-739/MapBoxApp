import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

import { LngLat, Map, Marker } from 'mapbox-gl';

interface MarkerWithColor{
  marker:Marker;
  color:string;
}
interface PlainMarker{
  lngLat:LngLat;
  color:string;
}

@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css'],
})
export class MarkersPageComponent implements AfterViewInit {
  @ViewChild('map') divMap?: ElementRef;

  public markers:MarkerWithColor[]=[]
  public map?: Map;
  public lngLat: LngLat = new LngLat(-74.5, -40); /* {lng:-74.5, lat:40}; */

  ngAfterViewInit(): void {
    if (!this.divMap) return;

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 10, // starting zoom
    });
    this.readFromLocalStorage()
    /* const customMarker = document.createElement('h3')
      customMarker.innerHTML = 'Heber Duarte'
      const marker = new Marker(
        {element:customMarker}
      ).setLngLat(this.lngLat).addTo(this.map) */
  }

  createMarker() {
    if (!this.map) return;
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    const lngLat = this.map.getCenter();
    this.addMarker(lngLat, color);
  }

  addMarker(lngLat: LngLat, color: string) {
    const marker = new Marker({
      color: color,
      draggable: true,
    })
      .setLngLat(lngLat)
      .addTo(this.map!);
      this.markers.push({marker,color})
      this.saveToLocalStorage()
      marker.on('dragend',()=>this.saveToLocalStorage())
  }

  flyTo(marker:Marker){
    this.map?.flyTo({
      zoom:15,
      center:marker.getLngLat()
    })
  }

  deleteMarker(i:number){
    this.markers[i].marker.remove()
    this.markers.splice(i,1)
  }

  saveToLocalStorage(){
    const plainMarker:PlainMarker[]=this.markers.map(({marker,color})=>{
      return {lngLat: marker.getLngLat(),color}
    })
    localStorage.setItem('plainMarkers', JSON.stringify(plainMarker))
  }

  readFromLocalStorage(){
    const plainMarkersString:PlainMarker[] = JSON.parse(localStorage.getItem('plainMarkers')??'[]')
    plainMarkersString.forEach(({lngLat,color}) => this.addMarker(lngLat,color));
  }
}
