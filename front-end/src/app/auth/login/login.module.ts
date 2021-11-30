import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { reducers } from '../store/reducers';
import { LoginEffect } from '../store/effects/login.effect';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([LoginEffect])
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
