import { Component, OnInit } from '@angular/core';
import {TipoProyectoService} from '../tipo-proyecto.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-tipo-proyecto-index',
  templateUrl: './tipo-proyecto-index.component.html',
  styleUrls: ['./tipo-proyecto-index.component.scss']
})
export class TipoProyectoIndexComponent implements OnInit {
    prev_page: string = null;
    next_page: string = null;
    last_page: number = null;
    pages: any = [];
    current_page: any = null;
    tipoProyectos: any = null;
    valor = '';
    constructor(private tipoProyectoService: TipoProyectoService,
                private toastrService:ToastrService ) {
        this.tipoProyectoService.index().subscribe((res: any) => {
            this.tipoProyectos = res;
            this.current_page = this.tipoProyectos.current_page;
            this.prev_page = this.tipoProyectos.prev_page_url;
            this.next_page = this.tipoProyectos.next_page_url;
            this.last_page = this.tipoProyectos.last_page;
            this.loadPages();
        });
    }
    ngOnInit() {
    }
    loadPages() {
        this.pages = [];
        for (let i = 1; i <= this.tipoProyectos.last_page;  i++) {
            this.pages.push({
                page: i,
                url: this.tipoProyectos.path + '?page=' + i
            });
        }
    }
    loadPagination(url: string) {
        this.tipoProyectoService.pagination(url)
            .subscribe((res: any) => {
                this.tipoProyectos = res;
                this.current_page = this.tipoProyectos.current_page;
                this.prev_page = this.tipoProyectos.prev_page_url;
                this.next_page = this.tipoProyectos.next_page_url;
                this.last_page = this.tipoProyectos.last_page;
                this.loadPages();
            });
    }
    buscar(valor: string) {
        this.tipoProyectoService.buscar(valor)
            .subscribe((res: any) => {
                this.tipoProyectos = res;
                this.current_page = this.tipoProyectos.current_page;
                this.prev_page = this.tipoProyectos.prev_page_url;
                this.next_page = this.tipoProyectos.next_page_url;
                this.last_page = this.tipoProyectos.last_page;
                this.loadPages();
            });
    }
    destroy(tipo_proyecto, index) {
        if (confirm(`¿Esta seguro de eliminar ${tipo_proyecto.nombre}?`)) {
            this.tipoProyectoService.destroy(tipo_proyecto.tipo_proyecto_id)
                .subscribe((res: any) => {
                    this.tipoProyectos.data.splice(index, 1);
                });
        }
    }
}
