import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { PostFruitComponent } from './components/post-fruit/post-fruit.component';
import { EditFruitComponent } from './components/edit-fruit/edit-fruit.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fruit/:id', component: DetailComponent },
  { path: 'post', component: PostFruitComponent },
  { path: 'update/:id', component: EditFruitComponent },
];
