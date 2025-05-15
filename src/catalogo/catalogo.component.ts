import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPiercingComponent } from '../card-piercing/card-piercing.component';
@Component({
  selector: 'app-catalogo',
  imports: [CardPiercingComponent],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {

}
