import { Component, AfterViewInit, HostListener, ElementRef, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  isBrowser: boolean;
  constructor(private el: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isBrowser) {
      this.checkFadeInElements();
    }
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      this.checkFadeInElements();
    }
  }

  private checkFadeInElements() {
    if (!this.isBrowser) return;
    const elements = this.el.nativeElement.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;
    elements.forEach((el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowHeight - 50) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible');
      }
    });
  }
}
