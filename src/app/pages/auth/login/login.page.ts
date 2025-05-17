  import { Component } from '@angular/core';
  import { IonicModule } from '@ionic/angular';
  import { CommonModule } from '@angular/common';
  import { RouterModule, Router } from '@angular/router';
  import { trigger, transition, style, animate } from '@angular/animations';

  @Component({
    standalone: true,
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
    imports: [IonicModule, CommonModule, RouterModule],
    animations: [
      trigger('fade', [
        transition(':enter', [
          style({ opacity: 0 }),
          animate('300ms ease-in', style({ opacity: 1 }))
        ])
      ])
    ]
  })
  export class LoginPage {
    constructor(private router: Router) {}

    login() {
      localStorage.setItem('token', 'fake-token');

      this.router.navigateByUrl('/home', { replaceUrl: true });
    }
  }
