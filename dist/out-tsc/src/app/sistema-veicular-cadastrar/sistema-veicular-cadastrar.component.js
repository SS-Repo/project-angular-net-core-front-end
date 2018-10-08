var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
var SistemaVeicularCadastrarComponent = /** @class */ (function () {
    function SistemaVeicularCadastrarComponent(router) {
        this.router = router;
        this.boolNome = true;
        this.boolModelo = true;
        this.boolPlaca = true;
    }
    SistemaVeicularCadastrarComponent.prototype.ngOnInit = function () {
        this.formulario = new FormGroup({
            nome: new FormControl(null, [Validators.required]),
            modelo: new FormControl(null, [Validators.required]),
            placa: new FormControl(null, Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z]+[a-zA-Z]+[a-zA-Z]+[0-9]+[0-9]+[0-9]+[0-9]')
            ])),
            urlImagem: new FormControl(null, [Validators.required])
        });
    };
    SistemaVeicularCadastrarComponent.prototype.voltar = function () {
        this.router.navigate(['tabela']);
    };
    SistemaVeicularCadastrarComponent.prototype.onSubmit = function () {
    };
    SistemaVeicularCadastrarComponent.prototype.getNome = function () {
        var nome = this.formulario.get('nome');
        this.boolNome = this.validacaoInputText(nome);
        if (this.boolNome == false) {
            this.msgErroNome = "Nome é obrigatório.";
        }
        else {
            this.msgErroNome = null;
        }
    };
    SistemaVeicularCadastrarComponent.prototype.getModelo = function () {
        var modelo = this.formulario.get('modelo');
        this.boolModelo = this.validacaoInputText(modelo);
        if (this.boolNome == false) {
            this.msgErroModelo = "Modelo do veiculo é obrigatório.";
        }
        else {
            this.msgErroModelo = null;
        }
    };
    SistemaVeicularCadastrarComponent.prototype.getPlaca = function () {
        var placa = this.formulario.get('placa');
        this.boolPlaca = this.validacaoInputText(placa);
        if (this.boolPlaca == false) {
            this.msgErroPlaca = "Placa é obrigatório,verifique se os dados"
                + " digitados estão no padrão brasileiro AAA0000";
        }
        else {
            this.msgErroPlaca = null;
        }
    };
    SistemaVeicularCadastrarComponent.prototype.validacaoInputText = function (variavel) {
        if (variavel.value == null || variavel.invalid == true) {
            return false;
        }
        else {
            return true;
        }
    };
    SistemaVeicularCadastrarComponent = __decorate([
        Component({
            selector: 'app-sistema-veicular-cadastrar',
            templateUrl: './sistema-veicular-cadastrar.component.html',
            styleUrls: ['./sistema-veicular-cadastrar.component.css']
        }),
        __metadata("design:paramtypes", [Router])
    ], SistemaVeicularCadastrarComponent);
    return SistemaVeicularCadastrarComponent;
}());
export { SistemaVeicularCadastrarComponent };
//# sourceMappingURL=sistema-veicular-cadastrar.component.js.map