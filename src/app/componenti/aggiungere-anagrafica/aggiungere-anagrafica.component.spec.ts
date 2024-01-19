import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungereAnagraficaComponent } from './aggiungere-anagrafica.component';

describe('AggiungereAnagraficaComponent', () => {
  let component: AggiungereAnagraficaComponent;
  let fixture: ComponentFixture<AggiungereAnagraficaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AggiungereAnagraficaComponent]
    });
    fixture = TestBed.createComponent(AggiungereAnagraficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
