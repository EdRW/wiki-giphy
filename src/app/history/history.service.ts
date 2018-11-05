import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';


@Injectable()
export class HistoryService {
  private searches: any[];

  constructor() {
    this.searches = [];
  }

  getSearchHistory() {
    return of(this.searches);
  }

  addSearchTerm(searchTerm: string) {
    this.searches.push({
      searchText: searchTerm,
      createdAt: (new Date()).toString()
    });

    console.log(this.searches);
  }
}
