import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TipoInsumoService {

  base = environment.servidor;
  constructor(private http: HttpClient) { }

  index() {
    return this.http.get(`${this.base}tipo-insumos`);
  }
  load(url) {
    return this.http.get(url);
  }
  show(id) {
    return this.http.get(`${this.base}tipo-insumos/${id}`);
  }
  store(request) {
    return this.http.post(`${this.base}tipo-insumos`, request);
  }
  update(id, request) {
    return this.http.put(`${this.base}tipo-insumos/${id}`, request);
  }
  destroy(id) {
    return this.http.delete(`${this.base}tipo-insumos/${id}`);
  }

}
