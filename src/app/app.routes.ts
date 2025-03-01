import {ExtraOptions, RouterFeatures, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {path: '', component: HomeComponent, title: 'Home'},
  {path: 'about', component: AboutComponent, title: 'About'},
  {path: 'contact', component: ContactComponent, title: 'Contact Us'},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];
