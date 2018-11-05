import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WikiSearchService {
  private BASE_API_URL = 'https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch=';

  constructor( private http: HttpClient) { }

  search( searchTerm: string ): Observable<any> {
    const queryUrl = `${this.BASE_API_URL}${searchTerm}`;
    console.log(`REQUEST MADE TO URL: ${queryUrl}`);
    return this.http.get(queryUrl);
  }

}
