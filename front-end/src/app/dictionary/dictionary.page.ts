import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { getWordsAction } from './store/actions/get-words.action';
import { dataSelector } from './store/selectors';
import { TranslationResponseInterface } from './store/types/translations-response.interface';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.page.html',
  styleUrls: ['./dictionary.page.scss'],
})
export class DictionaryPage implements OnInit {

  words$: Observable<TranslationResponseInterface[] | null>;

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store) { }

  ngOnInit() {
    this.store.dispatch(getWordsAction());
    this.words$ = this.store.pipe(select(dataSelector));
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/auth', { replaceUrl: true});
  }
}
