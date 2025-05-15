import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import{MatCardModule} from '@angular/material/card';
import { PiercingService } from './piercing_service/piercing.service';
import { Piercing } from './piercing';
@Component({
  selector: 'app-card-piercing',
  imports: [MatCardModule, CommonModule],
  templateUrl: './card-piercing.component.html',
  styleUrl: './card-piercing.component.css'
})

export class CardPiercingComponent implements OnInit {
  piercings: Piercing[] = [];

constructor(private piercingService: PiercingService) { }
  ngOnInit(): void {
   this.piercingService.getPiercings().subscribe(data => {
      this.piercings = data;
    });
  }
}

