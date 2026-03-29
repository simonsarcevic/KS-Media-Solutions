import {AfterViewInit, Component, ElementRef, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navigation} from '../components/navigation/navigation';
import {Cursor} from '../design/cursor/cursor';
import {Start} from '../components/start/start';
import {Marquee} from '../components/marquee/marquee';
import {Services} from '../components/services/services';
import {About} from '../components/about/about';
import {Process} from '../components/process/process';
import {Contact} from '../components/contact/contact';
import {Footer} from '../components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navigation,
    Cursor,
    Start,
    Marquee,
    Services,
    About,
    Process,
    Contact,
    Footer,
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
