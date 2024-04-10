import { Component, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnDestroy {
  isRunning: boolean = false;
  elapsedTime: number = 0;
  private timerSubscription: Subscription = new Subscription();

  constructor() {}

  start() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.timerSubscription = interval(1000).subscribe(() => {
        this.elapsedTime++;
      });
    }
  }

  stop() {
    if (this.isRunning) {
      this.isRunning = false;
      this.timerSubscription.unsubscribe();
    }
  }

  reset() {
    this.stop();
    this.elapsedTime = 0;
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }
}
