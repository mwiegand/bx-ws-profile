import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routeLinks:any[];
  activeLink = '';
  constructor(private router: Router) {
    this.routeLinks = [
      {label: 'Profile', link: ''},
      {label: 'Learn', link: 'learn'}];
    router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        this.activeLink = this.routeLinks.find(route => event.url === "/"+route.link).link;
      }
    });
  }
}
