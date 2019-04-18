import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Common/movie.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private apiService: MovieService) { }

  ngOnInit() {
  }
  keuzeAantalFilms = 10;
  lijstKeuzens = [10,20,30,40,50,60,70,80,90,100,150,200,250,500,1000];
}
