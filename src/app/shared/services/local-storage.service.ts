import {Injectable} from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() {
  }

  getItem(key) {
    return localStorage.getItem(key);
  }

  setItem(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value));

  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
