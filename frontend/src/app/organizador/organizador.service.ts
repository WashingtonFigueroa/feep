import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "../../../node_modules/@angular/common/http";

@Injectable()
export class OrganizadorService {
    base = environment.servidor;
    constructor(private http: HttpClient) { }

    index() {
        return this.http.get(`${this.base}organizacion-eventos`);
    }
    buscar(valor: string = '') {
        return this.http.get(`${this.base}organizacion-eventos-buscar/${valor}`);
    }
    show(id) {
        return this.http.get(`${this.base}organizacion-eventos/${id}`);
    }
    store(request) {
        return this.http.post(`${this.base}organizacion-eventos`, request);
    }
    update(id, request) {
        return this.http.put(`${this.base}organizacion-eventos/${id}`, request);
    }
    destroy(id) {
        return this.http.delete(`${this.base}organizacion-eventos/${id}`);
    }
    pagination(url: string) {
        return this.http.get(url);
    }
}