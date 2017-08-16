import {Component} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";


@Component({
  selector: 'head-nav',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent {
  routeLinks: any[];
  activeLink = '';

  constructor(private router: Router) {
    this.routeLinks = [
      {label: 'Profile', link: ''},

      /*init LearnComponent code-by-colors #28003E*/
      {label: 'Learn', link: 'learn'}];
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeLink = this.routeLinks.find(route => event.url === "/" + route.link).link;
      }
    });
  }
}
