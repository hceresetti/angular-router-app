import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mult',
  standalone: true,
  templateUrl: './mult.component.html',
  styleUrls: ['./mult.component.css'],
  imports: [CommonModule, FormsModule],
})
export class MultComponent implements OnInit {
  n: number = 7;

  constructor() {}

  ngOnInit() {}

  getNumbers() {
    let arr = [];
    for (let i = 1; i <= this.n; i++) {
      arr.push(Math.trunc(100 * Math.random()));
    }
    return arr;
  }

  multiply() {
    let arr = [];
    for (let i = 1; i <= 10; i++) {
      arr.push(this.n * i);
    }
    return arr;
  }
}
