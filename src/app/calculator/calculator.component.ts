import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  num1: number = 0
  num2: number = 0;
  operator: string = 'add';
  result: number | null = null;

  calculate() {
    if (this.operator === 'add') {
      this.result = this.num1 + this.num2;
    } else if (this.operator === 'subtract') {
      this.result = this.num1 - this.num2;
    } else if (this.operator === 'multiply') {
      this.result = this.num1 * this.num2;
    } else if (this.operator === 'divide') {
      if (this.num2 !== 0) {
        this.result = this.num1 / this.num2;
      } else {
        this.result = null; // Division by zero, result is null
      }
    }
  }
}
