import { TestBed, inject } from '@angular/core/testing';
import { VeiculosService } from './veiculos.service';
describe('VeiculosService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [VeiculosService]
        });
    });
    it('should be created', inject([VeiculosService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=veiculos.service.spec.js.map