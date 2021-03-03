import { Component, OnInit } from '@angular/core';
import { NewsCategories } from '../enums/news-categories';
import { ArticleDetail } from '../models/article-detail';
import { NewsService } from '../services/news/news.service';

@Component({
  selector: 'app-sport-news',
  templateUrl: './sport-news.component.html',
  styleUrls: ['./sport-news.component.css']
})
export class SportNewsComponent implements OnInit {

  constructor(public _service:NewsService) { }

  articles!:ArticleDetail[]

  ngOnInit(): void {
    this._service.getTurkishNews(NewsCategories.sport).subscribe((result)=>{
      this.articles=result.articles
    })
  }
}
