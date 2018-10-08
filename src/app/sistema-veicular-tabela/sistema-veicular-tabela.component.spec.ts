import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaVeicularTabelaComponent } from './sistema-veicular-tabela.component';

describe('SistemaVeicularTabelaComponent', () => {
  let component: SistemaVeicularTabelaComponent;
  let fixture: ComponentFixture<SistemaVeicularTabelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SistemaVeicularTabelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemaVeicularTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
