import { Routes } from '@angular/router';
import { ArticleList } from './components/article-list/article-list';
export const routes: Routes = [
 { path: 'articles', component: ArticleList }, // Route pour article-list
 { path: '', redirectTo: 'articles', pathMatch: 'full' } // Redirectionpar défaut
];