import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../shared/components/navbar/navbar';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [CommonModule, Navbar, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
