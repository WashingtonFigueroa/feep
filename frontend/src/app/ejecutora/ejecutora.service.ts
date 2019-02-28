import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '../../../node_modules/@angular/common/http';

@Injectable()
export class EjecutoraService {
    base = environment.servidor;
    constructor(private http: HttpClient) { }
    index() {
        return this.http.get(`${this.base}ejecutoras`);
    }
    listar() {
        return this.http.get(`${this.base}ejecutoras-listar`);
    }
    buscar(valor: string = '') {
        return this.http.get(`${this.base}ejecutoras-buscar/${valor}`);
    }
    show(id) {
        return this.http.get(`${this.base}ejecutoras/${id}`);
    }
    store(request) {
        return this.http.post(`${this.base}ejecutoras`, request);
    }
    update(id, request) {
        return this.http.put(`${this.base}ejecutoras/${id}`, request);
    }
    destroy(id) {
        return this.http.delete(`${this.base}ejecutoras/${id}`);
    }
    pagination(url: string) {
        return this.http.get(url);
    }
}