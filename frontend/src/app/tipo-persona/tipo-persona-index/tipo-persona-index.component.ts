import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {TipoPersonaService} from '../tipo-persona.service';

@Component({
  selector: 'app-tipo-persona-index',
  templateUrl: './tipo-persona-index.component.html',
  styleUrls: ['./tipo-persona-index.component.scss']
})
export class TipoPersonaIndexComponent implements OnInit {

    prev_page: string = null;
    next_page: string = null;
    last_page: number = null;
    pages: any = [];
    current_page: any = null;
    tipopersona: any = null;
    valor = '';
    constructor(private tipopersonaService: TipoPersonaService) {
        this.tipopersonaService.index()
            .subscribe((res: any) => {
                this.tipopersona = res;
                this.current_page = this.tipopersona.current_page;
                this.prev_page = this.tipopersona.prev_page_url;
                this.next_page = this.tipopersona.next_page_url;
                this.last_page = this.tipopersona.last_page;
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
                url: environment.servidor + 'tipopersona?page=' + i
            });
        }
    }

    loadPagination(url: string) {
        this.tipopersonaService.pagination(url)
            .subscribe((res: any) => {
                this.tipopersona = res;
                this.current_page = this.tipopersona.current_page;
                this.prev_page = this.tipopersona.prev_page_url;
                this.next_page = this.tipopersona.next_page_url;
                this.last_page = this.tipopersona.last_page;
                this.loadPages();
            });
    }

    buscar(valor: string) {
        this.tipopersonaService.buscar(valor)
            .subscribe((res: any) => {
                this.tipopersona = res;
                this.current_page = this.tipopersona.current_page;
                this.prev_page = this.tipopersona.prev_page_url;
                this.next_page = this.tipopersona.next_page_url;
                this.last_page = this.tipopersona.last_page;
                this.loadPages();
            });
    }
    destroy(tipopersona, index) {
        if (confirm('Esta seguro de eliminar al tipopersona ' + tipopersona.nombre)) {
            this.tipopersonaService.destroy(tipopersona.tipo_persona_id)
                .subscribe((res: any) => {
                    this.tipopersona.data.splice(index, 1);
                });
        }
    }
}