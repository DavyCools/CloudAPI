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
    if(this.apiService.gekozenFilm){
      this.text = this.apiService.gekozenFilm.Title;
      if(this.apiService.gekozenFilm.Ratings[0])
        this.rating1 = Number(this.apiService.gekozenFilm.Ratings[0].Value.substring(0,3))/2;
      if(this.apiService.gekozenFilm.Ratings[1])
        this.rating2 = Number(this.apiService.gekozenFilm.Ratings[1].Value.substring(0,2))/20;
      if(this.apiService.gekozenFilm.Ratings[2])
        this.rating3 = Number(this.apiService.gekozenFilm.Ratings[2].Value.substring(0,2))/20;
    }
  }

  text: string = "";
  results: string[];
  data: Movie;
  error: string;
  totalresults: number;
  search(event) {
      this.apiService.GetApi(event.query).subscribe( uitkomst =>{
        this.data = uitkomst;
        this.results = [];
        this.error = "";
        this.totalresults = 0;
        //console.log(this.data);
        if(this.data.Response == "True"){
          this.totalresults = Number(this.data.totalResults);
          for(var i=0;i<this.data.Search.length;i++) {
            this.results.push(this.data.Search[i].Title);
            //console.log(this.data.Search[i].Title);
          }
          
          if(this.totalresults > 10 && this.apiService.keuzeAantalFilms > 10){
            for(var j=2;j<=this.totalresults/10;j++){
              this.apiService.GetApi(event.query,j).subscribe( uitkomst =>{
                this.data = uitkomst;
                if(this.data.Response == "True"){
                  for(var i=0;i<this.data.Search.length;i++) {
                    this.results.push(this.data.Search[i].Title);
                  }
                }
              })
              if(j == this.apiService.keuzeAantalFilms/10) j = this.totalresults + 1;
            }
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
      //console.log(this.apiService.film)
      if(this.apiService.film.Response == "False"){
        this.error=this.apiService.film.Error;
      }
      else{
        this.apiService.GetMovieByID(this.apiService.film.Search[0].imdbID).subscribe( uitkomst =>{
          this.apiService.gekozenFilm = uitkomst;
          if(!this.apiService.gekozenFilm.Poster.includes("https")){
            this.apiService.gekozenFilm.Poster = "assets/img/NoImageAvailable.png"
          }  
          //console.log(this.apiService.gekozenFilm);
          this.rating1 = null;
          this.rating2 = null;
          this.rating3 = null;
          if(this.apiService.gekozenFilm.Ratings[0])
            this.rating1 = Number(this.apiService.gekozenFilm.Ratings[0].Value.substring(0,3))/2;
          if(this.apiService.gekozenFilm.Ratings[1])
            this.rating2 = Number(this.apiService.gekozenFilm.Ratings[1].Value.substring(0,2))/20;
          if(this.apiService.gekozenFilm.Ratings[2])
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
