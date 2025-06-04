import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-anamnesis-form',
  imports: [MatFormFieldModule, MatCardModule,MatButtonModule,CommonModule,MatNativeDateModule,
MatDatepickerModule,MatRadioModule, FormsModule,ReactiveFormsModule],
  templateUrl: './anamnesis-form.component.html',
  styleUrl: './anamnesis-form.component.css'
})
export class AnamnesisFormComponent {
 showForm = false;
 name = new FormControl('');
  birthDate = new FormControl('');
  email = new FormControl('');
  address = new FormControl('');
  city = new FormControl('');
  state = new FormControl('');
  cpf = new FormControl('');
  phone = new FormControl('');
  gender = new FormControl('');
  age = new FormControl('');
  source = new FormControl('');
  hasAllergy = new FormControl('');
  allergyDescription = new FormControl({value: '', disabled: true});

  get isAllergic(): boolean {
    return this.hasAllergy.value === 'Sim';
  }

  onAllergyChange(value: string) {
    if (value === 'Sim') {
      this.allergyDescription.enable();
    } else {
      this.allergyDescription.disable();
      this.allergyDescription.setValue('');
    }
  }

  initForm() {
    this.showForm = true;
  }
  
}
