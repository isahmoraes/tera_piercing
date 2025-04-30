import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterCatalogoComponent } from './alter-catalogo.component';

describe('AlterCatalogoComponent', () => {
  let component: AlterCatalogoComponent;
  let fixture: ComponentFixture<AlterCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlterCatalogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlterCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
