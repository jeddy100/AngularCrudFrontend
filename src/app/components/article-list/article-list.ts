import { Component, OnInit } from '@angular/core';
import { Article } from '../../services/article';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './article-list.html',
  styleUrl: './article-list.css',
})
export class ArticleList {

  articles: any[] = [];
  constructor(private articleService: Article) { }
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

  newArticle = { title: '', content: '' }; // Nouveau modèle pour le formulaire

  addArticle(): void {
    if (this.newArticle.title && this.newArticle.content) {
      this.articleService.addArticle(this.newArticle).subscribe(() => {
        this.loadArticles(); // Recharge la liste après ajout
        this.newArticle = { title: '', content: '' }; // Réinitialise le formulaire
      });
    }


  }

  
}
