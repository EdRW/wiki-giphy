import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { GiphySearchService } from './giphy-search.service';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit, OnChanges {
  @Input() searchTerm: string;
  giphyResults: any[];

  constructor( private giphyService: GiphySearchService ) {
    this.giphyResults = [];
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.searchTerm) {
      this.giphyResults = [];
      this.giphyService.search(this.searchTerm).subscribe( (response: any) => {
        const searchResults: any[] = response['data'];
        searchResults.forEach( (result: any) => {
          const gifUrl = result['images']['original']['url'];
          this.giphyResults.push(gifUrl);
        });
        console.log(`GIPHY RESULTS: ${response}`);
      });
    }
  }
}
