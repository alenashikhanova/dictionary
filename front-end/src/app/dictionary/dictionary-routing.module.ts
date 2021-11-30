import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DictionaryPage } from './dictionary.page';

const routes: Routes = [
  {
    path: '',
    component: DictionaryPage
  },
  {
    path: 'add-word',
    loadChildren: () => import('./add-word/add-word.module').then( m => m.AddWordPageModule)
  },
  {
    path: 'word-translation',
    loadChildren: () => import('./word-translation/word-translation.module').then( m => m.WordTranslationPageModule)
  },
  {
    path: 'top',
    loadChildren: () => import('./top/top.module').then( m => m.TopPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DictionaryPageRoutingModule {}
