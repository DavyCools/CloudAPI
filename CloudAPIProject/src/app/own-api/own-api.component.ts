import { Component, OnInit } from '@angular/core';
import { BrawlStarsService, Brawler } from '../Common/brawl-stars.service';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-own-api',
  templateUrl: './own-api.component.html',
  styleUrls: ['./own-api.component.css']
})
export class OwnAPIComponent implements OnInit {

  constructor(private apiService: BrawlStarsService) { }

  ngOnInit() {
  }
  brawlers: Brawler[];
  id: number = 1;
  idRemove: number = 0;
  health: number = 0;
  lijstRarity = ["Starting Brawler", "Trophy Road Reward", "Rare", "Super Rare", "Epic", "Mythic", "Legendary"];
  rarity: string = "Starting Brawler";
  lijstType = ["Fighter", "Dashing Assassin", "Heavyweight","Sharpshooter","Skirmisher","Stealthy Assassin","Support","Thrower","Toxic Assassin"];
  type: string = "Fighter";
  options: SelectItem[] = [{label:"Rarity",value:1},{label:"Type", value:2}]
  optionSelected: string;
  keuze: string;

  SearchFilter(event){
    this.keuze = "";
    if(event.option.label == "Rarity"){
      this.optionSelected = "1";
      this.SearchRarity();
    }
    else if(event.option.label == "Type"){
      this.optionSelected = "2";
      this.SearchType();
    }
  }
  SearchRarity(){
    if(this.optionSelected == "1"){
      this.keuze = `rarity=${this.rarity}`;
      this.GetBrawlersFromAPI();
    }
  }
  SearchType(){
    console.log(this.optionSelected);
    if(this.optionSelected == "2"){
      this.keuze = `type=${this.type}`;
      this.GetBrawlersFromAPI();
    }
  }
  GetBrawlersFromAPI(){
    this.apiService.GetBrawlers(this.keuze).subscribe( uitkomst =>{
      if(uitkomst){
        this.brawlers = uitkomst;
        console.log(this.keuze);
      }
    })
  }
  brawlerAdd: Brawler = {name: "",rarity:"",type:"",attack:"",super:"",starPower:"",picture:"",health:null};
  errorAdd = [];
  successAdd = [];
  AddBrawlerFromAPI(){
    this.errorAdd = [];
    this.successAdd = [];
    if(this.brawlerAdd.name && this.brawlerAdd.rarity && this.brawlerAdd.type && this.brawlerAdd.picture && this.brawlerAdd.health){
      this.apiService.AddBrawler(this.brawlerAdd).subscribe(data =>{
        if(data){
          this.successAdd.push({severity:'success',summary:'Success Message', detail:`Brawler successfully added with id = ${data.id}`});
        }
      })
    }
    else{
      this.errorAdd.push({severity:'error',summary:'Error Message', detail:`Name/Rarity/Type/Picture/Health can't be left empty!`});
    }
  }
  errorRemove = [];
  successRemove = [];
  RemoveBrawlerFromAPI(){
    this.errorRemove = [];
    this.successRemove = [];
    this.apiService.DeleteBrawler(this.idRemove).subscribe( 
        (val) => {
          this.successRemove.push({severity:'success',summary:'Success Message', detail:`Brawler successfully removed with id = ${this.idRemove}`});
          //console.log("DELETE call successful value returned in body", val);
        },
        response => {
          this.errorRemove.push({severity:'error',summary:'Error Message', detail:`Couldn't find brawler with id = ${this.idRemove} or the API isn't responding.`});
          //console.log("DELETE call in error", response);
        },
        () => {
          //console.log("The DELETE observable is now completed.");
    });
  }
}