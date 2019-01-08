
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { IdeasComponent } from './components/ideas/ideas.component';
import { IssuesComponent } from './components/issues/issues.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HistoryComponent } from './components/history/history.component';
import { PollsComponent } from './components/polls/polls.component';
import { ContentComponent } from './components/news/content/content.component';
import { GalleryComponent } from './components/news/gallery/gallery.component';
import { VideosComponent } from './components/news/videos/videos.component';
import { ShopComponent } from './components/shop/shop.component';
import { TabModule } from 'angular-tabs-component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HelloComponent } from './components/polls/hello/hello.component';
import { HistorycontentComponent } from './components/history/historycontent/historycontent.component';
import { HistorygalleryComponent } from './components/history/historygallery/historygallery.component';
import { HistoryvideosComponent } from './components/history/historyvideos/historyvideos.component';
import { routing } from './app.routes';
@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    IdeasComponent,
    IssuesComponent,
    NavigationComponent,
    HistoryComponent,
    PollsComponent,
    ContentComponent,
    GalleryComponent,
    VideosComponent,
    ShopComponent,
    LoginComponent,
    HelloComponent,
    HistorycontentComponent,
    HistorygalleryComponent,
    HistoryvideosComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    TabModule,
    ReactiveFormsModule,
    FormsModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
