import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navigation} from '../components/navigation/navigation';
import {Cursor} from '../design/cursor/cursor';
import {Start} from '../components/start/start';
import {Marquee} from '../components/marquee/marquee';
import {Services} from '../components/services/services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation, Cursor, Start, Marquee, Services],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('KS-Media-Solutions');
}
