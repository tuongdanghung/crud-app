import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FruitService } from '../../service/fruits.service';
import { FruitInterface } from '../../interface/fruits';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
})
export class DetailComponent {
  data!: FruitInterface;

  constructor(
    private route: ActivatedRoute,
    private fruitService: FruitService
  ) {}

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.fruitService.getDetailFruit(id).subscribe((res) => {
      this.data = res;
    });
  }
}
