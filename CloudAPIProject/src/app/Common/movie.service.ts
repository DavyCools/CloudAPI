import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  film: Movie;
  constructor(private http: HttpClient) { }

  public GetApi(naam:String){
    return this.http.get<Movie>(`http://www.omdbapi.com/?apikey=39878d5a&page=1&s=${naam}`)
    //return this.http.get<Movie>("http://www.omdbapi.com/?apikey=39878d5a&page=1&s=Batman")
  }

}

export interface Search {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface Movie {
  Search: Search[];
  totalResults: string;
  Response: string;
  Error: string;
}
