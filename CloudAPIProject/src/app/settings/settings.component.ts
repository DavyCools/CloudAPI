import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Common/movie.service';
import { BrawlStarsService } from '../Common/brawl-stars.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private apiService: MovieService, private apiServiceBrawlStars: BrawlStarsService) { }

  ngOnInit() {
  }
  lijstKeuzens = [10,20,30,40,50,60,70,80,90,100];
  lijstPaginanummer = [5,6,7,8,9,10,15,20,25];
  lijstsoryBy = ["id","name","health","rarity"];
  lijstRichting = ["asc","desc"];
}
