import { Component } from '@angular/core';
import {Footer} from '../../components/footer/footer';
import {Cursor} from '../../design/cursor/cursor';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-imprint',
  imports: [Footer, Cursor, RouterLink],
  templateUrl: './imprint.html',
  styleUrl: './imprint.css',
})
export class Imprint {}
