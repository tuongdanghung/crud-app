import { Component } from '@angular/core';
import { FruitService } from '../../service/fruits.service';
import { FruitInterface } from '../../interface/fruits';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private fruit: FruitService) {}
  fruits: Array<FruitInterface> = new Array<FruitInterface>();

  ngOnInit(): void {
    this.fruit.getFruits().subscribe((data) => {
      this.fruits = data;
    });
  }

  isExpired(expirationDate: string): boolean {
    const currentDate = new Date();
    const hsd = new Date(expirationDate);
    return hsd < currentDate;
  }

  onDelete(id: number): void {
    if (confirm('Are you sure you want to delete')) {
      this.fruit.deleteFruit(id).subscribe(
        () => {
          this.fruit.getFruits().subscribe((data) => {
            this.fruits = data;
          });
        },
        (error) => {
          console.error('Error deleting fruit:', error);
        }
      );
    }
  }
}
