import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-entry-page',
  templateUrl: './entry-page.component.html',
  styleUrls: ['./entry-page.component.css']
})
export class EntryPageComponent implements OnInit {

  constructor() {
    const a = localStorage.getItem('Deepan');
    if (a) {
      this.rocket = JSON.parse(a);
    }
  }

  prName: any;
  prAmount!: number;
  quants: any = [0];
  total: any;
  rocket: any = [];
  tot!: number;

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  del(i: any) {
    this.rocket.splice(i, 1);
  }
  // tslint:disable-next-line:typedef
  add() {
    const r = {
      pname: this.prName,
      amount: this.prAmount
    };
    this.rocket.push(r);
    localStorage.setItem('Deepan', JSON.stringify(this.rocket));
  }
}
