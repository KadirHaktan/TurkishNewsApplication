import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { ArticleDetail } from '../models/article-detail';
import { NewsService } from '../services/news/news.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {

  constructor(private _service:NewsService) { }

  ngOnInit(): void {
    this.getTurkishTechNews()
  }

  articles!:ArticleDetail[]

  getTurkishTechNews(){
    this._service.getTurkishTechNews().subscribe(result=>{
      this.articles=result.articles
    })
  }

}
