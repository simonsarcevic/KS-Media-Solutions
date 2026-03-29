import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cursor',
  imports: [],
  templateUrl: './cursor.html',
  styleUrl: './cursor.css',
})
export class Cursor implements AfterViewInit {
  @ViewChild('cursor', { static: true }) cursorRef!: ElementRef<HTMLDivElement>;
  @ViewChild('ring', { static: true }) ringRef!: ElementRef<HTMLDivElement>;

  mx: number = 0;
  my: number = 0;
  rx: number = 0;
  ry: number = 0;

  ngAfterViewInit(): void {
    document.addEventListener('mousemove', this.onMouseMove.bind(this));
    this.animCursor();
  }

  onMouseMove(e: MouseEvent): void {
    this.mx = e.clientX;
    this.my = e.clientY;
  }

  animCursor(): void {
    const cursor = this.cursorRef.nativeElement;
    const ring = this.ringRef.nativeElement;

    cursor.style.left = `${this.mx}px`;
    cursor.style.top = `${this.my}px`;

    this.rx += (this.mx - this.rx) * 0.12;
    this.ry += (this.my - this.ry) * 0.12;

    ring.style.left = `${this.rx}px`;
    ring.style.top = `${this.ry}px`;

    requestAnimationFrame(() => this.animCursor());
  }
}
