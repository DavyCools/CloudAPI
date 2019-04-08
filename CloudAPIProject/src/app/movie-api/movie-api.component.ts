import { Component, OnInit } from '@angular/core';
import { MovieService, Movie } from '../Common/movie.service';
import * as _ from "lodash";

@Component({
  selector: 'app-movie-api',
  templateUrl: './movie-api.component.html',
  styleUrls: ['./movie-api.component.css']
})
export class MovieAPIComponent implements OnInit {

  constructor(private apiService: MovieService) { }

  ngOnInit() {
    if(this.apiService.film)
      this.text = this.apiService.film.Search[0].Title;
  }

  text: string = "";
  results: string[];
  data: Movie;
  error: string;
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
  rating1:number;
  rating2:number;
  rating3:number;
  Choice(event){
    //console.log(event);
    this.apiService.GetApi(String(event)).subscribe( uitkomst =>{
      this.apiService.film = uitkomst;  
      console.log(this.apiService.film)
      if(this.apiService.film.Response == "False"){
        this.error=this.apiService.film.Error;
      }
      else{
        this.apiService.GetMovieByID(this.apiService.film.Search[0].imdbID).subscribe( uitkomst =>{
          this.apiService.gekozenFilm = uitkomst;
          if(!this.apiService.gekozenFilm.Poster.includes("https")){
            this.apiService.gekozenFilm.Poster = "assets/img/NoImageAvailable.png"
          }  
          console.log(this.apiService.gekozenFilm);
          this.rating1 = Number(this.apiService.gekozenFilm.Ratings[0].Value.substring(0,3))/2;
          this.rating2 = Number(this.apiService.gekozenFilm.Ratings[1].Value.substring(0,2))/20;
          this.rating3 = Number(this.apiService.gekozenFilm.Ratings[2].Value.substring(0,2))/20;
        })
      }
    })
  } 

  min:number = 1;
  max:number = 2000000;
  randomwaarde:String;
  RandomMovie(){
    this.randomwaarde = _.random(this.min,this.max,false);
    var s = this.randomwaarde + "";
    while (s.length < 7) s = "0" + s;
    this.randomwaarde = s;
    //console.log(this.randomwaarde);
    this.apiService.GetMovieByID("tt"+this.randomwaarde).subscribe( uitkomst =>{
      if(uitkomst.Response == "True"){
        this.apiService.randomFilm = uitkomst;
        if(!this.apiService.randomFilm.Poster.includes("https")){
          this.apiService.randomFilm.Poster = "assets/img/NoImageAvailable.png"
        }  
        //console.log(this.apiService.randomFilm);
      }
    })
  }
} 
