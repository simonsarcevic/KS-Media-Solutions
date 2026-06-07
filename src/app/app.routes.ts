import { Routes } from '@angular/router';
import {MainSite} from '../sites/main-site/main-site';
import {Imprint} from '../sites/imprint/imprint';

export const routes: Routes = [
  {path: '', component: MainSite},
  {path: 'imprint', component: Imprint}
];
