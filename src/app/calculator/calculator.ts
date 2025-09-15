import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
  standalone: true
})
export class Calculator {
   result: number | string = 0;

  calculate(first: string, second: string, op: string) {
  const a = parseFloat(first);
  const b = parseFloat(second);
  switch (op) {
    case '+':
      this.result = a + b;
      break;
    case '-':
      this.result = a - b;
      break;
    case '*':
      this.result = a * b;
      break;
    case '/':
      this.result = b !== 0 ? a / b : 'Erreur: division par zéro';
      break;
    default:
      this.result = 'Opérateur inconnu';
  }
}
}
