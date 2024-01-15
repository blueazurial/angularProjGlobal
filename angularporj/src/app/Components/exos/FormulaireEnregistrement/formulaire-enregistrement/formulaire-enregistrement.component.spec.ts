import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireEnregistrementComponent } from './formulaire-enregistrement.component';

describe('FormulaireEnregistrementComponent', () => {
  let component: FormulaireEnregistrementComponent;
  let fixture: ComponentFixture<FormulaireEnregistrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireEnregistrementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormulaireEnregistrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
