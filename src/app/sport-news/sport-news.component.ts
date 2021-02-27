import { Component, OnInit } from '@angular/core';
import { ArticleDetail } from '../models/article-detail';
import { NewsService } from '../services/news/news.service';

@Component({
  selector: 'app-sport-news',
  templateUrl: './sport-news.component.html',
  styleUrls: ['./sport-news.component.css']
})
export class SportNewsComponent implements OnInit {

  constructor(private _service:NewsService) { }

  articles!:ArticleDetail[]

  ngOnInit(): void {
    this.getNews()
  }

  getNews(){
    this._service.getTurkishSportNews().subscribe((result)=>{
      this.articles=result.articles
    })
  }

}
