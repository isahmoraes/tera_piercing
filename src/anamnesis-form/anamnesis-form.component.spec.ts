import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnamnesisComponent } from './anamnesis-form.component';

describe('AnamnesisFormComponent', () => {
  let component: AnamnesisComponent;
  let fixture: ComponentFixture<AnamnesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnamnesisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnamnesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
