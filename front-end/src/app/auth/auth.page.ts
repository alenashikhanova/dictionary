import { Component, OnInit } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Device, DeviceInfo } from '@capacitor/device';
import { googleAuthAction } from './store/actions/google-auth.action';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss']
})

export class AuthPage implements OnInit {

  constructor(private store: Store) { }

  async ngOnInit() {
    const deviceInfo = await Device.getInfo();

      if ((deviceInfo as unknown as DeviceInfo).platform === 'web') {
        await GoogleAuth.init();
      }
  }

  async googleSignup() {
    this.store.dispatch(googleAuthAction());
  }
}
