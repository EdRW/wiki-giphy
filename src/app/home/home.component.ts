import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import { HistoryService } from '../history/history.service';
import { WikiSearchService } from '../wiki/wiki-search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchTerm: string;
  searchTermObservable: Observable<string>;

  constructor(
    private historyService: HistoryService,
    private wikiService: WikiSearchService ) {
      this.searchTermObservable = of(this.searchTerm);
    }

  ngOnInit() {
  }

  search(searchTerm: string) {
    this.searchTerm = searchTerm;
    console.log(`SERCH TERM: ${searchTerm}`);
    this.historyService.addSearchTerm(searchTerm);
  }
}
