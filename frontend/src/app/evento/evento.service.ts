import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "../../../node_modules/@angular/common/http";

@Injectable()
export class EventoService {
    base = environment.servidor;

    constructor(private http: HttpClient) {
    }

    index() {
        return this.http.get(`${this.base}eventos`);
    }
    listar() {
        return this.http.get(`${this.base}tipo-eventos-listar`);
    }
    load(url) {
        return this.http.get(url);
    }
    buscar(valor: string = '') {
        return this.http.get(`${this.base}eventos-buscar/${valor}`);
    }
    show(id) {
        return this.http.get(`${this.base}eventos/${id}`);
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
}