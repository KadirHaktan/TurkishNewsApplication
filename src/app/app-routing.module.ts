import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { NewsComponent } from './news/news.component';
import { SportNewsComponent } from './sport-news/sport-news.component';
import { TechNewsComponent } from './tech-news/tech-news.component';

const routes: Routes = [
   {path:'',component:NewsComponent},
   {path:'technology',component:TechNewsComponent},
   {path:'business',component:BusinessNewsComponent},
   {path:'sport',component:SportNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
