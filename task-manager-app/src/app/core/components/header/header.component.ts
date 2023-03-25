import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean = false;
  isScrolled: boolean = false;

constructor() { }

ngOnInit(): void {
  const isToken: string | null = localStorage.getItem('token');
  const isUser: string | null = localStorage.getItem('currentUser');
  if(isToken && isUser) {
    this.loggedIn = true;
  }
   else {
    this.loggedIn = false;
   }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollPosition > 71;
  }
}

