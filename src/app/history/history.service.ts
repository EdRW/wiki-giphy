import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';


@Injectable()
export class HistoryService {
  private searches: any[];
  lastSearchTerm: string;

  constructor() {
    this.searches = [];
    this.lastSearchTerm = '';
  }

  getSearchHistory(): Observable<any[]> {
    return of(this.searches);
  }

  addSearchTerm(searchTerm: string) {
    this.lastSearchTerm = searchTerm;
    this.searches.push({
      searchText: searchTerm,
      createdAt: (new Date()).toString()
    });

    console.log(this.searches);
  }
}
