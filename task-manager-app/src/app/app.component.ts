import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'task-manager-app';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const user: string | null = localStorage.getItem('currentUser');
    const token: string | null = localStorage.getItem('token');
    if(token && user) {
      this.router.navigate(['main'])
    }

  }
}
