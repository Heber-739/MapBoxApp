import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem{
  route: string;
  name:string;
}
@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
    templateUrl: './side-menu.component.html',
  styles: ['li{cursor:pointer;transition:0.2s all;}ul{position:fixed;top:30px;left:20px;z-index:999;}']
})
export class SideMenuComponent {

  public menuItems:MenuItem[]=[
    {route:'/maps/fullscreen', name: 'Full-screen'},
    {route:'/maps/zoom-range', name: 'Zoom-range'},
    {route:'/maps/markers', name: 'Markers'},
    {route:'/maps/properties', name: 'Houses'},
    {route:'/alone', name: 'Alone Page'},
  ]

}
