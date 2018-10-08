import { async, TestBed } from '@angular/core/testing';
import { SistemaVeicularTabelaComponent } from './sistema-veicular-tabela.component';
describe('SistemaVeicularTabelaComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SistemaVeicularTabelaComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SistemaVeicularTabelaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=sistema-veicular-tabela.component.spec.js.map