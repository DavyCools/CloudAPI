import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-api',
  templateUrl: './movie-api.component.html',
  styleUrls: ['./movie-api.component.css']
})
export class MovieAPIComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.text = "test"
  }

  text: string;
  results: string[];
  search(event) {
      // this.mylookupservice.getResults(event.query).then(data => {
      //     this.results = data;
      // });
  }
}
