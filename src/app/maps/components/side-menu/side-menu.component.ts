import { Component } from '@angular/core';

interface MenuItem{
  route: string;
  name:string;
}
@Component({
  selector: 'maps-side-menu',
  templateUrl: './side-menu.component.html',
  styles: ['li{cursor:pointer;transition:0.2s all;}']
})
export class SideMenuComponent {

  public menuItems:MenuItem[]=[
    {route:'/maps/fullscreen', name: 'Full-screen'},
    {route:'/maps/zoom-range', name: 'Zoom-range'},
    {route:'/maps/markers', name: 'Markers'},
    {route:'/maps/properties', name: 'Houses'},
  ]

}
