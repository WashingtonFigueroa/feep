import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '../../../node_modules/@angular/common/http';

@Injectable()
export class MiembroService {
    base = environment.servidor;
    constructor(private http: HttpClient) { }

    index() {
        return this.http.get(`${this.base}personas`);
    }
    listar() {
        return this.http.get(`${this.base}personas-listar`);
    }
    buscar(valor: string = '') {
        return this.http.get(`${this.base}personas-buscar/${valor}`);
    }
    show(id) {
        return this.http.get(`${this.base}personas/${id}`);
    }
    store(request) {
        return this.http.post(`${this.base}personas`, request);
    }
    update(id, request) {
        return this.http.put(`${this.base}personas/${id}`, request);
    }
    destroy(id) {
        return this.http.delete(`${this.base}personas/${id}`);
    }
    pagination(url: string) {
        return this.http.get(url);
    }
}
