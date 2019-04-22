import { Component, OnInit } from '@angular/core';
import {MiembroService} from '../../miembro/miembro.service';
import {environment} from '../../../environments/environment.prod';
import {ResumenService} from '../resumen.service';

@Component({
  selector: 'app-resumen-index',
  templateUrl: './resumen-index.component.html',
  styleUrls: ['./resumen-index.component.scss']
})
export class ResumenIndexComponent implements OnInit {
    prev_page: string = null;
    next_page: string = null;
    last_page: number = null;
    pages: any = [];
    current_page: any = null;
    resumenes: any = null;
    valor = '';
    constructor(private resumenService: ResumenService) {
        this.resumenService.index()
            .subscribe((res: any) => {
                this.resumenes = res;
                this.current_page = this.resumenes.current_page;
                this.prev_page = this.resumenes.prev_page_url;
                this.next_page = this.resumenes.next_page_url;
                this.last_page = this.resumenes.last_page;
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
                url: environment.servidor + 'resumenes?page=' + i
            });
        }
    }
    loadPagination(url: string) {
        this.resumenService.pagination(url)
            .subscribe((res: any) => {
                this.resumenes = res;
                this.current_page = this.resumenes.current_page;
                this.prev_page = this.resumenes.prev_page_url;
                this.next_page = this.resumenes.next_page_url;
                this.last_page = this.resumenes.last_page;
                this.loadPages();
            });
    }
    buscar(valor: string) {
        this.resumenService.buscar(valor)
            .subscribe((res: any) => {
                this.resumenes = res;
                this.current_page = this.resumenes.current_page;
                this.prev_page = this.resumenes.prev_page_url;
                this.next_page = this.resumenes.next_page_url;
                this.last_page = this.resumenes.last_page;
                this.loadPages();
            });
    }
    destroy(resumenes, index) {
        if (confirm('Esta seguro de eliminar')) {
            this.resumenService.destroy(resumenes.resumen_id)
                .subscribe((res: any) => {
                    this.resumenes.data.splice(index, 1);
                });
        }
    }
}
