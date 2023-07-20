import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

import {LngLatLike, Map} from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css'],

})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {


  @ViewChild('map') divMap?:ElementRef;


  public currentZoom: number = 13;
  public map?:Map
  public lngLat:LngLatLike ={lng:-74.5, lat:40};

  ngAfterViewInit(): void {
    if(!this.divMap) return;

     this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: this.currentZoom, // starting zoom
      });
      this.mapListenners()
  }
    ngOnDestroy(): void {
    this.map?.remove()
  }

  mapListenners(){
    if(!this.map) return;
    this.map.on('zoom',(ev)=>this.currentZoom = this.map!.getZoom())
    this.map.on('zoomend',(ev)=>{
      if(this.map!.getZoom()<18) return;
      this.map!.zoomTo(18)
    })
    this.map.on('move',()=>{
      this.lngLat=this.map!.getCenter();
    })

  }

  zoomIn(){
this.map?.zoomIn()
  }

  zoomOut(){
    this.map?.zoomOut()
  }

  zoomChange(value:string){
    this.currentZoom=Number(value);
    this.map?.zoomTo(this.currentZoom)
  }

}
