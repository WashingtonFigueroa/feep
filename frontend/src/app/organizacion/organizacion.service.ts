import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class OrganizacionService {
    base = environment.servidor;
    constructor(private http: HttpClient) { }

    index() {
        return this.http.get(`${this.base}organizaciones`);
    }
    listar() {
        return this.http.get(`${this.base}organizaciones-listar`);
    }
    buscar(valor: string = '') {
        return this.http.get(`${this.base}organizaciones-buscar/${valor}`);
    }
    show(id) {
        return this.http.get(`${this.base}organizaciones/${id}`);
    }
    store(request) {
        return this.http.post(`${this.base}organizaciones`, request);
    }
    update(id, request) {
        return this.http.put(`${this.base}organizaciones/${id}`, request);
    }
    destroy(id) {
        return this.http.delete(`${this.base}organizaciones/${id}`);
    }
    pagination(url: string) {
        return this.http.get(url);
    }
}
