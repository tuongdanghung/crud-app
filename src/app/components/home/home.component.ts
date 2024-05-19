import { Component, OnInit } from '@angular/core';
import { FruitService } from '../../service/fruits.service';
import { FruitInterface } from '../../interface/fruits';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PaginationFruitComponent } from '../pagination-fruit/pagination-fruit.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [CommonModule, RouterModule, PaginationFruitComponent],
})
export class HomeComponent implements OnInit {
  fruits: FruitInterface[] = [];
  searchQuery: string = '';
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 10;

  constructor(
    private route: ActivatedRoute,
    private fruitService: FruitService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['search'] || '';
      this.loadFruits();
    });
  }

  loadFruits(): void {
    if (this.searchQuery.trim()) {
      this.searchFruits(this.searchQuery);
    } else {
      this.fruitService
        .getFruits(this.currentPage, this.itemsPerPage)
        .subscribe((data: FruitInterface[]) => {
          this.fruits = data;
        });
    }
  }

  searchFruits(query: string): void {
    this.fruitService
      .searchFruits(query)
      .subscribe((data: FruitInterface[]) => {
        this.fruits = data;
      });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadFruits();
  }

  isExpired(expirationDate: string): boolean {
    const currentDate = new Date();
    const hsd = new Date(expirationDate);
    return hsd < currentDate;
  }

  onDelete(id: number): void {
    if (confirm('Are you sure you want to delete')) {
      this.fruitService.deleteFruit(id).subscribe(() => {
        this.loadFruits();
      });
    }
  }
}
