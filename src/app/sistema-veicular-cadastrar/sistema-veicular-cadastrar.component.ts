import { HttpClient } from '@angular/common/http';
import { VeiculosService } from './../sistema-veicular-tabela/veiculos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sistema-veicular-cadastrar',
  templateUrl: './sistema-veicular-cadastrar.component.html',
  styleUrls: ['./sistema-veicular-cadastrar.component.css']
})
export class SistemaVeicularCadastrarComponent implements OnInit {

  formulario: FormGroup;
  msgErroNome;
  msgErroModelo;
  msgErroPlaca;
  boolNome = true;
  boolModelo = true;
  boolPlaca = true;
  constructor(
    private router: Router,
    private veiculosService: VeiculosService,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {

    this.formulario = new FormGroup({
      nome: new FormControl(null, [Validators.required]),
      modelo: new FormControl(null, [Validators.required]),
      placa: new FormControl(null,
        Validators.compose
          ([
            Validators.required,
            Validators.pattern('^[a-zA-Z]+[a-zA-Z]+[a-zA-Z]+[0-9]+[0-9]+[0-9]+[0-9]')
          ])
      ),
      urlImagem: new FormControl(null)
    });
  }

  voltar() {
    this.router.navigate(['tabela']);
  }

  onSubmit() {
    if (this.formulario.value) {
      this.veiculosService.addVeiculo(this.formulario.value)
        .subscribe(dados => {
          this.resetar();
        },
          (error: any) => alert('erro'))
    } else {
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    console.log('formulario invalido');
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      controle.markAsDirty();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  resetar() {
    this.formulario.reset();
  }

  getNome() {
    let nome = this.formulario.get('nome');
    this.boolNome = this.validacaoInputText(nome)
    if (this.boolNome == false) {
      this.msgErroNome = "Nome é obrigatório.";
    } else {
      this.msgErroNome = null;
    }
  }

  getModelo() {
    let modelo = this.formulario.get('modelo');
    this.boolModelo = this.validacaoInputText(modelo)
    if (this.boolNome == false) {
      this.msgErroModelo = "Modelo do veiculo é obrigatório.";
    } else {
      this.msgErroModelo = null;
    }
  }

  getPlaca() {
    let placa = this.formulario.get('placa');
    this.boolPlaca = this.validacaoInputText(placa);
    if (this.boolPlaca == false) {
      this.msgErroPlaca = "Placa é obrigatório,verifique se os dados"
        + " digitados estão no padrão brasileiro AAA0000";
    } else {
      this.msgErroPlaca = null;
    }
  }

  validacaoInputText(variavel) {
    if (variavel.value == null || variavel.invalid == true) {
      return false;
    } else {
      return true;
    }
  }
}