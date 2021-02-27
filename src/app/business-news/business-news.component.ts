import { Component, OnInit } from '@angular/core';
import { ArticleDetail } from '../models/article-detail';
import { NewsService } from '../services/news/news.service';

@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css']
})
export class BusinessNewsComponent implements OnInit {

  constructor(private _service:NewsService) { }

  ngOnInit(): void {
    this.getTurkishBusinessNews()
  }

  articles!:ArticleDetail[]

  getTurkishBusinessNews(){
    this._service.getTurkishBusinessNews().subscribe(result=>{
      this.articles=result.articles
    })
  }

}
