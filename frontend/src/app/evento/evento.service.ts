import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class EventoService {
    base = environment.servidor;

    constructor(private http: HttpClient) {}

    index() {
        return this.http.get(`${this.base}eventos`);
    }
    listar() {
        return this.http.get(`${this.base}eventos-listar`);
    }
    load(url) {
        return this.http.get(url);
    }
    buscar(valor) {
        return this.http.get(`${this.base}eventos-buscar/${valor}`);
    }
    show(id) {
        return this.http.get(`${this.base}eventos/${id}`);
    }
    reporte(id) {
        return this.http.get(`${this.base}reporte/${id}`);
    }
    store(request) {
        return this.http.post(`${this.base}eventos`, request);
    }
    update(id, request) {
        return this.http.put(`${this.base}eventos/${id}`, request);
    }
    destroy(id) {
        return this.http.delete(`${this.base}eventos/${id}`);
    }
    pagination(url: string) {
        return this.http.get(url);
    }
    participantes(evento_id: number) {
        return this.http.get(`${this.base}evento-participantes/${evento_id}`);
    }
    cambiarImagen(id, req) {
        return this.http.post(`${this.base}eventos-imagen-cambiar/${id}`, req);
    }
}
