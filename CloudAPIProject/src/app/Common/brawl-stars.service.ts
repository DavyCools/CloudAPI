import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrawlStarsService {

  constructor(private http: HttpClient) { }

  public GetBrawlers(filter: string){
    return this.http.get<Brawler[]>(`https://localhost:44310/api/Brawlers?${filter}`);
  }
  public GetBrawler(id: number){
    return this.http.get<Brawler>(`https://localhost:44310/api/Brawlers/${id}`);
  }
  public AddBrawler(body: Brawler){
    return this.http.post<Brawler>(`https://localhost:44310/api/Brawlers`,body,)
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