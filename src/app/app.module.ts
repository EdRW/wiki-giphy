import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';
import { WikiComponent } from './wiki/wiki.component';
import { GiphyComponent } from './giphy/giphy.component';
import { AppRoutingModule } from './app-routing.module';
import { WikiSearchService } from './wiki/wiki-search.service';
import { GiphySearchService } from './giphy/giphy-search.service';
import { HistoryService } from './history/history.service';
import { HomeComponent } from './home/home.component';
import { LoginService } from './login/login.service';

import { AuthGuard } from './login/auth.guard';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { firebaseConfig } from '../environments/environment';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    WikiComponent,
    GiphyComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [
    WikiSearchService,
    GiphySearchService,
    HistoryService,
    LoginService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
