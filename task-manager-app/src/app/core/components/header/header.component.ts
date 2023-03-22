import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean = false;

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
}

