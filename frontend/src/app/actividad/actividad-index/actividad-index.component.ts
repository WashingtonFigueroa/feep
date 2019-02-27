import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {ActividadService} from '../actividad.service';

@Component({
  selector: 'app-actividad-index',
  templateUrl: './actividad-index.component.html',
  styleUrls: ['./actividad-index.component.scss']
})
export class ActividadIndexComponent implements OnInit {
    prev_page: string = null;
    next_page: string = null;
    last_page: number = null;
    pages: any = [];
    current_page: any = null;
    actividades: any = null;
    valor = '';
    constructor(private actividadService: ActividadService) {
        this.actividadService.index()
            .subscribe((res: any) => {
                this.actividades = res;
                this.current_page = this.actividades.current_page;
                this.prev_page = this.actividades.prev_page_url;
                this.next_page = this.actividades.next_page_url;
                this.last_page = this.actividades.last_page;
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
                url: environment.servidor + 'actividades?page=' + i
            });
        }
    }
    loadPagination(url: string) {
        this.actividadService.pagination(url)
            .subscribe((res: any) => {
                this.actividades = res;
                this.current_page = this.actividades.current_page;
                this.prev_page = this.actividades.prev_page_url;
                this.next_page = this.actividades.next_page_url;
                this.last_page = this.actividades.last_page;
                this.loadPages();
            });
    }
    buscar(valor: string) {
        this.actividadService.buscar(valor)
            .subscribe((res: any) => {
                this.actividades = res;
                this.current_page = this.actividades.current_page;
                this.prev_page = this.actividades.prev_page_url;
                this.next_page = this.actividades.next_page_url;
                this.last_page = this.actividades.last_page;
                this.loadPages();
            });
    }
    destroy(actividad, index) {
        if (confirm('Esta seguro de eliminar al actividad ' + actividad.nombres)) {
            this.actividadService.destroy(actividad.actividad_id)
                .subscribe((res: any) => {
                    this.actividades.data.splice(index, 1);
                });
        }
    }
}
