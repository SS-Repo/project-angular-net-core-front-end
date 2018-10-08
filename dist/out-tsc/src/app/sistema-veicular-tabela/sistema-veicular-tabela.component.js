var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { VeiculosService } from './veiculos.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
var SistemaVeicularTabelaComponent = /** @class */ (function () {
    function SistemaVeicularTabelaComponent(veiculosService) {
        this.veiculosService = veiculosService;
    }
    SistemaVeicularTabelaComponent.prototype.getVeiculos = function () {
        var _this = this;
        this.veiculosService.getVeiculos()
            .subscribe(function (dados) { return _this.populaDadosTable(dados); });
        //.subscribe(dados => this.populaDadosForm(dados));
    };
    SistemaVeicularTabelaComponent.prototype.populaDadosTable = function (dados) {
        console.log(dados);
        this.formulario.patchValue({
            id: dados.id,
            nome: dados.nome,
            modelo: dados.modelo,
            placa: dados.placa,
            urlImagem: dados.url
        });
    };
    SistemaVeicularTabelaComponent.prototype.ngOnInit = function () {
        this.formulario = new FormGroup({
            id: new FormControl(null),
            nome: new FormControl(null),
            modelo: new FormControl(null),
            placa: new FormControl(null),
            urlImagem: new FormControl(null)
        });
        this.getVeiculos();
    };
    SistemaVeicularTabelaComponent = __decorate([
        Component({
            selector: 'app-sistema-veicular-tabela',
            templateUrl: './sistema-veicular-tabela.component.html',
            styleUrls: ['./sistema-veicular-tabela.component.css'],
        }),
        __metadata("design:paramtypes", [VeiculosService])
    ], SistemaVeicularTabelaComponent);
    return SistemaVeicularTabelaComponent;
}());
export { SistemaVeicularTabelaComponent };
//# sourceMappingURL=sistema-veicular-tabela.component.js.map