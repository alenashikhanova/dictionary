/* eslint-disable @typescript-eslint/member-ordering */
import { Component, ViewChild } from '@angular/core';
import { IonRouterOutlet, Platform} from '@ionic/angular';
import { Location } from '@angular/common';
import { App } from '@capacitor/app';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  numberBackClicks = 0;

  @ViewChild(IonRouterOutlet, { static : true }) routerOutlet: IonRouterOutlet;
  constructor(private platform: Platform, private location: Location) {
    this.initializeApp();
  }

  initializeApp(): void {
    this.platform.ready().then(() => {
      this.platform.backButton.subscribeWithPriority(10, () => {
        if (!this.routerOutlet.canGoBack()) {
          App.exitApp();
        } else {
          this.location.back();
        }
      });
    });
  }

}
