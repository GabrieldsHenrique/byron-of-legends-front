import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-externo',
  standalone: true,
  imports: [],
  templateUrl: './externo.component.html',
  styleUrl: './externo.component.scss'
})
export class ExternoComponent {
  router = inject(Router)
  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigateByUrl('/login')
    },4000)
  }
}
