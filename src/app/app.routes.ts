import { Component } from '@angular/core';
// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router'; 
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './components/news/news.component';
import { IdeasComponent } from './components/ideas/ideas.component';
import { IssuesComponent } from './components/issues/issues.component';
import { HistoryComponent } from './components/history/history.component';
import { PollsComponent } from './components/polls/polls.component';
import { GalleryComponent } from './components/news/gallery/gallery.component';
import { ContentComponent } from './components/news/content/content.component';
import { ShopComponent } from './components/shop/shop.component';
import { LoginComponent } from './components/login/login.component';
// Route Configuration
export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'News', component: NewsComponent },
  { path: 'Ideas', component: IdeasComponent },
  { path: 'Issues', component: IssuesComponent },
  { path: 'History', component: HistoryComponent },
  { path: 'Polls', component: PollsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'content', component: ContentComponent },
  { path: 'Shop', component: ShopComponent },
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true}
  );
