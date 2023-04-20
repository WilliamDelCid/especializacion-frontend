import { Component, OnInit } from '@angular/core';
import { Manga } from '@modules/home/interfaces/manga.interface';
import { MangaService } from '@modules/home/service/manga.service';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.scss'],
})
export class MangaComponent implements OnInit {
  obj: Manga[] = [];
  pagination: string[] = [];
  currentPage = 1;
  lastVisiblePage = 110;
  hasNextPage = true;
  constructor(private Service: MangaService) {}

  ngOnInit(): void {
    this.Service.obtenerManga().subscribe((resp: any) => {
      this.pagination = resp.pagination;
      console.log(this.pagination);

      this.obj = resp.data;
    });
  }

  updatePagination() {}

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  nextPage() {
    if (this.currentPage < this.lastVisiblePage) {
      this.currentPage++;
      this.updatePagination();
    }
  }
}
