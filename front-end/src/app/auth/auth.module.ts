import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthPageRoutingModule } from './auth-routing.module';
import { AuthPage } from './auth.page';
import { SharedComponentsModule } from '../shared/shared-components/shared-components.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';
import { GoogleAuthEffect } from './store/effects/google-auth.effect';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthPageRoutingModule,
    SharedComponentsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([GoogleAuthEffect])
  ],
  declarations: [AuthPage]
})
export class AuthPageModule {}
