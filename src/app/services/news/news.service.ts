import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Article } from '../../models/article';
import { Observable } from 'rxjs';
import { NewsCategories } from 'src/app/enums/news-categories';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private API_KEY:string="apiKey="
  private base_url:string="http://newsapi.org/v2/top-headlines?country=tr&"
  private category:string="category="


  constructor(private _http:HttpClient) { }

  getTurkishNews(newsCategory?:NewsCategories):Observable<Article>{
    return this._http.get<Article>(this.createNewsUrl(newsCategory))
  }

  private createNewsUrl(newsCategory?:NewsCategories):string{
    if(newsCategory!=NewsCategories.null){
      return `${this.base_url}${this.category}${newsCategory}&${this.API_KEY}`
    }

    else{
      return this.base_url+this.API_KEY
    }

  }
}
