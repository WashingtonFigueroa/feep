import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {TipoOrganizacionService} from '../tipo-organizacion.service';

@Component({
  selector: 'app-tipo-organizacion-index',
  templateUrl: './tipo-organizacion-index.component.html',
  styleUrls: ['./tipo-organizacion-index.component.scss']
})
export class TipoOrganizacionIndexComponent implements OnInit {
    prev_page: string = null;
    next_page: string = null;
    last_page: number = null;
    pages: any = [];
    current_page: any = null;
    tipoorganizaciones: any = null;
    valor = '';
    constructor(private tipoorganizacionService: TipoOrganizacionService) {
        this.tipoorganizacionService.index()
            .subscribe((res: any) => {
                this.tipoorganizaciones = res;
                this.current_page = this.tipoorganizaciones.current_page;
                this.prev_page = this.tipoorganizaciones.prev_page_url;
                this.next_page = this.tipoorganizaciones.next_page_url;
                this.last_page = this.tipoorganizaciones.last_page;
                this.loadPages();
            });
    }

    ngOnInit() {
    }

    loadPages() {
        this.pages = [];
        for (let i = 1; i <= this.last_page; i++) {
            this.pages.push({
                item: i,
                url: environment.servidor + 'tipoorganizaciones?page=' + i
            });
        }
    }

    loadPagination(url: string) {
        this.tipoorganizacionService.pagination(url)
            .subscribe((res: any) => {
                this.tipoorganizaciones = res;
                this.current_page = this.tipoorganizaciones.current_page;
                this.prev_page = this.tipoorganizaciones.prev_page_url;
                this.next_page = this.tipoorganizaciones.next_page_url;
                this.last_page = this.tipoorganizaciones.last_page;
                this.loadPages();
            });
    }

    buscar(valor: string) {
        this.tipoorganizacionService.buscar(valor)
            .subscribe((res: any) => {
                this.tipoorganizaciones = res;
                this.current_page = this.tipoorganizaciones.current_page;
                this.prev_page = this.tipoorganizaciones.prev_page_url;
                this.next_page = this.tipoorganizaciones.next_page_url;
                this.last_page = this.tipoorganizaciones.last_page;
                this.loadPages();
            });
    }
    destroy(tipoorganizacion, index) {
        if (confirm('Esta seguro de eliminar al tipoorganizacion ' + tipoorganizacion.nombres)) {
            this.tipoorganizacionService.destroy(tipoorganizacion.tipo_organizacion_id)
                .subscribe((res: any) => {
                    this.tipoorganizaciones.data.splice(index, 1);
                });
        }
    }
}

