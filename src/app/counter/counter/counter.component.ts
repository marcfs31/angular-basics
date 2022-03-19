import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h1>{{title}}</h1>
    <button (click)="number = number + 1">+ 1</button>
    <span>{{number}}</span>
    <button (click)="number = number - 1">- 1</button>

    <button (click)="add()">+ 1</button>
    <span>{{number}}</span>
    <button (click)="substract()">- 1</button>

    <button (click)="accumulate(+1)">+ 1</button>
    <span>{{number}}</span>
    <button (click)="accumulate(-1)">- 1</button>

    <button (click)="accumulate(base)">{{base}}</button>
    <span>{{number}}</span>
    <button (click)="accumulate(-base)">{{-base}}</button>
    `
})
export class CounterComponent {
  title: string = 'Counter app';
  number: number = 10;
  base: number = 5;

  add() {
    this.number += 1;
  }

  substract() {
    this.number -= 1;
  }

  accumulate(number: number) {
    this.number += number;
  }
}