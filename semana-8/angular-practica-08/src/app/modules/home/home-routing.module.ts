import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MangaComponent } from './pages/manga/manga.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'manga', component: MangaComponent, title: 'Manga' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
