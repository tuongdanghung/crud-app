import { Component } from '@angular/core';
import { CreateFruitInterface } from '../../interface/fruits';
import { FruitService } from '../../service/fruits.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-fruit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post-fruit.component.html',
})
export class PostFruitComponent {
  newFruit: CreateFruitInterface = {
    name: '',
    image: '',
    desc: '',
    quantity: 0,
    price: 0,
    nsx: '',
    hsd: '',
  };
  constructor(private router: Router, private fruit: FruitService) {}
  onSubmit(fruitForm: NgForm): void {
    this.fruit.createFruit(this.newFruit).subscribe(
      () => {
        alert('Tạo mới thành công');
        this.router.navigate(['/']);
        fruitForm.resetForm();
      },
      (error) => {
        alert('Lỗi khi tạo mới:');
      }
    );
  }
}
