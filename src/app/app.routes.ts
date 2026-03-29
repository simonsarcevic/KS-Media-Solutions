import { Routes } from '@angular/router';
import {Imprint} from '../sites/imprint/imprint';
import {PrivacyPolicy} from '../sites/privacy-policy/privacy-policy';
import {MainSite} from '../sites/main-site/main-site';

export const routes: Routes = [
  {path: '', component: MainSite},
  {path: 'imprint', component: Imprint},
  {path: 'privacy-policy', component: PrivacyPolicy}
];
