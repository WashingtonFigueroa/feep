import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "../../../node_modules/@angular/common/http";

@Injectable()
export class InscripcionService {
    base = environment.servidor;
    constructor(private http: HttpClient) { }

    index() {
        return this.http.get(`${this.base}participantes`);
    }
    buscar(valor: string = '') {
        return this.http.get(`${this.base}participantes-buscar/${valor}`);
    }
    show(id) {
        return this.http.get(`${this.base}participantes/${id}`);
    }
    store(request) {
        return this.http.post(`${this.base}participantes`, request);
    }
    update(id, request) {
        return this.http.put(`${this.base}participantes/${id}`, request);
    }
    destroy(id) {
        return this.http.delete(`${this.base}participantes/${id}`);
    }
    pagination(url: string) {
        return this.http.get(url);
    }
}