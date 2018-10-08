import { SistemaVeicularTabelaModule } from './sistema-veicular-tabela.module';

describe('SistemaVeicularTabelaModule', () => {
  let sistemaVeicularTabelaModule: SistemaVeicularTabelaModule;

  beforeEach(() => {
    sistemaVeicularTabelaModule = new SistemaVeicularTabelaModule();
  });

  it('should create an instance', () => {
    expect(sistemaVeicularTabelaModule).toBeTruthy();
  });
});
