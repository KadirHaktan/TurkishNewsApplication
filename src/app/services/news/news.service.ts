import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Article } from '../../models/article';
import { Observable } from 'rxjs';
import { NewsCategories } from 'src/app/enums/news-categories';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private API_KEY:string="apiKey="
  private base_url:string="https://newsapi.org/v2/top-headlines?country=tr&"
  private category:string="category="


  constructor(private _http:HttpClient) { }



  getTurkishPopularNews():Observable<Article>{
    return this._http.get<Article>(this.createNewsUrl())
  }

  getTurkishTechNews():Observable<Article>{
    return this._http.get<Article>(this.createNewsUrl(NewsCategories.technology))
  }

  getTurkishSportNews():Observable<Article>{
    return this._http.get<Article>(this.createNewsUrl(NewsCategories.sport))
  }

  getTurkishBusinessNews():Observable<Article>{
    return this._http.get<Article>(this.createNewsUrl(NewsCategories.business))
  }

  private createNewsUrl(newsCategory?:NewsCategories):string{
    if(newsCategory!=null){
      return `${this.base_url}${this.category}${newsCategory}&${this.API_KEY}`
    }

    else{
      return this.base_url+this.API_KEY
    }

  }
}
