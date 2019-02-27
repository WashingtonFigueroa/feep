import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '../../../node_modules/@angular/common/http';

@Injectable()
export class ActividadService {
    base = environment.servidor;
    constructor(private http: HttpClient) { }

    index() {
        return this.http.get(`${this.base}actividades`);
    }
    listar() {
        return this.http.get(`${this.base}actividades-listar`);
    }
    buscar(valor: string = '') {
        return this.http.get(`${this.base}actividades-buscar/${valor}`);
    }
    show(id) {
        return this.http.get(`${this.base}actividades/${id}`);
    }
    store(request) {
        return this.http.post(`${this.base}actividades`, request);
    }
    update(id, request) {
        return this.http.put(`${this.base}actividades/${id}`, request);
    }
    destroy(id) {
        return this.http.delete(`${this.base}actividades/${id}`);
    }
    pagination(url: string) {
        return this.http.get(url);
    }
}
