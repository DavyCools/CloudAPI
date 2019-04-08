import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  film: Movie;
  gekozenFilm: MovieInfo;
  randomFilm: MovieInfo;
  constructor(private http: HttpClient) { }

  public GetApi(naam:String){
    //DEFAULT KEY
    //return this.http.get<Movie>(`http://www.omdbapi.com/?apikey=39878d5a&page=1&s=${naam}`)


    //return this.http.get<Movie>("http://www.omdbapi.com/?apikey=39878d5a&page=1&s=Batman")

    //BACKUP KEY IF LIMIT REACHED
    return this.http.get<Movie>(`http://www.omdbapi.com/?apikey=8193da63&page=1&s=${naam}`)
  }
  public GetMovieByID(id:String){
    //DEFAULT KEY
    //return this.http.get<MovieInfo>(`http://www.omdbapi.com/?apikey=39878d5a&i=${id}`)


    //return this.http.get<MovieInfo>(`http://www.omdbapi.com/?apikey=39878d5a&page=1&i=0372784`)
    //Met de lange plot (descriptie) erbij:
    //return this.http.get<MovieInfo>(`http://www.omdbapi.com/?apikey=39878d5a&i=${id}&plot=full`)

    //BACKUP KEY IF LIMIT REACHED
    return this.http.get<MovieInfo>(`http://www.omdbapi.com/?apikey=8193da63&i=${id}`)
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




export interface Rating {
  Source: string;
  Value: string;
}

export interface MovieInfo {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
  Error: string;
}
