import { Injectable } from '@angular/core';
import { giphyKey } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GiphySearchService {

  private BASE_API_URL = 'https://api.giphy.com/v1/gifs/search?limit=5&offset=0&rating=G&lang=en';

  constructor( private http: HttpClient ) { }

  search( searchTerm: string): Observable<any> {
    const queryUrl = `${this.BASE_API_URL}&api_key=${giphyKey}&q=${searchTerm}`;
    console.log(`GIPHY REQUEST MADE TO URL: ${queryUrl}`);
    return this.http.get(queryUrl);
  }

}
