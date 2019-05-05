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
      this.apiService.pageNumber = 0;
      this.keuze = `rarity=${this.rarity}`;
      this.GetBrawlersFromAPI();
    }
  }
  SearchType(){
    if(this.optionSelected == "2"){
      this.apiService.pageNumber = 0;
      this.keuze = `type=${this.type}`;
      this.GetBrawlersFromAPI();
    }
  }
  GetBrawlersFromAPI(){
    this.apiService.GetBrawlers(this.keuze).subscribe( uitkomst =>{
      if(uitkomst){
        this.apiService.brawlers = uitkomst;
      }
    })
  }
  PreviousPage(){
    if(this.apiService.pageNumber > 0){
      this.apiService.pageNumber--;
      this.GetBrawlersFromAPI();
    }
  }
  NextPage(){
    if(this.apiService.brawlers[this.apiService.pageSize-1]){
      this.apiService.pageNumber++;
      this.GetBrawlersFromAPI();
    }
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
          this.apiService.brawler = uitkomst[0];
          this.successGet.push({severity:'success',summary:'Success Message', detail:`Brawler successfully found with id = ${this.apiService.brawler.id}`});
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
  GetBrawlerFromAPI(){
    this.errorGet = [];
    this.successGet = [];
    this.apiService.GetBrawler(this.id).subscribe(
      (val) => {
        this.successGet.push({severity:'success',summary:'Success Message', detail:`Brawler successfully found with id = ${val.id}`});
        this.apiService.brawler = val;
      },
      response => {
        this.errorGet.push({severity:'error',summary:'Error Message', detail:`Couldn't find brawler or the API isn't responding.`});
      },
      () => {
        //console.log("The GET observable is now completed.");
    });
  }
  errorAdd = [];
  successAdd = [];
  AddBrawlerFromAPI(){
    this.errorAdd = [];
    this.successAdd = [];
    if(this.apiService.brawlerAdd.name && this.apiService.brawlerAdd.rarity && this.apiService.brawlerAdd.type && this.apiService.brawlerAdd.picture && this.apiService.brawlerAdd.health){
      this.apiService.AddBrawler().subscribe(data =>{
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