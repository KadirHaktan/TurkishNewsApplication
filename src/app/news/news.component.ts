import { Component, OnInit } from '@angular/core';
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
    this.getNews()
  }
  getNews(){
    this._service.getTurkishPopularNews().subscribe((result)=>{
      this.articles=result.articles
    })
  }

}
