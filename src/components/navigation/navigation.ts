import {AfterViewInit, Component, ElementRef, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation implements AfterViewInit, OnDestroy {
  private observer!: IntersectionObserver;
  private scrollHandler!: () => void;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.initNavbarScroll();
    this.initRevealObserver();
    this.initStaggeredAnimations();
  }

  initNavbarScroll(): void {
    const nav = document.getElementById('nav');
    if (!nav) return;

    this.scrollHandler = () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    };

    window.addEventListener('scroll', this.scrollHandler);
  }

  initRevealObserver(): void {
    const reveals = document.querySelectorAll<HTMLElement>('.reveal');

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, 100);
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(el => this.observer.observe(el));
  }

  initStaggeredAnimations(): void {
    const grids = document.querySelectorAll<HTMLElement>('.services-grid, .process-steps');

    grids.forEach(grid => {
      const children = grid.querySelectorAll<HTMLElement>('.reveal');
      children.forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.12}s`;
      });
    });
  }

  ngOnDestroy(): void {
    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
    }

    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
