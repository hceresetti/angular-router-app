import { Injectable } from '@angular/core';

@Injectable()
export class TimerService {
  private timer: any;
  private counter: number;
  constructor() {}

  start() {
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.timer++;
      }, 1000);
    }
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.counter = null;
    }
  }

  getCounter() {
    return this.counter;
  }
}
