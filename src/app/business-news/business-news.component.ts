import { Component, OnInit } from '@angular/core';
import { NewsCategories } from '../enums/news-categories';
import { ArticleDetail } from '../models/article-detail';
import { NewsService } from '../services/news/news.service';

@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css']
})
export class BusinessNewsComponent implements OnInit {

  constructor(private _service:NewsService) { }

  articles!:ArticleDetail[]

  ngOnInit(): void {
    this._service.getTurkishNews(NewsCategories.business).subscribe((result)=>{
      this.articles=result.articles
    })
  }




}
