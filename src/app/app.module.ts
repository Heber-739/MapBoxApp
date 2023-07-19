import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as mapboxgl from 'mapbox-gl';
(mapboxgl as any).accessToken = 'pk.eyJ1IjoiaGViZXI3MyIsImEiOiJjbGppd2x1MXEwM256M2tvN3d4cG84M3dpIn0.r50Tp_Sfq5WGqB7oc4JTqw';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
