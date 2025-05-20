import { Component } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonItem, 
  IonInput, 
  IonButton, 
  IonIcon 
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { 
  mailOutline, 
  lockClosedOutline, 
  eyeOutline, 
  eyeOffOutline 
} from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonItem, 
    IonInput, 
    IonButton, 
    IonIcon,
    FormsModule
  ]
})
export class LoginPage {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor(private router: Router) {
    addIcons({ 
      mailOutline, 
      lockClosedOutline, 
      eyeOutline, 
      eyeOffOutline 
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  login() {
    if (!this.email || !this.password) {
      console.error('Por favor completa todos los campos');
      return;
    }

    console.log('Email:', this.email);
    console.log('Password:', this.password);

    localStorage.setItem('token', 'fake-token');
    this.router.navigateByUrl('/home', { replaceUrl: true });
  }
}