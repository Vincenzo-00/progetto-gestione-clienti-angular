import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAnagraficaComponent } from './lista-anagrafica.component';

describe('ListaAnagraficaComponent', () => {
  let component: ListaAnagraficaComponent;
  let fixture: ComponentFixture<ListaAnagraficaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaAnagraficaComponent]
    });
    fixture = TestBed.createComponent(ListaAnagraficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
