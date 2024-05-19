import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './nav.component.html',
})
export class NavComponent {
  searchQuery: string = '';
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  constructor(private router: Router) {}
  onSubmit(): void {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/'], {
        queryParams: { search: this.searchQuery },
      });
    }
  }
}
