import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ForgotPasswordPageRoutingModule } from './forgot-password-routing.module';
import { ForgotPasswordPage } from './forgot-password.page';
import { EffectsModule } from '@ngrx/effects';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/reducers';
import { SendMailToResetPasswordEffect } from '../store/effects/send-mail-to-resert-password.effect';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPasswordPageRoutingModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([SendMailToResetPasswordEffect])
  ],
  declarations: [ForgotPasswordPage]
})
export class ForgotPasswordPageModule {}
