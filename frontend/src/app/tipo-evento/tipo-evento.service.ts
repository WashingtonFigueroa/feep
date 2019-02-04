import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '../../../node_modules/@angular/common/http';

@Injectable()
export class TipoEventoService {
    base = environment.servidor;
    constructor(private http: HttpClient) { }

    index() {
        return this.http.get(`${this.base}tipo-eventos`);
    }
    load(url) {
        return this.http.get(url);
    }
    listar() {
        return this.http.get(`${this.base}tipo-eventos-listar`);
    }
    buscar(valor: string = '') {
        return this.http.get(`${this.base}tipo-eventos-buscar/${valor}`);
    }
    show(id) {
        return this.http.get(`${this.base}tipo-eventos/${id}`);
    }
    store(request) {
        return this.http.post(`${this.base}tipo-eventos`, request);
    }
    update(id, request) {
        return this.http.put(`${this.base}tipo-eventos/${id}`, request);
    }
    destroy(id) {
        return this.http.delete(`${this.base}tipo-eventos/${id}`);
    }
    pagination(url: string) {
        return this.http.get(url);
    }
}
