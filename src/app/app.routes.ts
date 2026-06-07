import { Routes } from '@angular/router';
import {MainSite} from '../sites/main-site/main-site';
import {PrivacyPolicy} from '../sites/privacy-policy/privacy-policy';
import {Imprint} from '../sites/imprint/imprint';

export const routes: Routes = [
  {path: '', component: MainSite},
  {path: 'privacy-policy', component: PrivacyPolicy},
  {path: 'imprint', component: Imprint}
];
