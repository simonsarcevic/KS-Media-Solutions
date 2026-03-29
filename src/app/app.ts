import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navigation} from '../components/navigation/navigation';
import {Cursor} from '../design/cursor/cursor';
import {Start} from '../components/start/start';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation, Cursor, Start],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('KS-Media-Solutions');
}
