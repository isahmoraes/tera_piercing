import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
@Component({
  selector: 'app-anamnesis-form',
  imports: [MatFormFieldModule, MatCardModule,MatButtonModule,CommonModule,MatLabel,MatNativeDateModule,
MatDatepickerModule,],
  templateUrl: './anamnesis-form.component.html',
  styleUrl: './anamnesis-form.component.css'
})
export class AnamnesisFormComponent {
 showForm = false;

  initForm() {
    this.showForm = true;
  }
}
