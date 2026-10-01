import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from './data/portfolio.data';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly portfolio = PORTFOLIO_DATA;
  readonly currentYear = new Date().getFullYear();
}