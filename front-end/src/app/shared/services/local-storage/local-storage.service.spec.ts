import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from './local-storage.service';

describe('PersistanceService', () => {
  let service: LocalStorageService;
  let store = {};

  beforeEach(() => {
    TestBed.configureTestingModule({});
    const mockLocalStorage = {
      getItem: (key: string): string => key in store ? store[key] : null,
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };

    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear').and.callFake(mockLocalStorage.clear);

    service = TestBed.inject(LocalStorageService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set a value in localStorage', () => {
      service.set('key', 'someValue');
      expect(localStorage.getItem('key')).toEqual('someValue');
  });

  it('should return stored value from localStorage', () => {
      localStorage.setItem('key2', 'anotherValue');
      expect(service.get('key2')).toEqual('anotherValue');
  });
});
