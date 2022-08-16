import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  isloggedIn: boolean = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute) { }
  ngOnInit() {
    this.isloggedIn = localStorage.getItem('LoggedIn') == 'true';
  }
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  logout() {
    localStorage.removeItem('LoggedIn');
    localStorage.setItem('LoggedIn', 'false');
    this.router.navigate(['/']);
  }
}
