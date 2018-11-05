import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history/history.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchTerm: string;

  constructor( private historyService: HistoryService ) { }

  ngOnInit() {
  }

  search(searchTerm: string) {
    console.log(`SERCH TERM: ${searchTerm}`);
    this.historyService.addSearchTerm(searchTerm);
  }
}
