import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TopPageRoutingModule } from './top-routing.module';
import { TopPage } from './top.page';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/reducers';
import { GetWordsEffect } from '../store/effects/get-words.effect';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopPageRoutingModule,
    StoreModule.forFeature('dictionary', reducers),
    EffectsModule.forFeature([GetWordsEffect])
  ],
  declarations: [TopPage]
})
export class TopPageModule {}
