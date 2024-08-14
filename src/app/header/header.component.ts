import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isHeaderVisible = true;
  lastScrollTop = 0;

  constructor(private router: Router) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    this.isHeaderVisible = true;
  }

  isActive(url: string): boolean {
    return this.router.url === url;
  }
}
