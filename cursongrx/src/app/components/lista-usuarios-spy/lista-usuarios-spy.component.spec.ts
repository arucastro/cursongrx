import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUsuariosSpyComponent } from './lista-usuarios-spy.component';

describe('ListaUsuariosSpyComponent', () => {
  let component: ListaUsuariosSpyComponent;
  let fixture: ComponentFixture<ListaUsuariosSpyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaUsuariosSpyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaUsuariosSpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
