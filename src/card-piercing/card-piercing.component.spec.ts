import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPiercingComponent } from './card-piercing.component';

describe('CardPiercingComponent', () => {
  let component: CardPiercingComponent;
  let fixture: ComponentFixture<CardPiercingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPiercingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPiercingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
