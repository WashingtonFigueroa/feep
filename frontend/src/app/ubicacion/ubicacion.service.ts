import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "../../../node_modules/@angular/common/http";

@Injectable()
export class UbicacionService {

    base = environment.servidor;
    constructor(private http: HttpClient) { }

    indexprovincias() {
        return this.http.get(`${this.base}provincias`);
    }
    provinciaslistar() {
        return this.http.get(`${this.base}provincias-listar`);
    }
    loadprovincias(url) {
        return this.http.get(url);
    }
    showprovincias(id) {
        return this.http.get(`${this.base}provincias/${id}`);
    }
    storeprovincias(request) {
        return this.http.post(`${this.base}provincias`, request);
    }
    updateprovincias(id, request) {
        return this.http.put(`${this.base}provincias/${id}`, request);
    }
    destroyprovincias(id) {
        return this.http.delete(`${this.base}provincias/${id}`);
    }
    //Rutas Ciudad
    indexciudades() {
        return this.http.get(`${this.base}ciudades`);
    }
    loadciudades(url) {
        return this.http.get(url);
    }
    showciudades(id) {
        return this.http.get(`${this.base}ciudades/${id}`);
    }
    storeciudades(request) {
        return this.http.post(`${this.base}ciudades`, request);
    }
    updateciudades(id, request) {
        return this.http.put(`${this.base}ciudades/${id}`, request);
    }
    destroyciudades(id) {
        return this.http.delete(`${this.base}ciudades/${id}`);
    }


}
