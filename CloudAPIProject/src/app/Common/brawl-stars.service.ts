import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrawlStarsService {

  keuzePageSize: number = 5;
  keuzeSoryBy: string = "id";
  keuzeRichting: string = "asc";
  brawler: Brawler;
  brawlers: Brawler[];
  brawlerAdd: Brawler = {name: "",rarity:"",type:"",attack:"",super:"",starPower:"",picture:"",health:null};

  constructor(private http: HttpClient) { }

  public GetBrawlers(filter: string){
    return this.http.get<Brawler[]>(`https://localhost:44310/api/Brawlers?${filter}&pageSize=${this.keuzePageSize}&sortBy=${this.keuzeSoryBy}&direction=${this.keuzeRichting}`);
  }
  public GetBrawler(id: number){
    return this.http.get<Brawler>(`https://localhost:44310/api/Brawlers/${id}`);
  }
  public AddBrawler(){
    return this.http.post<Brawler>(`https://localhost:44310/api/Brawlers`,this.brawlerAdd,)
  }
  public DeleteBrawler(id: number){
    return this.http.delete(`https://localhost:44310/api/Brawlers/${id}`);
  }
}

export interface Brawler {
  id?: number;
  name: string;
  rarity: string;
  type: string;
  attack: string;
  super: string;
  starPower: string;
  picture: string;
  health: number;
}