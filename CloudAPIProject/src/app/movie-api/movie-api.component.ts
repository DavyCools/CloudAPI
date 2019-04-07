import { Component, OnInit } from '@angular/core';
import { MovieService, Movie } from '../Common/movie.service';
import { delay } from 'q';

@Component({
  selector: 'app-movie-api',
  templateUrl: './movie-api.component.html',
  styleUrls: ['./movie-api.component.css']
})
export class MovieAPIComponent implements OnInit {

  constructor(private apiService: MovieService) { }

  ngOnInit() {
    this.text = "test"
  }

  text: string;
  results: string[];
  data: Movie;
  error: string;
  test: Movie;
  search(event) {
      this.apiService.GetApi(event.query).subscribe( uitkomst =>{
        this.data = uitkomst;
        this.results = [];
        this.error = "";
        //console.log(this.data);
        if(this.data.Response == "True"){
          for(var i=0;i<this.data.Search.length;i++) {
            this.results.push(this.data.Search[i].Title);
            //console.log(this.data.Search[i].Title);
          }
        }
        else{
            this.error=this.data.Error;
        }
      })
  }
  Choice(event){
    console.log(event);
    this.apiService.GetApi(String(event)).subscribe( uitkomst =>{
      this.test = uitkomst;  
    })
    console.log(this.test);
  } 
} 
