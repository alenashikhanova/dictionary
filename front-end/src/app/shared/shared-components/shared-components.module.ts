import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendErrorComponent } from '../components/backend-error/backend-error.component';
import { LogoHeaderComponent } from '../components/logo-header/logo-header.component';
import { InputPasswordComponent } from '../components/input-password/input-password.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { BackButtonComponent } from '../components/back-button/back-button.component';
import { AddWordPage } from 'src/app/dictionary/add-word/add-word.page';
import { WordTranslationPage } from 'src/app/dictionary/word-translation/word-translation.page';
import { DictionaryPage } from 'src/app/dictionary/dictionary.page';

@NgModule({
  declarations: [
    BackendErrorComponent,
    LogoHeaderComponent,
    InputPasswordComponent,
    BackButtonComponent,
    AddWordPage,
    WordTranslationPage,
    DictionaryPage
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports: [
    BackendErrorComponent,
    LogoHeaderComponent,
    InputPasswordComponent,
    BackButtonComponent,
    AddWordPage,
    WordTranslationPage,
    DictionaryPage
  ]
})
export class SharedComponentsModule { }
