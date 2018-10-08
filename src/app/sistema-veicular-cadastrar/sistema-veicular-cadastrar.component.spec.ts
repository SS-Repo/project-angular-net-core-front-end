import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaVeicularCadastrarComponent } from './sistema-veicular-cadastrar.component';

describe('SistemaVeicularCadastrarComponent', () => {
  let component: SistemaVeicularCadastrarComponent;
  let fixture: ComponentFixture<SistemaVeicularCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SistemaVeicularCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemaVeicularCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
