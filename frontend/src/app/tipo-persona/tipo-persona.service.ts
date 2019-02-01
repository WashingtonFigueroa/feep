import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '../../../node_modules/@angular/common/http';

@Injectable()
export class TipoPersonaService {
    base = environment.servidor;
    constructor(private http: HttpClient) { }

    index() {
        return this.http.get(`${this.base}tipo-personas`);
    }
    listar() {
        return this.http.get(`${this.base}tipo-personas-listar`);
    }
    buscar(valor: string = '') {
        return this.http.get(`${this.base}tipo-personas-buscar/${valor}`);
    }
    show(id) {
        return this.http.get(`${this.base}tipo-personas/${id}`);
    }
    store(request) {
        return this.http.post(`${this.base}tipo-personas`, request);
    }
    update(id, request) {
        return this.http.put(`${this.base}tipo-personas/${id}`, request);
    }
    destroy(id) {
        return this.http.delete(`${this.base}tipo-personas/${id}`);
    }
    pagination(url: string) {
        return this.http.get(url);
    }

}
