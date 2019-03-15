import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';

@Injectable()
export class CargoService {
  base = environment.servidor;
  constructor(private http: HttpClient) { }

  index() {
    return this.http.get(`${this.base}cargos`);
  }
  show(cargo_id: number) {
    return this.http.get(`${this.base}cargos/${cargo_id}`);
  }
  store(cargo: any) {
    return this.http.post(`${this.base}cargos`, cargo);
  }
  update(cargo: any, cargo_id: number) {
    return this.http.put(`${this.base}cargos/${cargo_id}`, cargo);
  }
  destroy(cargo_id: number) {
    return this.http.delete(`${this.base}cargos/${cargo_id}`);
  }
  privilegios(cargo_id: number) {
    return this.http.get(`${this.base}cargo-privilegios/${cargo_id}`);
  }
}
