import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculator } from './calculator/calculator';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Calculator],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lab1-temp-converter');
}
