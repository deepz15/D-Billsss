import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-billing-page',
  templateUrl: './billing-page.component.html',
  styleUrls: ['./billing-page.component.css']
})
export class BillingPageComponent implements OnInit {
  rocket: any = [];
  quant: any;
  tot: any;


  constructor(public appService: AppService) {
    const a = localStorage.getItem('Deepan');
    if (a) {
      this.rocket = JSON.parse(a);
    }
    const r = {
      qua: this.quant,
      total: this.tot
    };
    this.rocket.push(r);
    localStorage.setItem('Deepan', JSON.stringify(this.rocket));
  }
  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  change(r: any) {
    const p = r.pname;
    // tslint:disable-next-line:no-shadowed-variable
    const x = this.rocket.find((x: any) => x.pname === p); {
      r.amount = x?.amount;
      return r.amount;
    }
  }
  // tslint:disable-next-line:typedef
  addrow() {
    const rowd = {
      pname: '',
      amount: 0,
      qua: 1,
      tot: 0
    };
    this.rocket.push(rowd);
  }

  // tslint:disable-next-line:typedef
  getTotal() {
    let total = 0;
    this.rocket.forEach((r: { amount: number; qua: number; }) => {
      total += r.amount * r.qua;
    });
    return total;
  }
}

