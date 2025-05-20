import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardSubtitle, 
  IonCardContent, 
  IonButton,
  IonIcon,
  IonButtons
} from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { 
  personCircle, 
  person, 
  logOut, 
  checkmarkCircle 
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    IonIcon,
    IonButtons
  ]
})
export class HomePage {

  constructor(private navCtrl: NavController) {
    addIcons({ 
      personCircle,
      person,
      logOut,
      checkmarkCircle
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.navCtrl.navigateRoot('/login');
  }

  goToProfile() {
    this.navCtrl.navigateForward('/profile');
  }
}