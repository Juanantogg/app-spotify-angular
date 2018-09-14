import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: []
})
export class CardComponent {

  @Input() item;

  constructor(private router: Router) {
  }

  mostrarArtista(id) {
    this.router.navigate(['/artist', id]);
  }

}
