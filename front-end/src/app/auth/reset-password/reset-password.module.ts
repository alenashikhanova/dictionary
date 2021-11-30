import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ResetPasswordPageRoutingModule } from './reset-password-routing.module';
import { ResetPasswordPage } from './reset-password.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/reducers';
import { ResetPasswordEffect } from '../store/effects/reset-password.effect';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetPasswordPageRoutingModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([ResetPasswordEffect])
  ],
  declarations: [ResetPasswordPage]
})
export class ResetPasswordPageModule {}
