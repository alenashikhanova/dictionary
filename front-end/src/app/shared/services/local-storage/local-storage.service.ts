import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  set(key: string, data: string): void {
    try {
      localStorage.setItem(key, data);
    } catch (e) {
      console.error('Error saving to LocalStorage', e);
    }
  }

  get(key: string): string {
    try {
      const value = localStorage.getItem(key);
      return value;
    } catch (e)  {
      console.error('Error getting value from LocalStorage', e);
      return null;
    }
  }
}

