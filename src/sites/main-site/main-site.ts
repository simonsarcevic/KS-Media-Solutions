import { Component } from '@angular/core';
import {About} from "../../components/about/about";
import {Contact} from "../../components/contact/contact";
import {Cursor} from "../../design/cursor/cursor";
import {Footer} from "../../components/footer/footer";
import {Marquee} from "../../components/marquee/marquee";
import {Navigation} from "../../components/navigation/navigation";
import {Process} from "../../components/process/process";
import {Services} from "../../components/services/services";
import {Start} from "../../components/start/start";

@Component({
  selector: 'app-main-site',
  imports: [About, Contact, Cursor, Footer, Marquee, Navigation, Process, Services, Start],
  templateUrl: './main-site.html',
  styleUrl: './main-site.css',
})
export class MainSite {}
