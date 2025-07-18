import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormService } from '../services/form.service'; // ajuste o caminho conforme seu projeto
import { finalize } from 'rxjs/operators';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-anamnesis-form',
  standalone: true,
  imports: [
    HttpClientModule,MatFormFieldModule, MatCardModule,MatButtonModule,CommonModule,MatNativeDateModule,
MatDatepickerModule,MatRadioModule, FormsModule,ReactiveFormsModule],
  templateUrl: './anamnesis-form.component.html',
  styleUrl: './anamnesis-form.component.css'
})
export class AnamnesisComponent implements OnInit {
  showForm = false;
  loadingQuestions = false;
  form!: FormGroup;
  questions: any[] = [];

  constructor(private fb: FormBuilder, private formService: FormService) {}

  ngOnInit() {
    this.initBasicForm();

    // Carregar perguntas da API
    this.loadingQuestions = true;
    this.formService.getQuestions()
      .pipe(finalize(() => this.loadingQuestions = false))
      .subscribe({
        next: (res: any) => {
          this.questions = res;
          this.setQuestionsFormArray(this.questions);
        },
        error: (err) => {
          console.error('Erro ao carregar perguntas', err);
          // aqui pode colocar algum tratamento visual ou mensagem
        }
      });
  }

  initBasicForm() {
    this.form = this.fb.group({
      name: [''],
      birthDate: [''],
      questions: this.fb.array([]) // vai popular depois
    });
  }

  // Popula o FormArray de perguntas dinamicamente
  setQuestionsFormArray(questions: any[]) {
    const questionsFGs = questions.map(q => this.createQuestionGroup(q));
    const formArray = this.fb.array(questionsFGs);
    this.form.setControl('questions', formArray);
  }

  createQuestionGroup(question: any): FormGroup {
    if (question.type === 'multiplechoice') {
      const controls = question.options.reduce((acc: any, opt: any) => {
        acc[opt.value] = new FormControl(false);
        return acc;
      }, {});
      return this.fb.group(controls);
    }
    else if (question.type === 'bool') {
      return this.fb.group({
        answer: new FormControl(false)
      });
    }
    else { // texto
      return this.fb.group({
        answer: new FormControl('')
      });
    }
  }

  get questionsFormArray() {
    return this.form.get('questions') as FormArray;
  }

  initForm() {
    this.showForm = true;
  }

  onSubmit() {
    if (this.form.invalid) {
      // você pode mostrar mensagens de erro aqui
      return;
    }

    // Ajuste os dados para enviar conforme sua API espera
    const payload = {
      name: this.form.value.name,
      birthDate: this.form.value.birthDate,
      answers: this.transformAnswers(this.form.value.questions, this.questions)
    };

    this.formService.cadastrarCliente(payload).subscribe({
      next: () => alert('Formulário enviado com sucesso!'),
      error: (err) => alert('Erro ao enviar formulário')
    });
  }

  // Transforma o FormArray para o formato que API espera
  transformAnswers(formAnswers: any[], questions: any[]) {
    return questions.map((q, i) => {
      const answerGroup = formAnswers[i];

      if (q.type === 'multiplechoice') {
        // Retorna array de opções selecionadas
        return {
          questionId: q.id,
          type: q.type,
          answer: Object.entries(answerGroup)
            .filter(([key, val]) => val)
            .map(([key]) => key)
        };
      }
      else if (q.type === 'bool') {
        return {
          questionId: q.id,
          type: q.type,
          answer: answerGroup.answer
        };
      }
      else { // text
        return {
          questionId: q.id,
          type: q.type,
          answer: answerGroup.answer
        };
      }
    });
  }
}
