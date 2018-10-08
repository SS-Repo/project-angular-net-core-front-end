import { IVeiculos } from './veiculos.interface';
import { VeiculosService } from './veiculos.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sistema-veicular-tabela',
  templateUrl: './sistema-veicular-tabela.component.html',
  styleUrls: ['./sistema-veicular-tabela.component.css'],
})
export class SistemaVeicularTabelaComponent implements OnInit {
  veiculos: IVeiculos[];
  formulario: FormGroup;
  constructor(private veiculosService: VeiculosService) { }

  private getVeiculos() {
    this.veiculosService.getVeiculos()
      .subscribe(dados => this.populaDadosTable(dados));
  }

  populaDadosTable(dados) {
    this.veiculos = dados.sort((n1,n2) => {
      return n1.id - n2.id
    })
  }

  ngOnInit() {
    this.getVeiculos();

    this.formulario = new FormGroup({
      id: new FormControl(null),
      nome: new FormControl(null),
      modelo: new FormControl(null),
      placa: new FormControl(null),
      url: new FormControl(null)
    });
  }

  getVeiculosById(id){
    this.veiculosService.getVeiculosById(id)
    .subscribe(dados => this.populaDadosById(dados))

  }

  populaDadosById(dados){
    this.formulario.patchValue({
      id: dados.id,
      nome: dados.nome,
      modelo: dados.modelo,
      placa: dados.placa,
      //url: dados.url
    });
  }
  updateVeiculos(formulario){
    this.veiculosService.updateVeiculos(formulario.value,formulario.value.id);
    this.resetaDados();
  }
  deleteVeiculos(id){
   this.veiculosService.deleteVeiculos(id);
   location.reload();
  }

  resetaDados(){
    this.formulario.patchValue({
      id: null,
      nome: null,
      modelo: null,
      placa: null
      //url: dados.url
    });
  }
 
}
