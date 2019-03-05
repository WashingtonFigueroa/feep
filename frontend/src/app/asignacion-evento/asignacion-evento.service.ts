import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "../../../node_modules/@angular/common/http";

@Injectable()
export class AsignacionEventoService {
    base = environment.servidor;
    constructor(private http: HttpClient) { }
    index() {
        return this.http.get(`${this.base}asignacion-proyectos`);
    }
    listar() {
        return this.http.get(`${this.base}asignacion-proyectos-listar`);
    }
    buscar(valor: string = '') {
        return this.http.get(`${this.base}asignacion-proyectos-buscar/${valor}`);
    }
    show(id) {
        return this.http.get(`${this.base}asignacion-proyectos/${id}`);
    }
    store(request) {
        return this.http.post(`${this.base}asignacion-proyectos`, request);
    }
    update(id, request) {
        return this.http.put(`${this.base}asignacion-proyectos/${id}`, request);
    }
    destroy(id) {
        return this.http.delete(`${this.base}asignacion-proyectos/${id}`);
    }
    pagination(url: string) {
        return this.http.get(url);
    }
}
