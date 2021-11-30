import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DictionaryPageRoutingModule } from './dictionary-routing.module';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { GetWordsEffect } from './store/effects/get-words.effect';
import { SharedComponentsModule } from '../shared/shared-components/shared-components.module';
import { OrderModule } from 'ngx-order-pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderModule,
    SharedComponentsModule,
    DictionaryPageRoutingModule,
    StoreModule.forFeature('dictionary', reducers),
    EffectsModule.forFeature([GetWordsEffect])
  ]
})
export class DictionaryPageModule {}
