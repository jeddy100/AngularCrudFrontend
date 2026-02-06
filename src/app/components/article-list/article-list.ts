import { Component, OnInit } from '@angular/core';
import { Article } from '../../services/article';

@Component({
  selector: 'app-article-list',
  imports: [],
  templateUrl: './article-list.html',
  styleUrl: './article-list.css',
})
export class ArticleList {
  articles: any[] = [];
 constructor(private articleService: Article) {}
 ngOnInit(): void {
 this.loadArticles();
 }
 loadArticles(): void {
 this.articleService.getArticles().subscribe(data => this.articles =
data);
 }
 deleteArticle(id: string): void {
 this.articleService.deleteArticle(id).subscribe(() =>
this.loadArticles());
 }

}
