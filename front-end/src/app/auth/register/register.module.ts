import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from '../store/effects/register.effect';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RegisterPageRoutingModule,
    SharedComponentsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect])
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}


