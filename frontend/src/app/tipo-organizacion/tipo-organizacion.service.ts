import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TipoOrganizacionService {
    base = environment.servidor;
    constructor(private http: HttpClient) { }

    index() {
        return this.http.get(`${this.base}tipo-organizaciones`);
    }
    buscar(valor: string = '') {
        return this.http.get(`${this.base}tipo-organizaciones-buscar/${valor}`);
    }
    show(id) {
        return this.http.get(`${this.base}tipo-organizaciones/${id}`);
    }
    store(request) {
        return this.http.post(`${this.base}tipo-organizaciones`, request);
    }
    update(id, request) {
        return this.http.put(`${this.base}tipo-organizaciones/${id}`, request);
    }
    destroy(id) {
        return this.http.delete(`${this.base}tipo-organizaciones/${id}`);
    }
    pagination(url: string) {
        return this.http.get(url);
    }

}
