import { Component, OnInit } from '@angular/core';
import {TipoEventoService} from '../tipo-evento.service';

@Component({
  selector: 'app-tipo-evento-index',
  templateUrl: './tipo-evento-index.component.html',
  styleUrls: ['./tipo-evento-index.component.scss']
})
export class TipoEventoIndexComponent implements OnInit {
    tipoEventos: any = null;
    pages: any = [];
    constructor(private tipoEventosService: TipoEventoService) {
        this.tipoEventosService.index()
            .subscribe((res: any) => {
                this.tipoEventos = res;
                this.loadPages();
            });
    }

    ngOnInit() {
    }

    loadPages() {
        for (let i = 1; i <= this.tipoEventos.last_page;  i++) {
            this.pages.push({
                page: i,
                url: this.tipoEventos.path + '?page=' + i
            });
        }
    }
    load(url) {
        this.tipoEventosService.load(url)
            .subscribe((res: any) => {
                this.tipoEventos = res;
            })
    }
    destroy(tipoevento, index) {
        if (confirm(`¿Esta seguro de eliminar ${tipoevento.nombre}?`)) {
            this.tipoEventosService.destroy(tipoevento.tipo_evento_id)
                .subscribe((res: any) => {
                    this.tipoEventos.data.splice(index, 1);
                });
        }
    }
}
