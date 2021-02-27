import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Article } from '../../models/article';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private API_KEY:string="apiKey=a0257538249c4e71a9622fa82bab68f0"
  private base_url:string="https://newsapi.org/v2/top-headlines?country=tr&"
  private technologyCategory:string="category=technology&"
  private businessCategory:string="category=business&"
  private sportCategory:string="category=sport&"


  constructor(private _http:HttpClient) { }



  getTurkishPopularNews():Observable<Article>{
    return this._http.get<Article>(this.base_url+this.API_KEY)
  }

  getTurkishTechNews():Observable<Article>{
    return this._http.get<Article>(this.base_url+this.technologyCategory+this.API_KEY)
  }

  getTurkishSportNews():Observable<Article>{
    return this._http.get<Article>(this.base_url+this.sportCategory+this.API_KEY)
  }

  getTurkishBusinessNews():Observable<Article>{
    return this._http.get<Article>(this.base_url+this.businessCategory+this.API_KEY)
  }
}
