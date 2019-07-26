import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Response, Data } from '../../interfaces/data';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  //1da5385c5f90fb5a9de450ed294628f6d9a6e80147beec74dd1aca79b246d8f6dedf4a0cf
  uri: string = 'https://gateway.marvel.com:443';
  hash: string = 'a3d18748f3292c2da25eb2aed85c99a8';
  ts: string = '1';
  apikey: string = '7beec74dd1aca79b246d8f6dedf4a0cf';
  
  constructor(private http: HttpClient) {

  }

  getComics(){
    return this.http.get<Response>(this.uri +'/v1/public/comics?ts='+this.ts+'&apikey='+this.apikey+'&hash='+this.hash);
  }

  search(search: string){
    return this.http.get<Response>(this.uri +'/v1/public/comics?titleStartsWith='+search+'&ts='+this.ts+'&apikey='+this.apikey+'&hash='+this.hash);
  }
}
