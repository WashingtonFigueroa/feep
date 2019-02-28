import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '../../../node_modules/@angular/common/http';

@Injectable()
export class TipoProyectoService {
    base = environment.servidor;
    constructor(private http: HttpClient) { }

    index() {
        return this.http.get(`${this.base}tipo-proyectos`);
    }
    load(url) {
        return this.http.get(url);
    }
    listar() {
        return this.http.get(`${this.base}tipo-proyectos-listar`);
    }
    buscar(valor: string = '') {
        return this.http.get(`${this.base}tipo-proyectos-buscar/${valor}`);
    }
    show(id) {
        return this.http.get(`${this.base}tipo-proyectos/${id}`);
    }
    store(request) {
        return this.http.post(`${this.base}tipo-proyectos`, request);
    }
    update(id, request) {
        return this.http.put(`${this.base}tipo-proyectos/${id}`, request);
    }
    destroy(id) {
        return this.http.delete(`${this.base}tipo-proyectos/${id}`);
    }
    pagination(url: string) {
        return this.http.get(url);
    }
}
