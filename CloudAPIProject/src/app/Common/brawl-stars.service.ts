import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BrawlStarsService {

  pageSize: number = 5;
  pageNumber: number = 0;
  keuzeSoryBy: string = "id";
  keuzeRichting: string = "asc";
  brawler: Brawler;
  brawlers: Brawler[];
  brawlerAdd: Brawler = {name: "",rarity:"",type:"",attack:"",super:"",starPower:"",picture:"",health:null};
  authKey:string = "";
  header = {};
  //domain:string = "https://localhost:44310/api/Brawlers";
  domain:string = "https://projectapi-240807.appspot.com/api/Brawlers";
  constructor(private http: HttpClient) {}

  public GetBrawlers(filter: string){
    return this.http.get<Brawler[]>(`${this.domain}?${filter}&pageSize=${this.pageSize}&sortBy=${this.keuzeSoryBy}&direction=${this.keuzeRichting}&pageNumber=${this.pageNumber}`,this.header);
  }
  public GetBrawler(id: number){
    return this.http.get<Brawler>(`${this.domain}/${id}`,this.header);
  }
  public AddBrawler(){
    return this.http.post<Brawler>(this.domain,this.brawlerAdd,this.header)
  }
  public DeleteBrawler(id: number){
    return this.http.delete(`${this.domain}/${id}`,this.header);
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