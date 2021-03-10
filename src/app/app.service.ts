import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() {
    const a = localStorage.getItem('Deepan');
    if (a) {
      this.rocket = JSON.parse(a);
    }
    setInterval(() => {
      localStorage.setItem('Deepan', JSON.stringify(this.rocket));
    }, 100);
  }
  rocket: Array<any> = [];
}

