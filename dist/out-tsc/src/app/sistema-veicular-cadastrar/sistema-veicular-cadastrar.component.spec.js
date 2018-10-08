import { async, TestBed } from '@angular/core/testing';
import { SistemaVeicularCadastrarComponent } from './sistema-veicular-cadastrar.component';
describe('SistemaVeicularCadastrarComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SistemaVeicularCadastrarComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SistemaVeicularCadastrarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=sistema-veicular-cadastrar.component.spec.js.map