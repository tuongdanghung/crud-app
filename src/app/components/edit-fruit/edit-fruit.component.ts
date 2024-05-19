import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FruitInterface } from '../../interface/fruits';
import { FruitService } from '../../service/fruits.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-edit-fruit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-fruit.component.html',
})
export class EditFruitComponent implements OnInit {
  fruit: FruitInterface = {
    id: 0,
    name: '',
    image: '',
    desc: '',
    quantity: 0,
    price: 0,
    nsx: '',
    hsd: '',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fruitService: FruitService
  ) {}

  ngOnInit(): void {
    this.getDetailFruit();
  }

  getDetailFruit(): void {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.fruitService
      .getDetailFruit(id)
      .subscribe((fruit) => (this.fruit = fruit));
  }

  onSubmit(id: string): void {
    this.fruitService.updateFruit(id, this.fruit).subscribe((data) => {
      if (data) {
        alert('update fruit successfully');
        this.router.navigate(['']);
      }
    });
  }
}
