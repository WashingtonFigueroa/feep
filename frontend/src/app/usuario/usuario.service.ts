import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UsuarioService {
  base = environment.servidor;
  constructor(private http: HttpClient) { }

  index() {
    return this.http.get(`${this.base}usuarios`);
  }
  buscar(valor) {
    return this.http.get(`${this.base}usuarios-buscar/${valor}`);
  }
  load(url) {
    return this.http.get(url);
  }
  listar() {
    return this.http.get(`${this.base}usuarios-listar`);
  }
  show(id) {
    return this.http.get(`${this.base}usuarios/${id}`);
  }
  store(request) {
    return this.http.post(`${this.base}usuarios`, request);
  }
  update(id, request) {
    return this.http.put(`${this.base}usuarios/${id}`, request);
  }
  destroy(id) {
    return this.http.delete(`${this.base}usuarios/${id}`);
  }

}
