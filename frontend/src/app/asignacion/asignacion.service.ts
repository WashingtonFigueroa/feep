import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "../../../node_modules/@angular/common/http";

@Injectable()
export class AsignacionService {
    base = environment.servidor;
    constructor(private http: HttpClient) { }

    index() {
        return this.http.get(`${this.base}insumos`);
    }
    buscar(valor: string = '') {
        return this.http.get(`${this.base}insumos-buscar/${valor}`);
    }
    show(id) {
        return this.http.get(`${this.base}insumos/${id}`);
    }
    store(request) {
        return this.http.post(`${this.base}insumos`, request);
    }
    update(id, request) {
        return this.http.put(`${this.base}insumos/${id}`, request);
    }
    destroy(id) {
        return this.http.delete(`${this.base}insumos/${id}`);
    }
    pagination(url: string) {
        return this.http.get(url);
    }
}