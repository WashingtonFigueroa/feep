import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '../../../node_modules/@angular/common/http';

@Injectable()
export class ProyectoService {
    base = environment.servidor;
    constructor(private http: HttpClient) { }
    index() {
        return this.http.get(`${this.base}proyectos`);
    }
    listar() {
        return this.http.get(`${this.base}proyectos-listar`);
    }
    buscar(valor: string = '') {
        return this.http.get(`${this.base}proyectos-buscar/${valor}`);
    }
    show(id) {
        return this.http.get(`${this.base}proyectos/${id}`);
    }
    store(request) {
        return this.http.post(`${this.base}proyectos`, request);
    }
    update(id, request) {
        return this.http.put(`${this.base}proyectos/${id}`, request);
    }
    destroy(id) {
        return this.http.delete(`${this.base}proyectos/${id}`);
    }
    pagination(url: string) {
        return this.http.get(url);
    }
}
