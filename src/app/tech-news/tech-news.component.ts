import { Component, OnInit } from '@angular/core';
import { NewsCategories } from '../enums/news-categories';
import { ArticleDetail } from '../models/article-detail';
import { NewsService } from '../services/news/news.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {

  constructor(private _service:NewsService) { }

  articles!:ArticleDetail[]

  ngOnInit(): void {
    this._service.getTurkishNews(NewsCategories.technology).subscribe((result)=>{
      this.articles=result.articles
    })
  }
}
