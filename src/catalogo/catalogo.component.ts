import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPiercingComponent } from '../card-piercing/card-piercing.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

import { AnamnesisFormComponent } from '../anamnesis-form/anamnesis-form.component';

@Component({
  selector: 'app-catalogo',
  imports: [CardPiercingComponent, RouterModule],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {

  constructor(private router: Router) {}

anamnesisForm() {
  this.router.navigate(['/anamnesis_form']);
}
}
