import { Component, OnInit } from '@angular/core';
import {EjecutoraService} from '../../ejecutora/ejecutora.service';

@Component({
  selector: 'app-ejecutora-index',
  templateUrl: './ejecutora-index.component.html',
  styleUrls: ['./ejecutora-index.component.scss']
})
export class EjecutoraIndexComponent implements OnInit {
    prev_page: string = null;
    next_page: string = null;
    last_page: number = null;
    pages: any = [];
    current_page: any = null;
    ejecutoras: any = null;
    valor = '';
    constructor(private ejecutoraService: EjecutoraService) {
        this.ejecutoraService.index()
            .subscribe((res: any) => {
                this.ejecutoras = res;
                this.current_page = this.ejecutoras.current_page;
                this.prev_page = this.ejecutoras.prev_page_url;
                this.next_page = this.ejecutoras.next_page_url;
                this.last_page = this.ejecutoras.last_page;
                this.loadPages();
            });
    }
    ngOnInit() {
    }
    loadPages() {
        for (let i = 1; i <= this.ejecutoras.last_page;  i++) {
            this.pages.push({
                page: i,
                url: this.ejecutoras.path + '?page=' + i
            });
        }
    }
    loadPagination(url: string) {
        this.ejecutoraService.pagination(url)
            .subscribe((res: any) => {
                this.ejecutoras = res;
                this.current_page = this.ejecutoras.current_page;
                this.prev_page = this.ejecutoras.prev_page_url;
                this.next_page = this.ejecutoras.next_page_url;
                this.last_page = this.ejecutoras.last_page;
                this.loadPages();
            });
    }
    buscar(valor: string) {
        this.ejecutoraService.buscar(valor)
            .subscribe((res: any) => {
                this.ejecutoras = res;
                this.current_page = this.ejecutoras.current_page;
                this.prev_page = this.ejecutoras.prev_page_url;
                this.next_page = this.ejecutoras.next_page_url;
                this.last_page = this.ejecutoras.last_page;
                this.loadPages();
            });
    }
    destroy(ejecutora, index) {
        if (confirm('Esta seguro de eliminar al ejecutora ' + ejecutora.nombre)) {
            this.ejecutoraService.destroy(ejecutora.ejecutora_id)
                .subscribe((res: any) => {
                    this.ejecutoras.data.splice(index, 1);
                });
        }
    }
}
