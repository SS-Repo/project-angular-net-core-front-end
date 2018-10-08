import { IVeiculos } from './veiculos.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  //veiculos:IVeiculos[];
  private readonly API = 'https://localhost:5001/api/veiculos';
  constructor(
    private httpClient: HttpClient) { }
  getVeiculos() {
    return this.httpClient.get<IVeiculos[]>(this.API)
  }

  getVeiculosById(id) {
    return this.httpClient.get<IVeiculos>(`https://localhost:5001/api/veiculos/${id}`)
  }
  //post
  addVeiculo(veiculos: IVeiculos) {
    return this.httpClient.post<IVeiculos>("https://localhost:5001/api/veiculos", veiculos)
  }
  //put
  updateVeiculos(veiculos: IVeiculos,id) {
    console.log(veiculos,id);
    return this.httpClient.put<IVeiculos>(`https://localhost:5001/api/veiculos/${id}`, veiculos)
    .subscribe(
      data => {
        console.log("PATCH Request is successful ", data);
      },
      error => {
        console.log("Error", error);
      });
  }
  //delete
  deleteVeiculos(id) {
    return this.httpClient.delete<IVeiculos>(`https://localhost:5001/api/veiculos/${id}`)
      .subscribe(
        data => {
          console.log("PATCH Request is successful ", data);
        },
        error => {
          console.log("Error", error);
        }
      );
  }

}
