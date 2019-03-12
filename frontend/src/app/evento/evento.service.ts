import { Injectable } from '@angular/core';
import {AutenticacionService} from '../autenticacion.service';
import {environment} from '../../environments/environment.prod';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class EventoService {
    base = environment.servidor;

    httpHeaders: any;

    constructor(private http: HttpClient,
                private autenticacionService: AutenticacionService) {
/*        const token = this.autenticacionService.getToken().split('\"')[1];
        this.httpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept' : 'application/json',
            'Authorization' : token
        });*/
    }

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
    store(request) {
        return this.http.post(`${this.base}eventos`, request, {
            headers: this.httpHeaders
        });
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