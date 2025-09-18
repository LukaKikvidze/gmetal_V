import { Component, HostListener } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  isMenuActive = false;

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  // HostListener ყურადღებას აქცევს clicks body-ზე
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    // თუ არ დააჭირა menu-ს ან toggle-ს, დახურე menu
    if (!target.closest('.menu') && !target.closest('.menu-toggle')) {
      this.isMenuActive = false;
    }
  }
}
