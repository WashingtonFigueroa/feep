import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '../../../node_modules/@angular/common/http';

@Injectable()
export class ResumenService {
    base = environment.servidor;
    constructor(private http: HttpClient) { }

    index() {
        return this.http.get(`${this.base}resumenes`);
    }
    listar() {
        return this.http.get(`${this.base}resumenes-listar`);
    }
    buscar(valor: string = '') {
        return this.http.get(`${this.base}resumenes-buscar/${valor}`);
    }
    show(id) {
        return this.http.get(`${this.base}resumenes/${id}`);
    }
    store(request) {
        return this.http.post(`${this.base}resumenes`, request);
    }
    update(id, request) {
        return this.http.put(`${this.base}resumenes/${id}`, request);
    }
    destroy(id) {
        return this.http.delete(`${this.base}resumenes/${id}`);
    }
    pagination(url: string) {
        return this.http.get(url);
    }
    sri(cedula: string) {
        return this.http.get(`${this.base}sri/${cedula}`);
    }
}
