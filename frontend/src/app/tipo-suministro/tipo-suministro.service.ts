import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TipoSuministroService {
  base = environment.servidor;
  constructor(private http: HttpClient) { }

  index() {
    return this.http.get(`${this.base}tipo-suministros`);
  }
  listar() {
    return this.http.get(`${this.base}tipo-suministros-listar`);
  }
  load(url) {
    return this.http.get(url);
  }
  buscar(valor: string = '') {
    return this.http.get(`${this.base}tipo-suministros-buscar/${valor}`);
  }
  show(id) {
    return this.http.get(`${this.base}tipo-suministros/${id}`);
  }
  store(request) {
    return this.http.post(`${this.base}tipo-suministros`, request);
  }
  update(id, request) {
    return this.http.put(`${this.base}tipo-suministros/${id}`, request);
  }
  destroy(id) {
    return this.http.delete(`${this.base}tipo-suministros/${id}`);
  }
  pagination(url: string) {
    return this.http.get(url);
  }
}
