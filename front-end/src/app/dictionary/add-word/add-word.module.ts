import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddWordPageRoutingModule } from './add-word-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/reducers';
import { SaveWordEffect } from '../store/effects/save-word.effect';
import { DeleteWordEffect } from '../store/effects/delete-word.effect';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddWordPageRoutingModule,
    StoreModule.forFeature('dictionary', reducers),
    EffectsModule.forFeature([SaveWordEffect])
  ]
})
export class AddWordPageModule {}
