import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";

import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  isMenuActive = false;

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
    console.log('Menu state:', this.isMenuActive); // Debug-სთვის
  }
}
