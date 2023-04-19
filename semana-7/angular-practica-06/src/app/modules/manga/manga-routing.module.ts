import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangaComponent } from './pages/manga/manga.component';

const routes: Routes = [
  { path: '', component: MangaComponent, title: 'Manga' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MangaRoutingModule {}
