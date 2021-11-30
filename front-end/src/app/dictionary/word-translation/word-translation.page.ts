/* eslint-disable no-underscore-dangle */
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { deleteWordAction } from '../store/actions/delete-word.action';
import { TranslationResponseInterface } from '../store/types/translations-response.interface';

@Component({
  selector: 'app-word-translation',
  templateUrl: './word-translation.page.html',
  styleUrls: ['./word-translation.page.scss'],
})
export class WordTranslationPage implements OnInit {

  @Input() item: TranslationResponseInterface;
  @Input() index: number;

  constructor(
    private store: Store,
    private alertService: AlertService) { }

  ngOnInit() {}

  deleteWord(item: TranslationResponseInterface): void {
    this.alertService.presentAlert('Deleting word', `Are you sure you want to delete word - "${item.word}"?`, 'Yes').
      then((result) => {
        if (result) {
          this.store.dispatch(deleteWordAction({id: item._id}));
        }
      });
  }

}
