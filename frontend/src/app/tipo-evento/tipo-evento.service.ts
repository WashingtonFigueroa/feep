import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '../../../node_modules/@angular/common/http';

@Injectable()
export class TipoEventoService {
    base = environment.servidor;
    constructor(private http: HttpClient) { }

    index() {
        return this.http.get(`${this.base}jtipo-eventos`);
    }
    listar() {
        return this.http.get(`${this.base}jtipo-eventos-listar`);
    }
    buscar(valor: string = '') {
        return this.http.get(`${this.base}jtipo-eventos-buscar/${valor}`);
    }
    show(id) {
        return this.http.get(`${this.base}jtipo-eventos/${id}`);
    }
    store(request) {
        return this.http.post(`${this.base}jtipo-eventos`, request);
    }
    update(id, request) {
        return this.http.put(`${this.base}jtipo-eventos/${id}`, request);
    }
    destroy(id) {
        return this.http.delete(`${this.base}jtipo-eventos/${id}`);
    }
    pagination(url: string) {
        return this.http.get(url);
    }
}
