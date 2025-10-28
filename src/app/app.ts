import { Component, signal } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet, RouterModule } from '@angular/router';
import { Navbar } from './shared/components/navbar/navbar';
import { Home } from './features/home/home';

@Component({
  selector: 'app-root',
  imports: [Home, RouterModule, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Bookify');
}
