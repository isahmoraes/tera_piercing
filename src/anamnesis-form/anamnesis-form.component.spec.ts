import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnamnesisFormComponent } from './anamnesis-form.component';

describe('AnamnesisFormComponent', () => {
  let component: AnamnesisFormComponent;
  let fixture: ComponentFixture<AnamnesisFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnamnesisFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnamnesisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
