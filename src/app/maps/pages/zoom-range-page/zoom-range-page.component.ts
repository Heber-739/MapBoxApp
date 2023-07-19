import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

import {Map} from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css'],

})
export class ZoomRangePageComponent implements AfterViewInit {

  @ViewChild('map') divMap?:ElementRef;

  public currentZoom: number = 10;
  public map?:Map

  ngAfterViewInit(): void {
    if(!this.divMap) return;

     this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: this.currentZoom, // starting zoom
      });
      this.mapListenners()
  }

  mapListenners(){
    if(!this.map) return;
    this.map.on('zoom',(ev)=>this.currentZoom = this.map!.getZoom())
    this.map.on('zoomend',(ev)=>{
      if(this.map!.getZoom()<18) return;
      this.map!.zoomTo(18)
    })

  }

  zoomIn(){
this.map?.zoomIn()
  }

  zoomOut(){
    this.map?.zoomOut()
  }

}
