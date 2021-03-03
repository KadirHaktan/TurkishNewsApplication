import { Component, OnInit } from '@angular/core';
import { NewsCategories } from '../enums/news-categories';
import { ArticleDetail } from '../models/article-detail';
import { NewsService } from '../services/news/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private _service:NewsService) { }

  articles!:ArticleDetail[]

  ngOnInit(): void {
    this._service.getTurkishNews(NewsCategories.null).subscribe((result)=>{
      this.articles=result.articles
    })
  }
}
