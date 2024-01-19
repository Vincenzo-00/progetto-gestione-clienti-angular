import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificareAnagraficaComponent } from './modificare-anagrafica.component';

describe('ModificareAnagraficaComponent', () => {
  let component: ModificareAnagraficaComponent;
  let fixture: ComponentFixture<ModificareAnagraficaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificareAnagraficaComponent]
    });
    fixture = TestBed.createComponent(ModificareAnagraficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
