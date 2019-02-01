import { Component, OnInit } from '@angular/core';
import {MiembroService} from '../../miembro/miembro.service';
import {environment} from '../../../environments/environment.prod';

@Component({
  selector: 'app-evento-index',
  templateUrl: './evento-index.component.html',
  styleUrls: ['./evento-index.component.scss']
})
export class EventoIndexComponent implements OnInit {

    prev_page: string = null;
    next_page: string = null;
    last_page: number = null;
    pages: any = [];
    current_page: any = null;
    miembros: any = null;
    valor = '';
    constructor(private miembroService: MiembroService) {
        this.miembroService.index()
            .subscribe((res: any) => {
                this.miembros = res;
                console.log(res);
                this.current_page = this.miembros.current_page;
                this.prev_page = this.miembros.prev_page_url;
                this.next_page = this.miembros.next_page_url;
                this.last_page = this.miembros.last_page;
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
                url: environment.servidor + 'miembros?page=' + i
            });
        }
    }

    loadPagination(url: string) {
        this.miembroService.pagination(url)
            .subscribe((res: any) => {
                this.miembros = res;
                this.current_page = this.miembros.current_page;
                this.prev_page = this.miembros.prev_page_url;
                this.next_page = this.miembros.next_page_url;
                this.last_page = this.miembros.last_page;
                this.loadPages();
            });
    }

    buscar(valor: string) {
        this.miembroService.buscar(valor)
            .subscribe((res: any) => {
                this.miembros = res;
                this.current_page = this.miembros.current_page;
                this.prev_page = this.miembros.prev_page_url;
                this.next_page = this.miembros.next_page_url;
                this.last_page = this.miembros.last_page;
                this.loadPages();
            });
    }
    destroy(miembro, index) {
        if (confirm('Esta seguro de eliminar al miembro ' + miembro.nombres)) {
            this.miembroService.destroy(miembro.persona_id)
                .subscribe((res: any) => {
                    this.miembros.data.splice(index, 1);
                });
        }
    }
}
