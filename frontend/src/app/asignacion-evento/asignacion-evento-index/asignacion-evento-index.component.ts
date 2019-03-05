import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {ProyectoService} from "../../proyecto/proyecto.service";
import {AsignacionEventoService} from "../asignacion-evento.service";

@Component({
  selector: 'app-asignacion-evento-index',
  templateUrl: './asignacion-evento-index.component.html',
  styleUrls: ['./asignacion-evento-index.component.scss']
})
export class AsignacionEventoIndexComponent implements OnInit {
    prev_page: string = null;
    next_page: string = null;
    last_page: number = null;
    pages: any = [];
    current_page: any = null;
    asigancionproyectos: any = null;
    valor = '';
    constructor(private asignacionproyectoService: AsignacionEventoService) {
        this.asignacionproyectoService.index().subscribe((res: any) => {
            this.asigancionproyectos = res;
            this.current_page = this.asigancionproyectos.current_page;
            this.prev_page = this.asigancionproyectos.prev_page_url;
            this.next_page = this.asigancionproyectos.next_page_url;
            this.last_page = this.asigancionproyectos.last_page;
            this.loadPages();
        });
    }
    ngOnInit() {
    }
    loadPages() {
        this.pages = [];
        for (let i = 1; i <= this.asigancionproyectos.last_page;  i++) {
            this.pages.push({
                page: i,
                url: this.asigancionproyectos.path + '?page=' + i
            });
        }
    }
    loadPagination(url: string) {
        this.asignacionproyectoService.pagination(url)
            .subscribe((res: any) => {
                this.asigancionproyectos = res;
                this.current_page = this.asigancionproyectos.current_page;
                this.prev_page = this.asigancionproyectos.prev_page_url;
                this.next_page = this.asigancionproyectos.next_page_url;
                this.last_page = this.asigancionproyectos.last_page;
                this.loadPages();
            });
    }
    buscar(valor: string) {
        this.asignacionproyectoService.buscar(valor)
            .subscribe((res: any) => {
                this.asigancionproyectos = res;
                this.current_page = this.asigancionproyectos.current_page;
                this.prev_page = this.asigancionproyectos.prev_page_url;
                this.next_page = this.asigancionproyectos.next_page_url;
                this.last_page = this.asigancionproyectos.last_page;
                this.loadPages();
            });
    }
    destroy(asignacion_evento, index) {
        if (confirm('Esta seguro de eliminar el usuario del proyecto ' + asignacion_evento.nombre)) {
            this.asignacionproyectoService.destroy(asignacion_evento.asignacion_evento_id)
                .subscribe((res: any) => {
                    this.asigancionproyectos.data.splice(index, 1);
                });
        }
    }
}
