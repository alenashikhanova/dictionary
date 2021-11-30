import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WordTranslationPageRoutingModule } from './word-translation-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/reducers';
import { DeleteWordEffect } from '../store/effects/delete-word.effect';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WordTranslationPageRoutingModule,
    StoreModule.forFeature('dictionary', reducers),
    EffectsModule.forFeature([DeleteWordEffect])
  ]
})
export class WordTranslationPageModule {}
