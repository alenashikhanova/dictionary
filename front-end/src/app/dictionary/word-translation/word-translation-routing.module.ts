import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordTranslationPage } from './word-translation.page';

const routes: Routes = [
  {
    path: '',
    component: WordTranslationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordTranslationPageRoutingModule {}
