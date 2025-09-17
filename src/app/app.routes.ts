import { Routes } from '@angular/router';

//  ** Import Components **
import { Home } from './pages/home/home';
import { GalleryPage } from './pages/gallery-page/gallery-page';
import { ContactPage } from './pages/contact-page/contact-page';
import { NewsPage } from './pages/news-page/news-page';
import { ProductsPage } from './pages/products-page/products-page';
import { AboutPage } from './pages/about-page/about-page';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },       // მთავარი გვერდი
  { path: 'gallery', component: GalleryPage }, // Gallery page
  { path: 'contact', component: ContactPage}, // Contact page
  { path: 'news', component: NewsPage },
  { path: 'products', component: ProductsPage },
  { path: 'about', component: AboutPage },
];
