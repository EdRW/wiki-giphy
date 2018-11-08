import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import { AngularFireDatabase } from '@angular/fire/database';
import { LoginService } from '../login/login.service';


@Injectable()
export class HistoryService {
  lastSearchTerm: string;
  searchHistoryRef: any;

  constructor(
    private loginService: LoginService,
    private db: AngularFireDatabase
  ) {
    this.lastSearchTerm = '';
    this.searchHistoryRef = this.db.list(`currentSession/${this.loginService.userUid}/searches`);
  }

  getSearchHistory(): Observable<any[]> {
    return this.searchHistoryRef.valueChanges();
  }

  addSearchTerm(searchTerm: string) {
    this.lastSearchTerm = searchTerm;
    this.searchHistoryRef.push({
      searchText: searchTerm,
      createdAt: (new Date()).toString()
    });

  }
}
