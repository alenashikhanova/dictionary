import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class AlertService {

  constructor(private alertController: AlertController) { }

  presentAlert(header: string, message: string, okText: string): Promise<boolean> {

    return new Promise(async (resolve, reject) => {
    okText = (okText) ? okText : 'Ok';
    const alert = (await this.alertController.create({
      cssClass: 'custom-alert',
      subHeader: header,
      message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => resolve(false)
        }, {
          text: okText,
          handler: () => resolve(true)
        }
      ]
    })).present();
  });
}

}
