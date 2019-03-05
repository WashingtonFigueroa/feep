import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "../../../node_modules/@angular/common/http";

@Injectable()
export class AnexoService {
    base = environment.servidor;
    constructor(private http: HttpClient) { }

    index() {
        return this.http.get(`${this.base}anexos`);
    }
    listar() {
        return this.http.get(`${this.base}anexos-listar`);
    }
    buscar(valor: string = '') {
        return this.http.get(`${this.base}anexos-buscar/${valor}`);
    }
    show(id) {
        return this.http.get(`${this.base}anexos/${id}`);
    }
    store(request) {
        return this.http.post(`${this.base}anexos`, request);
    }
    update(id, request) {
        return this.http.put(`${this.base}anexos/${id}`, request);
    }
    destroy(id) {
        return this.http.delete(`${this.base}anexos/${id}`);
    }
    pagination(url: string) {
        return this.http.get(url);
    }
}