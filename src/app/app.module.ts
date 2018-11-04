import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';
import { WikiComponent } from './wiki/wiki.component';
import { GiphyComponent } from './giphy/giphy.component';
import { AppRoutingModule } from './app-routing.module';
import { WikiSearchService } from './wiki/wiki-search.service';
import { GiphySearchService } from './giphy/giphy-search.service';
import { HistoryService } from './history/history.service';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    WikiComponent,
    GiphyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [WikiSearchService, GiphySearchService, HistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
