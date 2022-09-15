import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarComenariosComponent } from './listar-comenarios.component';

describe('ListarComenariosComponent', () => {
  let component: ListarComenariosComponent;
  let fixture: ComponentFixture<ListarComenariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarComenariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarComenariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
