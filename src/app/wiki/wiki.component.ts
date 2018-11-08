import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { WikiSearchService } from './wiki-search.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit, OnChanges {
  @Input() searchTerm: string;
  wikiResults: any[];
  private BASE_WIKI_URL = 'https://en.wikipedia.org/wiki/';

  constructor(private wikiService: WikiSearchService) {
    this.wikiResults = [];
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.searchTerm) {
      this.wikiResults = [];
      this.wikiService.search(this.searchTerm).subscribe( (response: any) => {
        const searchResults: any[] = response['query']['search'];
        searchResults.forEach( (result: any) => {
          const pageName = result['title'].replace(/\s/g, '_');
          this.wikiResults.push({
            title: result['title'],
            url: `${this.BASE_WIKI_URL}${pageName}`
          });
        });
        console.log('WIKI RESULTS:');
        console.log(response);
        console.log('-------------');
      });
    }
  }
}
