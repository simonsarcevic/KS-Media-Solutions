import { Component } from '@angular/core';
import {Cursor} from '../../design/cursor/cursor';
import {Footer} from '../../components/footer/footer';

@Component({
  selector: 'app-privacy-policy',
  imports: [Cursor, Footer],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.css',
})
export class PrivacyPolicy {}
