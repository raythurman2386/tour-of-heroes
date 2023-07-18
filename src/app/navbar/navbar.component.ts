import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  title = 'Tour of Heroes'
  routes = [
    { path: '/', name: 'Home' },
    { path: '/heroes', name: 'Heroes' },
    { path: '/dashboard', name: 'Dashboard' },
  ]
}
