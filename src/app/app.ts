import {AfterViewInit, Component, ElementRef, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit {
  protected readonly title = signal('KS-Media-Solutions');

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    const grids = this.el.nativeElement.querySelectorAll('.services-grid, .process-steps');

    grids.forEach((grid: HTMLElement) => {
      const revealElements = grid.querySelectorAll<HTMLElement>('.reveal');
      revealElements.forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.12}s`;
      });
    });
  }
}
