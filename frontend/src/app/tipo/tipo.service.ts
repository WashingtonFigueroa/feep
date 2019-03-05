import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TipoService {
  base = environment.servidor;
  constructor(private http: HttpClient) { }
  index() {
    return this.http.get(`${this.base}tipos`);
  }
  listar() {
    return this.http.get(`${this.base}tipo-listar`);
  }
  load(url) {
    return this.http.get(url);
  }
  buscar(valor: string = '') {
    return this.http.get(`${this.base}tipos-buscar/${valor}`);
  }
  show(id) {
    return this.http.get(`${this.base}tipos/${id}`);
  }
  store(request) {
    return this.http.post(`${this.base}tipos`, request);
  }
  update(id, request) {
    return this.http.put(`${this.base}tipos/${id}`, request);
  }
  destroy(id) {
    return this.http.delete(`${this.base}tipos/${id}`);
  }
  pagination(url: string) {
    return this.http.get(url);
  }
}