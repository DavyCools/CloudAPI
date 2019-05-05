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
    if(this.optionSelected == "2"){
      this.keuze = `type=${this.type}`;
      this.GetBrawlersFromAPI();
    }
  }
  GetBrawlersFromAPI(){
    this.apiService.GetBrawlers(this.keuze).subscribe( uitkomst =>{
      if(uitkomst){
        this.brawlers = uitkomst;
      }
    })
  }
  name:string = "";
  health:number = null;
  GetBrawlerWithoutIDFromAPI(id:number){
    this.errorGet = [];
    this.successGet = [];;
    if((this.name && id == 1) || (this.health && id == 2)){
      if(id == 1) this.name=`name=${this.name}`;
      else if (id == 2) this.name=`noHealth=${this.health}`;
      this.apiService.GetBrawlers(this.name).subscribe( uitkomst =>{
        if(uitkomst && uitkomst[0]){
          this.brawler = uitkomst[0];
          this.successGet.push({severity:'success',summary:'Success Message', detail:`Brawler successfully found with id = ${this.brawler.id}`});
        }
        else{
          this.errorGet.push({severity:'error',summary:'Error Message', detail:`Couldn't find brawler or the API isn't responding.`});
        }
      })
      if(id = 1) this.name = "";
      else if (id = 2) this.health = null;
    }
    else this.errorGet.push({severity:'error',summary:'Error Message', detail:`Name/Health can't be left empty!`});
  }
  errorGet = [];
  successGet = [];
  brawler: Brawler;
  GetBrawlerFromAPI(){
    this.errorGet = [];
    this.successGet = [];
    this.apiService.GetBrawler(this.id).subscribe(
      (val) => {
        this.successGet.push({severity:'success',summary:'Success Message', detail:`Brawler successfully found with id = ${val.id}`});
        this.brawler = val;
      },
      response => {
        this.errorGet.push({severity:'error',summary:'Error Message', detail:`Couldn't find brawler or the API isn't responding.`});
      },
      () => {
        //console.log("The GET observable is now completed.");
    });
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
        },
        response => {
          this.errorRemove.push({severity:'error',summary:'Error Message', detail:`Couldn't find brawler with id = ${this.idRemove} or the API isn't responding.`});
        },
        () => {
          //console.log("The DELETE observable is now completed.");
    });
  }
}