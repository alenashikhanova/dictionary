import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TranslationResponseInterface } from '../store/types/translations-response.interface';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor(private http: HttpClient) { }

  addWord(word: string): Observable<TranslationResponseInterface> {
    return this.http.post<TranslationResponseInterface>('/api/dictionary/add-word', word);
  }

  getAll(): Observable<TranslationResponseInterface[]> {
    return this.http.get<TranslationResponseInterface[]>('/api/dictionary');
  }

  deleteWord(id: string): Observable<any> {
    return this.http.delete<any>(`/api/dictionary/${id}`);
  }
}
