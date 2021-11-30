import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) { }

  async showError(errorMessage: string) {
    const toast = await this.toastController.create({
      message: errorMessage,
      position: 'bottom',
      cssClass: 'error-message',
      buttons: [
         {
          text: 'Close',
          role: 'cancel',
        }
      ]
    });
    toast.present();
  }

  async showMessage(message: string) {
    const toast = await this.toastController.create({
      message,
      position: 'bottom',
      cssClass: 'just-message',
      duration: 2000
    });
    toast.present();
  }
}
